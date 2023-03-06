package cfx70.cfpl.draft

import scala.math._
import scala.language.implicitConversions

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
    
    implicit def tpl2vpops(tpl : (Vec,Double) ) : PRad = new PRad(tpl._1,tpl._2)
//    implicit def tpl2vpops(tpl : (Vec,Int) ) : PRad =new PRad(tpl._1,tpl._2.toDouble)

	class PRad(val p : Vec, val rad : Double){
	  def p3c(p2 : Vec, l2:Double) : Vec = {
			val l = (p2 - p).mod
			if( rad+l < l2 || rad+l2 < l || l+l2 < rad){
				println(s"not intersected $rad $l $l2")
				Vec(Double.NaN,Double.NaN)
			}else{
				val cosa = (rad * rad + l * l - l2 * l2) / (2 * l * rad)
				val (cosb, sinb) = ((p2.x - p.x)/l, (p2.y - p.y)/l )
				val matr = Mat(2)(
				  cosb, -sinb, 
				  sinb,  cosb)
				val ortC0 =Vec(cosa, sqrt(1-cosa*cosa) )
				(matr * ortC0) * rad + p
		   }					
	   }
	   def perp : Vec = {
		   val mort = p.normalize
		   Vec(mort.y, -mort.x) * rad
	   }
	  def /\( other : PRad ) : Vec = p3c(other.p,other.rad) 		
	}
	
	 object Side extends Enumeration {
        type Side = Value
        val TOP, BOTTOM, LEFT, RIGHT = Value
    }
}

abstract class Dev[M <: Model] (val model : M) {
   import Dev._
   var mscl = min((vsz/2 - (dimspace + dimstep) * 2) /( model.whdsize.y),
						(vsz/2 - (dimspace + dimstep) * 2) /( model.whdsize.z))
        
   def draw(ctx : Context2d)
      
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
   import Dev.Side._
    
   val step = 2
   
   /*    9_8_7_2_3_4_5
    *    /\    /\    /\         |     _
    *   /  \  /  \  /  \        |    / \
    *  /____\/____\/____\       |   |   ]0
     10      0     1     6
    *  |____||____||____|
    * 16  15 11  12 13  14
    */

   def devPoints (side : Side) : Seq[Vec] = {
		val bp = model.cn.bpts
		val tp = model.cn.tpts
		val s = BGeometry.segments
		val dd = (Pi * model.d) / (s/step)
		var pts = Seq( Vec(-model.a1/2,0), Vec(model.a1/2,0) )
		var (l1,l2) = side match {
			case TOP    => ( (tp(s/4)-bp(0)).mod, (tp(s/4)-bp(1)).mod )
			case BOTTOM => ( (tp(3*s/4)-bp(2)).mod, (tp(3*s/4)-bp(3)).mod )
		}
		pts :+= (pts(0), l1) /\ (pts(1), l2)
		val (pnr, flr) = side match {
			case TOP    =>(Map( (s/4 + step) -> 2, 
							    (s/4 + 2*step) -> 3, 
							    (s/4 + 3*step) -> 4),
							    (i : Int) => (tp(i)-bp(1)).mod
						)
			case BOTTOM => (Map( (3*s/4 + step) -> 2, 
				                 (3*s/4 + 2*step) -> 3, 
				                 (3*s/4 + 3*step) -> 4),
				                 (i : Int) => (tp(i)-bp(3)).mod
						)
		}
		for( (i,j) <- pnr ) pts :+= (pts(j), dd) /\ (pts(1), flr(i) )
		l1 = side match {
			case TOP    => (tp(s/2) - ((bp(2)-bp(1))*0.5 + bp(1))).mod
			case BOTTOM => (tp(0) - ((bp(0)-bp(3))*0.5 + bp(3))).mod
		}
		pts :+= (pts(5), l1 ) /\ (pts(1), model.b1/2)
		val (pnl, fll) = side match {
			case TOP    =>(Map( (s/4 - step) -> 2,
					            (s/4 - 2*step) -> 7,
					            (s/4 - 3*step) -> 8 ),
							    (i : Int) => (tp(i)-bp(0)).mod
						)
			case BOTTOM => (Map( (3*s/4 - step) -> 2, 
				                 (3*s/4 - 2*step) -> 7, 
				                 (3*s/4 - 3*step) -> 8 ),
				                 (i : Int) => (tp(i)-bp(2)).mod
						)
		}
		for( (i,j) <- pnl )	pts :+= (pts(0),fll(i) ) /\ (pts(j),dd)
		l1 = side match {
			case TOP    => (tp(0) - ((bp(3)-bp(0))*0.5 + bp(0))).mod
			case BOTTOM => (tp(s/2) - ((bp(1)-bp(2))*0.5 + bp(2))).mod
		}
		pts :+= (pts(0), model.b1/2) /\ (pts(9), l1 )
//		 !!
		 println( (pts(6) - pts(1)) * (pts(6)-pts(5)) < epsilon )
		 println( (pts(10) - pts(0)) * (pts(10)-pts(9)) < epsilon)
		 
		 pts :+= (pts(1)-pts(0),model.df1).perp + pts(0)
		 pts :+= (pts(1)-pts(0),model.df1).perp + pts(1)

		 pts :+= (pts(6)-pts(1),model.df1).perp + pts(1)
		 pts :+= (pts(6)-pts(1),model.df1).perp + pts(6)

		 pts :+= (pts(0)-pts(10),model.df1).perp + pts(0)
		 pts :+= (pts(0)-pts(10),model.df1).perp + pts(10)

	   pts
   }
      
   def drawDev(pts : Seq[Vec], ctx : Context2d){
		ctx.beginPath()
        ctx.lineWidth = Dev.lineWidth
		ctx M pts(0) L pts(1)
		ctx M pts(2) L pts(3) L pts(4) L pts(5) L pts(6) L pts(1) 
		ctx M pts(2) L pts(7) L pts(8) L pts(9) L pts(10) L pts(0)
		
		ctx M pts(0) L pts(11) L pts(12) L pts(1)
		ctx M pts(1) L pts(13) L pts(14) L pts(6)
		ctx M pts(10) L pts(16) L pts(15) L pts(0) 
		ctx.stroke()
		
		ctx.beginPath()
        ctx.lineWidth=Dev.thinlineWidth
        ctx.M(pts(0)) L(pts(2)) M(pts(0)) L(pts(7)) M(pts(0)) L(pts(8)) M(pts(0)) L(pts(9))
        ctx.M(pts(1)) L(pts(2)) M(pts(1)) L(pts(3)) M(pts(1)) L(pts(4)) M(pts(1)) L(pts(5))
		ctx.stroke()	   
   }
   
   def maxminY(pts : Seq[Vec]) = {
	   val m = (v1:Vec, v2:Vec) => {
		  val mx = if(v1.x>v2.y) v1.x else v2.y
		  val mn = if(v1.y<v2.y) v1.y else v2.y
		  Vec(mx,mn)
	   }
	   pts.foldLeft(Vec(0,0))(m(_, _))
   }
	   

    def draw(ctx : Context2d){
		val ptst = devPoints(TOP)
		val ptsb = devPoints(BOTTOM)
		val mmt = maxminY(ptst)
		val mmb = maxminY(ptsb)
		println(mmt)
		println(mmb)
		val figH = vsz/2 - 2 * (dimspace+dimstep)
		val sclt = figH / (mmt.x - mmt.y) 
		val sclb = figH / (mmb.x - mmb.y) 
		mscl = sclt min sclb
		ctx.save() 
		beginDraw(ctx)
        ctx.translate(0,dimspace)
        if(mmt.y < 0) ctx.translateS(0,-mmt.y)
        drawDev(ptst,ctx)
        if(mmt.y < 0) ctx.translateS(0,mmt.y)
        ctx.translate(0,-vsz/2)
        if(mmb.y < 0) ctx.translateS(0,-mmb.y)
        drawDev(ptsb,ctx)
		ctx.restore()
   }

}
