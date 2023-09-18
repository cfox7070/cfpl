package cfx70.cfpl.draft

import scala.math._
import scala.language.implicitConversions

import scala.scalajs.js

import cfx70.vecquat._

import cfx70.cfpl.core._
import cfx70.cfpl.core.CommonHelpers._
import cfx70.cfpl.core.Helpers2d._
import cfx70.cfpl.core.Side._

object Dev{
    val lineWidth=4.0
    val thinlineWidth=2.0
    val vsz=1200; val hsz=1600
    val (dimspace, dimstep) = (60,50)
	
    def apply(m:Model,step:Int = 1)= m match {
        case rr : RedRR => Some(new RedRRDev(rr) )
        case rc : RedRC => Some(new RedRCDev(rc, step) )
        case cc : RedCC => Some(new RedCCDev(cc, step) )
		case _ => None
    }
    
    implicit def tpl2vpops(tpl : (Vec,Double) ) : PRad = new PRad(tpl._1,tpl._2)

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
	def dist(p1 : Vec, p2 : Vec, acc : Double = 0) ={
			if(acc == 0) (p2 - p1).mod
			else ((p2 - p1).mod/acc).round * acc}

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
	   if(pts(7).x < pts(3).x) Dim.hor(pts(7),pts(3),dbot,1) 
	   if(pts(0).x < pts(4).x) Dim.hor(pts(0),pts(4),dbot,-1) 
       Dim.hor(pts(5),pts(6),dtop,0)
	   if(pts(7).x > pts(3).x) Dim.hor(pts(7),pts(3),dtop,1) 
	   if(pts(0).x > pts(4).x) Dim.hor(pts(0),pts(4),dtop,-1) 
       
       val (dr, dl) = (max(pts(0).x,pts(5).x)+dimspace, min(pts(3).x,pts(7).x) - dimspace )
       Dim.vert(pts(0),pts(1),dr,-1)
       Dim.vert(pts(1),pts(4),dr,0)
       Dim.vert(pts(4),pts(5),dr,1)
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
	//	println(drawdxf)
   }
   
   def drawdxf():String = {
	   def dxfLine(b : Vec, e:Vec) : String = {
s"""0
LINE
10
${b.x}
20
${b.y}
30
0.0
11
${e.x}
21
${e.y}
31
0.0
"""
	   }
	   var dxf = """0
SECTION
2
ENTITIES
"""
	  var pts = topPoints
	  dxf += dxfLine(pts(0),pts(1))
	  dxf += dxfLine(pts(1),pts(4))
	  dxf += dxfLine(pts(4),pts(5))
	  dxf += dxfLine(pts(5),pts(6))
	  dxf += dxfLine(pts(6),pts(7))
	  dxf += dxfLine(pts(7),pts(2))
	  dxf += dxfLine(pts(2),pts(3))
	  dxf += dxfLine(pts(3),pts(0))
	 dxf +="""0
ENDSEC
0
EOF
"""
	dxf
   }
}

class RedRCDev(m:RedRC, val step :Int = 2) extends Dev(m) {
    
   import Dev._
   
   /*          0  1  2
    *         _2_1_2_3
    *    /\    /\    /\         |     _
    *   /  \  /  \  /  \        |    / \
    *  /____\/____\/____\       |   |   ]0
     10      0     1     4(3)
    *  |____||____||____|
    * 16  15 3    2 1    0
    */
    
   class HalfDev(mp : BRCRed#Half){
	   val segments = BGeometry.segments
	   val dd = (Pi * (model.d +5)) / (segments/step) //inscribe-owterscribe???
	   val pl = Vec(-model.a1/2,0)
	   val pr = Vec(model.a1/2,0)
	   val pc = (pl,mp.pl <-> mp.pc) /\ (pr,mp.pr <-> mp.pc)
	   private var lastP = pc
	   val left = for((p,ind) <- mp.left.zipWithIndex if ind!=0 && ind % step == 0) yield {
						val np = (pl,mp.pl <-> p) /\ (lastP,dd)
						lastP = np
						np						
					}
	   val pll = (pl,mp.pl <-> mp.pll) /\ (left.last,mp.left.last <-> mp.pll)	
	   
	   lastP = pc
	   val right = for((p,ind) <- mp.right.zipWithIndex if  ind!=0 && ind % step == 0) yield {
						val np = (lastP,dd) /\ (pr,mp.pr <-> p)
						lastP = np
						np						
					}
	   val prr = (right.last,mp.right.last <-> mp.prr) /\ (pr,mp.pr <-> mp.prr)	

	   val (flC, flL, flR) = (flng(pl,pr), flng(pll,pl), flng(pr,prr) )
	   
	   private def flng(p1:Vec,p2:Vec) : Seq[Vec] = Seq(p1,p2,
							(p2-p1,model.df1).perp + p2,
							(p2-p1,model.df1).perp + p1)

	   def draw(implicit ctx : Context2d) {
		   	//flanges bottom
		   	ctx.beginPath()
			ctx.lineWidth=Dev.thinlineWidth
			ctx M flL(0) L flC(0) L flR(0) L flR(1)
			ctx.stroke()
			ctx.beginPath()
			ctx.lineWidth = Dev.lineWidth
			ctx M flL(1) L flL(2)  L flL(3) L flL(0)
			ctx M flC(1) L flC(2)  L flC(3) L flC(0)
			ctx M flR(1) L flR(2)  L flR(3) L flR(0)
			ctx.stroke()
			Dim.tx( flL(2), flL(3), 0.5, 0)
			Dim.tx( flC(2), flC(3), 0.5, 0)
			Dim.tx( flR(2), flR(3), 0.5, 0)
			//left
			val f = makeFlipper(0.25,0.5,0.75)
			ctx.beginPath()
			ctx.lineWidth = Dev.thinlineWidth
			ctx M pl L pc 
			ctx.stroke() 
			Dim.tx( pl, pc, f(), 1)
			for(p <- left){
				ctx M pl L p 
				ctx.stroke() 
			    Dim.tx( pl, p, f(), 1)
			}
		//	ctx.stroke()
			ctx.beginPath()
			ctx.lineWidth = Dev.lineWidth
			ctx M pc
			for(p <- left) ctx L p	
			ctx M pll L left.last	
			ctx.stroke()
			Dim.tx(pll, left.last, 0.5, 0)
			//right
			ctx.beginPath()
			ctx.lineWidth = Dev.thinlineWidth
			ctx M pr L pc 
			ctx.stroke() 
			Dim.tx( pr, pc, f(), -1)
			for(p <- right){
				ctx M pr L p 
				ctx.stroke() 
			    Dim.tx( pr, p, f(), -1)
			}
		//	ctx.stroke()
			ctx.beginPath()
			ctx.lineWidth = Dev.lineWidth
			ctx M pc
			for(p <- right) ctx L p		
			ctx M prr L right.last
			ctx.stroke()
			Dim.tx(prr, right.last, 0.5, 0)
	
			Dim.ld( pc, left.head, 50, 0, 0.1)		
	   }
	   
	   private def toSeq = left ++ right ++ Seq(pll, pl, pr, prr) ++ flL ++ flR ++ flC
	   private def makeFlipper(a:Double,b:Double, c:Double) = {
		  var count = c
		  val cnt = () => {if(count==a) count = b else if(count == b) count = c else count = a; count}
		  cnt
		}
	   
	   def topmostY = toSeq.foldLeft(0.0)((h : Double,v : Vec) => if(h > v.y) h else v.y)
	   def lowestY = toSeq.foldLeft(0.0)((h : Double,v : Vec) => if(h < v.y) h else v.y)	
	   def devH = topmostY - lowestY	
	}
  
   def drawLetter(ltr : String, x : Double, y : Double, h : String)(implicit ctx : Context2d){
		ctx.save()
		ctx.translate(x, y)
		ctx.scale(1,-1)	
		ctx.fillStyle = "#000"
		ctx.textAlign = "middle"
		ctx.font = "bold " + h + " sans-serif"
		ctx.fillText(ltr,0,0)
		ctx.restore()
   }
   
/*   def drawSleeve(ctx : Context2d){
		val ls = Pi * (m.d -5)
		ctx.beginPath()
        ctx.lineWidth = Dev.lineWidth
		ctx M(-ls/2,0) L(ls/2,0) L(ls/2,50) L(-ls/2,50) L(-ls/2,0)
		ctx.stroke()
		Dim.hor(Vec(-ls/2,0), Vec(ls/2,0),-dimspace)(ctx)
		ctx.save()
		ctx.translateS(0, 15)
		ctx.scale(1,-1)	
		ctx.fillStyle = "#000"
		ctx.textAlign = "middle"
		ctx.fillText(s"Ø${m.d -5}",0,0)
		ctx.restore()

   }*/
           
    def draw(ctx : Context2d){
	  implicit val mctx =ctx
	  val top = new HalfDev( model.cn.halfA)
	  val bottom = new HalfDev( model.cn.halfB)
	  val figH = vsz/2 - 2 * (dimspace) - dimstep
	  mscl = figH/top.devH min figH/bottom.devH
	  ctx.save()
/*		val dst = dist(ptst(1)(1), ptst(1)(2),0.1)
		val sdia = "%1d".format((dst*12/Pi).round)
		val sdst = "%.1f".format(dst) 
		val sld1 = "%1d".format(((m.d -5)*Pi).round)	
		val sld2 = "%1d".format((dst*12).round)				
		val nfo = s"Ø${m.d -5} --- l = $sld1"
		val nfo1 =s"$sdst x 12 = $sld2 --- Ø$sdia"*/
		beginDraw(ctx)
/*        ctx.translate(-hsz/2,vsz/2-40)
        ctx.scale(1,-1)
		ctx.fillStyle = "#000"
		ctx.fillText(nfo,0,0)
 		ctx.fillText(nfo1,0,40)*/
//        ctx.translate(hsz/2,vsz/2-40)
//        ctx.scale(1,-1)
		drawLetter("A",0,figH+32,"3em")
        if(top.lowestY < 0) ctx.translateS(0,-top.lowestY)
        top.draw(ctx)
        if(top.lowestY < 0) ctx.translateS(0,top.lowestY)
        ctx.translate(0,-(vsz/2-30))
		drawLetter("B",0,figH+32,"3em")
        if(bottom.lowestY < 0) ctx.translateS(0,-bottom.lowestY)
        bottom.draw(ctx)
		ctx.restore()
   }
}

class RedCCDev(m:RedCC, val step : Int = 3) extends Dev(m) {
   import Dev._   
   
/*                  0  3  6  9  12
					0  2  4  6  8  10  12
					1  2  4
			   __ __ __ __     dd2
			  | /| /| /| /|
			  |/_|/_|/_|/_]
					0  3  5    dd1
 12 14 16 18 20  22 0  2  4  6
       12 15 18  21 0
*/
   
   def devPoints()/* : Seq[Vec]*/ ={
		val bp = model.cn.bpts
		val tp = model.cn.tpts
		val s = BGeometry.segments
		val dd1 = (Pi * model.d1) / (s/step)
		val dd2 = (Pi * model.d2) / (s/step)
		var hp = dist(bp(0),tp(0))
		var dd3 = 0d
		var ptsb = Seq( Vec(0,0) )
		var ptst = Seq( Vec(0,hp) )
		for(i <- step to s/2 by step){
			dd3 = dist(bp(i-step),tp(i))           
            val ptp = (ptst.last, dd2) /\ (ptsb.last, dd3 )
			ptst :+= ptp
			val hp = dist(bp(i),tp(i))
			val pbt= (ptp, hp) /\ (ptsb.last, dd1 )
			ptsb :+= pbt
		}
		var ptsb1 = Seq( Vec(0,0) )
		var ptst1 = Seq( Vec(0,hp) )
		for(i <- (s-step) to s/2 by -step){
			dd3 = dist(bp(i+step),tp(i))           
            val ptp = (ptsb1.last, dd3 ) /\  (ptst1.last, dd2)
			ptst1 :+= ptp
			val hp = dist(bp(i),tp(i))
			val pbt= (ptsb1.last, dd1 ) /\  (ptp, hp)
			ptsb1 :+= pbt
		}
	   (ptsb, ptst, ptsb1, ptst1)
   }
   
   def drawDev(ptsb : Seq[Vec],ptst : Seq[Vec],ptsb1 : Seq[Vec],ptst1 : Seq[Vec], ctx : Context2d){
	   def ln(pts :Seq[Vec]){
		   ctx M pts(0)
		   for(i <- 1 until pts.size)
			   ctx L pts(i)
		   ctx.stroke() 
	   }
	   
	   def makeFlipper(a:Int,b:Int) = {
		  var count = a
		  val cnt = () => {if(count==a) count = b else count = a; 1d/count.toDouble}
		  cnt
		}
	   def thln(b :Seq[Vec],t :Seq[Vec]){	
		   ctx M t(0)	   
		   for(i <- 1 until b.size) ctx L b(i-1) L t(i)
		   ctx.stroke()
		   val f1 = makeFlipper(4,3)
		   val f2 = makeFlipper(2,3)
		   for(i <- 1 until b.size){
				Dim.tx( t(i-1), b(i-1), f1(), 0)(ctx)	   
		        Dim.tx( b(i-1), t(i), f2(), 0)(ctx)
			}	   
	   }

	   ctx.beginPath()
	   ctx.lineWidth = Dev.lineWidth
	   ln(ptsb)
	   ln(ptst) 
	   ln(ptsb1)
	   ln(ptst1)
	  // println(s"${ptsb.last} ${ptst.last
	   ctx M ptsb.last L ptst.last
	   ctx M ptsb1.last L ptst1.last
	   ctx.stroke()
	   Dim.tx( ptsb.last, ptst.last, 0.5, 0)(ctx)	   
	   Dim.tx( ptsb1.last, ptst1.last, 0.5, 0)(ctx)	   

	   	Dim.ld( ptst(0), ptst(1), 50, 0, 0.1)(ctx)  
		Dim.ld( ptsb(0), ptsb(1), -50, 0, 0.1)(ctx) 

 	   ctx.beginPath()
	   ctx.lineWidth = Dev.thinlineWidth
	   thln(ptsb,ptst)	   
	   thln(ptsb1,ptst1)
	   
	   	   
  }

	def draw(ctx : Context2d){
		val (ptsb,ptst,ptsb1,ptst1) = devPoints()
		val dst = dist(ptst(0), ptst(1), 0.1)
		val sdia = "%1d".format((dst*12/Pi).round)
		val sdst = "%.1f".format(dst) 
		val sld1 = "%1d".format(((model.d2 -5)*Pi).round)	
		val sld2 = "%1d".format((dst*12).round)				
		val nfo = s"Ø${model.d2 -5} --- l = $sld1"
		val nfo1 =s"$sdst x 12 = $sld2 --- Ø$sdia"
		val dst1 = dist(ptsb(0), ptsb(1), 0.1)
		val sdia1 = "%1d".format((dst1*12/Pi).round)
		val sdst1 = "%.1f".format(dst1) 
		val sld11 = "%1d".format(((model.d1 -5)*Pi).round)	
		val sld21 = "%1d".format((dst1*12).round)				
		val nfo2 = s"Ø${model.d1 -5} --- l = $sld11"
		val nfo3 =s"$sdst1 x 12 = $sld21 --- Ø$sdia1"
		ctx.save()
		mscl*=1.4
		beginDraw(ctx)
        ctx.translate(-hsz/2,vsz/2-40)
        ctx.scale(1,-1)
		ctx.fillStyle = "#000"
		ctx.fillText(nfo,0,0)
 		ctx.fillText(nfo1,0,40)
 		ctx.fillText(nfo2,0,80)
 		ctx.fillText(nfo3,0,120)
		ctx.translate(hsz/2,vsz/2)
        ctx.scale(1,-1)
        ctx.translateS(0,ptsb.head.y-ptst.head.y)
//        ctx.drawAx()
		ctx.beginPath()
		drawDev(ptsb,ptst,ptsb1,ptst1, ctx)
		ctx.restore()
	}
}
