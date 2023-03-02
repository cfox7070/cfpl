package cfx70.cfpl.draft

import scala.math._

import scala.scalajs.js

import cfx70.vecquat._

import cfx70.cfpl.core._
import cfx70.cfpl.core.CommonHelpers._
import cfx70.cfpl.core.Helpers2d._

object Dev{
    val lineWidth=4.0
    val thinlineWidth=2.0
    val vsz=1200; val hsz=1600
    val (dimspace, dimstep) = (60,50)
	
    
    def apply(m:Model)= m match {
        case rr : RedRR => Some(new RedRRDev(rr) )
        case rc : RedRC => Some(new RedRCDev(rc) )
//        case cc : RedCC => new RedCCDev(cc)
		case _ => None
    }
}

abstract class Dev[M <: Model] (val model : M) {
   import Dev._
   val mscl = min((vsz/2 - (dimspace + dimstep) * 2) /( model.whdsize.y),
						(vsz/2 - (dimspace + dimstep) * 2) /( model.whdsize.z))
        
   def draw(ctx : Context2d)
   
   def p3c(p1 : Vec, p2 : Vec, l1:Double, l2:Double) : Vec = {
		val l = (p2 - p1).mod
		val cosa = (l1 * l1 + l * l - l2 * l2) / (2 * l * l1)
		val (cosb, sinb) = ((p2.x - p1.x)/l, (p2.y - p1.y)/l )
		val vecl1 =( Mat(2)(
		  cosb, -sinb, 
		  sinb,  cosb) * Vec(cosa,sqrt(1-cosa*cosa)) ) * l1
		vecl1 + p1		
   }
   
   def ##(t1:(Vec, Double), t2:(Vec, Double) ):Vec = p3c(t1._1,t2._1,t1._2,t2._2)
   
   protected def beginDraw(ctx : Context2d) {
        ctx.beginPath()
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(0, 0, hsz, vsz)
        ctx.translate(hsz/2,vsz/2)
        ctx.scale(1,-1)
        ctx.lineJoin = "bevel"
		RichContext.ctx=ctx
        RichContext.lscale=mscl
   }
}

class RedRRDev(m:RedRR) extends Dev(m) {
    
   import Dev._
         
   def topPoints : Seq[Vec] = {
	  	val fcb = model.fcb.top.map(_.xz - model.fcb.top(3).xz)
		val h = model.cn.hside(model.cn.top)
		val fct0 = model.fct.top.map(_.xz - model.fcb.top(3).xz)
		val hvec = Vec( 0, (h+fcb(2).y) - fct0(3).y )
		val fct = fct0.map(_ + hvec)
		val scl = Mat.apply(2)(
		  -1, 0, 
		   0, 1)
		(fcb ++ fct).map( scl * _ )
   }
   
   def bottomPoints : Seq[Vec] = {
	  	val fcb = model.fcb.bottom.map(_.xz - model.fcb.bottom(2).xz)
		val h = model.cn.hside(model.cn.bottom)
		val fct0 = model.fct.bottom.map(_.xz - model.fcb.bottom(2).xz)
		val hvec = Vec( 0, (h+fcb(2).y) - fct0(3).y )
		val fct = fct0.map(_ + hvec)
		fcb ++ fct
   }

   def rightPoints : Seq[Vec] = {
	  	val fcb = model.fcb.right.map(_.yz - model.fcb.right(2).yz)
		val h = model.cn.hside(model.cn.right)
		val fct0 = model.fct.right.map(_.yz - model.fcb.right(2).yz)
		val hvec = Vec( 0, (h+fcb(2).y) - fct0(3).y )
		val fct = fct0.map(_ + hvec)
		fcb ++ fct
   }
   
   def leftPoints : Seq[Vec] = {
	  	val fcb = model.fcb.left.map(_.yz - model.fcb.left(3).yz)
		val h = model.cn.hside(model.cn.left)
		val fct0 = model.fct.left.map(_.yz - model.fcb.left(3).yz)
		val hvec = Vec( 0, (h+fcb(2).y) - fct0(3).y )
		val fct = fct0.map(_ + hvec)
		val scl = Mat.apply(2)(
		  -1, 0, 
		   0, 1)
		(fcb ++ fct).map( scl * _ )
   }
   
   def drawDev(pnts : Seq[Vec],letter : String)(implicit ctx:Context2d){
	   
	   def leftmost(l:Vec, r:Vec) = if(l.x < r.x) l else Vec(r.x,l.y)

	   val lft = pnts.foldLeft( Vec(0,-(dimspace+dimstep)) )(leftmost(_, _) )
	   val pts = pnts.map( _ - lft )

       ctx.beginPath()
       ctx.fillStyle = "#000"
       ctx.lineWidth=Dev.lineWidth
 	   ctx.polygon(pts(0),pts(1),pts(4), pts(5), pts(6), pts(7), pts(2), pts(3) )
	   ctx.stroke()

	   ctx.beginPath()
       ctx.lineWidth=Dev.thinlineWidth
       ctx.setLineDash( js.Array(50, 10) )
       ctx.line( pts(1), pts(2) )
       ctx.line( pts(4), pts(7) )
       ctx.stroke()

	   ctx.beginPath()
       ctx.lineWidth=Dev.lineWidth
       ctx.setLineDash( js.Array() )
       
	   val (dtop, dbot) = (vsz/2-dimspace-dimstep, dimstep)
       Dim.hor(pts(0),pts(3),dbot,0)
	   if(pts(7).x < pts(3).x) Dim.hor(pts(7),pts(3),dbot,0) 
	   if(pts(0).x < pts(4).x) Dim.hor(pts(0),pts(4),dbot,0) 
       Dim.hor(pts(5),pts(6),dtop,0)
	   if(pts(7).x > pts(3).x) Dim.hor(pts(7),pts(3),dtop,0) 
	   if(pts(0).x > pts(4).x) Dim.hor(pts(0),pts(4),dtop,0) 
       
       val (dr, dl) = (max(pts(0).x,pts(5).x)+dimspace, min(pts(3).x,pts(7).x) - dimspace )
       Dim.vert(pts(0),pts(1),dr,0)
       Dim.vert(pts(1),pts(4),dr,0)
       Dim.vert(pts(4),pts(5),dr,0)
       Dim.vert(pts(3),pts(6),dl,0)
       
       val l1 = new Line3(Vec(pts(1).x,pts(1).y,0), Vec(pts(7).x,pts(7).y,0) )
       val l2 = new Line3(Vec(pts(2).x,pts(2).y,0), Vec(pts(4).x,pts(4).y,0) )
       val oc = l1.intersect(l2)
	   ctx.beginPath()
	   oc match {
			case Some(c) => { ctx.save()
							  ctx.translateS(c.x,c.y)
							  ctx.scale(1,-1)
							  ctx.font = "italic 5em sans-serif"
							  ctx.textBaseline="middle"
							  ctx.fillText(letter, 0,0)
							  ctx.restore()
							}
			case None => println("not intersects")
		}	   
   }
   
    def draw(ctx : Context2d){
		implicit val mctx = ctx
		ctx.save()
		beginDraw(ctx)
        ctx.translate(-hsz/2+dimspace + 2 * dimstep, dimstep)
		drawDev(topPoints, "A")
        ctx.translate(0,-(vsz/2) )
		drawDev(bottomPoints, "B")
        ctx.translate( hsz/2/* + dimspace*/, 0)
		drawDev(rightPoints, "D")
        ctx.translate( 0, vsz/2)
		drawDev(leftPoints, "C")
		ctx.restore()
   }
}

class RedRCDev(m:RedRC) extends Dev(m) {
    
   import Dev._
   
   val step = 2
   
   def topPoints : Seq[Vec] = {
		var pts = Seq( Vec(-model.a1/2,0), Vec(model.a1/2,0) )
		val bp = model.cn.bpts
		val tp = model.cn.tpts
		val s = BGeometry.segments
		val dd = model.d / (s/step)
		pts :+= p3c(pts(0),pts(1),(tp(s/4)-bp(0)).mod,(tp(s/4)-bp(0)).mod) 
		for( i <- (s/4 - step) to 0 by -step) pts :+= ##( (pts.last,dd), (pts(1),(tp(i)-bp(0)).mod) )
		pts
   }

    def draw(ctx : Context2d){
		implicit val mctx = ctx
		ctx.save() 
		beginDraw(ctx)
		val pts = topPoints
		ctx.M(pts(0)) L(pts(1))
		ctx.M(pts(2)) L(pts(3)) L(pts(4)) L(pts(5))
		ctx.stroke()

		ctx.restore()
   }

}