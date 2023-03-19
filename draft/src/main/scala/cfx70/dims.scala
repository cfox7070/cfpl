package cfx70.cfpl.draft

import scala.language.implicitConversions

import scala.scalajs.js

import cfx70.vecquat._

import scala.math._

import cfx70.cfpl.core._
import cfx70.cfpl.core.CommonHelpers._
import cfx70.cfpl.core.Helpers2d._
import cfx70.cfpl.core.Side._



object Dim{
    object Disp extends Enumeration {
        type Disp = Value
        val VERT, HOR, ARR = Value
    }

   val lineWidth = 1.2
   val lineEnl = 10
   val lineGap = 8
   val tickWidth = 6
   val tickl=12
   
   def hor(p1 : Vec,p2 : Vec, cln : Double , hint : Int = 0,prec : Double = 1d)(implicit ctx:Context2d)=new HorDim(p1,p2,cln,hint,prec).draw(ctx)
   def horD(p1 : Vec,p2 : Vec, cln : Double , hint : Int = 0,prec : Double = 1d)(implicit ctx:Context2d)=new HorDimD(p1,p2,cln,hint,prec).draw(ctx)
//   def horRev(p1 : Vec,p2 : Vec, cln : Double , hint : Int = 0,prec : Double = 1d)(implicit ctx:Context2d)=new HorDimRev(p1,p2,cln,hint,prec).draw(ctx)
   def vert(p1 : Vec,p2 : Vec, cln : Double, hint : Int = 0,prec : Double = 1d)(implicit ctx:Context2d)=new VertDim(p1,p2,cln,hint,prec).draw(ctx)
   def vertR(p1 : Vec,p2 : Vec, cln : Double, hint : Int = 0,prec : Double = 1d)(implicit ctx:Context2d)=new VertDimRev(p1,p2,cln,hint,prec).draw(ctx)
   def tx(p1:Vec,p2 : Vec,cln : Double, hint : Int = 0,prec : Double = 1d)(implicit ctx:Context2d) = new TxDim (p1,p2,cln,hint,prec).draw(ctx)
   def ld(p1:Vec,p2 : Vec,cln : Double, hint : Int = 0, prec : Double = 1d)(implicit ctx:Context2d) = new LdDim (p1,p2,cln,hint,prec).draw(ctx)
}

abstract class Dim (val p1:Vec,val p2 : Vec,val cln : Double, val hint : Int = 0, val prec : Double = 1d){
   import Dim._
     
   val rscale = RichContext.lscale   
   val dist:String
   def draw(ctx : Context2d):Unit
   
   def bd(b : Boolean) : Double = if(b) 1.0 else -1.0
   def exoffs ( extdir : Boolean):(Double) => Double = _ + bd(extdir) * lineGap/rscale
   def exenl  ( extdir : Boolean):(Double) => Double = _ + bd(extdir) * lineEnl/rscale
   def denl  ( dimdir : Boolean) =  bd(dimdir) * lineEnl/rscale
      
   def setOffsFnc( c : Boolean, d : Boolean) = (exoffs(c),exenl(c),denl(d))
     
   def horPoints()= {
	   val cl = cln / rscale
	   val (o,e,dx) = setOffsFnc(cln >p1.y, p2.x > p1.x)
	   Seq(
			Vec(p1.x, o(p1.y)), Vec(p1.x, e(cl)),   //line
			Vec(p2.x, o(p2.y)), Vec(p2.x, e(cl)),
			Vec(p1.x - dx, cl), Vec(p2.x + dx, cl),
			Vec(p1.x+tickl,cl+tickl), Vec(p1.x-tickl,cl-tickl), //tick
			Vec(p2.x+tickl,cl+tickl), Vec(p2.x-tickl,cl-tickl),
			Vec(p1.x+(p2.x-p1.x)/2,(cln+lineGap)/rscale), // c
			Vec(p1.x - dx,(cln+lineGap)/rscale), // l
			Vec(p2.x + dx,(cln+lineGap)/rscale) // r
		)		
   }

   def vertPoints()= {
	   val cl = cln / rscale
	   val (o,e,dy) = setOffsFnc(p1.x < cln, p2.y > p1.y)
	   Seq(
			Vec(o(p1.x), p1.y), Vec(e(cl), p1.y),   //line
			Vec(o(p2.x), p2.y), Vec(e(cl), p2.y),
			Vec(cl, p1.y - dy), Vec(cl, p2.y + dy),
			Vec(cl-tickl,p1.y+tickl), Vec(cl+tickl,p1.y-tickl), //tick
			Vec(cl-tickl,p2.y+tickl), Vec(cl+tickl,p2.y-tickl),
			Vec((cln-lineGap)/rscale,p1.y+(p2.y-p1.y)/2),
			Vec((cln+lineGap)/rscale,p1.y - dy),
			Vec((cln+lineGap)/rscale,p2.y + dy)
		)		
   }
   
   def drawDim(pnts :  Seq[Vec], hint : Int, dtxt:String, tang :Double = 0)(implicit ctx : Context2d){
			//		txtr : (Context2d) => Unit,
			//		txfl : (Context2d) => Unit = (ctx) => ctx.fillText(dist,0,0) )(implicit ctx : Context2d){	 
	   ctx.save()
	   ctx.beginPath()
	   ctx.lineWidth=Dim.lineWidth
	   ctx.setLineDash( js.Array() )

	   ctx M pnts(0) L pnts(1)
	   ctx M pnts(2) L pnts(3) 
	   ctx M pnts(4) L pnts(5) 
	   ctx.stroke()
	   ctx.beginPath()
	   ctx.lineWidth=Dim.tickWidth
	   ctx M pnts(6) L pnts(7) 
	   ctx M pnts(8) L pnts(9) 
	   ctx.stroke()
//	   text
	   ctx.beginPath()
	   ctx.lineWidth = Dim.lineWidth
/*	   ctx.textBaseline = "bottom"	   
	   val align = if(dist.toDouble > 99d || hint == 0){
		ctx.translateS( pnts(10).x, pnts(10).y );"center"}
	   else if(hint < 0){
		ctx.translateS( pnts(11).x, pnts(11).y );"right"}    
	   else{
	   	ctx.translateS(pnts(12).x, pnts(12).y);"left"}
		txtr(ctx)
		ctx.textAlign = align
		txfl(ctx)*/
	   if(dist.toDouble > 99d || hint == 0)
		ctx.text(dtxt, pnts(10), CENTER, ang=tang)
	   else if(hint < 0)
		ctx.text(dtxt, pnts(11), RIGHT, ang=tang)    
	   else
	   	ctx.text(dtxt, pnts(12), LEFT, ang=tang)
	   ctx.restore()
   }
   
}

class HorDim (p1:Vec,p2 : Vec, cln : Double, hint : Int = 0, prec : Double = 1d) extends Dim(p1,p2,cln,hint,prec){
   import Dim._
   val dist = s"%.${-log10(prec)}f".format((abs(p2.x-p1.x)/prec).round * prec)
   def draw(ctx : Context2d) = drawDim(horPoints(), hint, dist)(ctx) //drawDim(horPoints(), hint,(ctx) => ctx.scale(1,-1))(ctx)
}

class HorDimD (p1:Vec,p2 : Vec, cln : Double, hint : Int = 0, prec : Double = 1d) extends HorDim(p1,p2,cln,hint,prec){
   override def draw(ctx : Context2d) = drawDim(horPoints(), hint,s"Ø$dist")(ctx) //drawDim(horPoints(), hint,(ctx) => ctx.scale(1,-1),
														//(ctx) => ctx.fillText(s"Ø$dist",0,0))(ctx)
}

//class HorDimRev (p1:Vec,p2 : Vec, cln : Double, hint : Int = 0, prec : Double = 1d) extends HorDim(p1,p2,cln,hint,prec){
//   override def draw(ctx : Context2d) = drawDim(horPoints(), hint,(ctx) => ctx.scale(-1,-1))(ctx)
//}

class VertDim (p1:Vec,p2 : Vec, cln : Double, hint : Int = 0, prec : Double = 1d) extends Dim(p1,p2,cln,hint,prec){
   import Dim._
   val dist =  s"%.${-log10(prec)}f".format((abs(p2.y-p1.y)/prec).round * prec)   
   def draw(ctx : Context2d) = drawDim(vertPoints(), hint, dist, Pi/2)(ctx) //drawDim(vertPoints(), hint, (ctx) => {ctx.rotate(Pi/2);ctx.scale(1,-1)})(ctx)
}

class VertDimRev (p1:Vec,p2 : Vec, cln : Double, hint : Int = 0, prec : Double = 1d) extends VertDim(p1,p2,cln,hint,prec){      
   override def draw(ctx : Context2d) =drawDim(vertPoints(), hint, dist, -Pi/2)(ctx)// drawDim(vertPoints(), hint, (ctx) => ctx.rotate(-Pi/2))(ctx)
}

class TxDim (p1:Vec,p2 : Vec,cln : Double, hint : Int = 0, prec : Double = 1d) extends Dim(p1,p2,cln,hint,prec){
   import Dim._
   val dist =  s"%.${-log10(prec)}f".format((sqrt( (p2.x-p1.x)*(p2.x-p1.x)+(p2.y-p1.y)*(p2.y-p1.y) )/prec).round * prec)
   def draw(ctx : Context2d){ 
	val p = Vec((p2.x-p1.x)*cln, (p2.y-p1.y)*cln) + p1
	ctx.save()
	ctx.beginPath()
	ctx.lineWidth = Dim.lineWidth
	ctx.textBaseline = "bottom"
	ctx.translateS(p.x, p.y )
	ctx.scale(1,-1)	
	ctx.fillStyle = "#000"
	ctx.arc(0,0,7,0,Pi*2) 
	ctx.fill()  
	if(hint == 0) 
		ctx.text(dist, (0d,0d), CENTER)
	else if(hint < 0) 
		ctx.text(dist, (0d,0d), RIGHT)
	else 
		ctx.text(dist, (0d,0d), LEFT)
/*	val align = if(hint == 0) "center"; else if(hint < 0) "right";else "left"
	ctx.beginPath()
	ctx.fillStyle = "#fff"
	ctx.textAlign = align
	val(l,r,a,d) = ctx.textMetrics(dist.toString)
	ctx.fillRect(-(l+1),-(a+1),(r+l+2),(a+d+2) )
	ctx.beginPath()
	ctx.fillStyle = "#000"
	ctx.fillText(dist,0,0)*/
	ctx.restore()
  }
}

class LdDim (p1:Vec,p2 : Vec,cln : Double, hint : Int = 0, prec : Double = 1d) extends TxDim(p1,p2,cln,hint,prec){
   import Dim._
   def drawArrow(p1:Vec, p2:Vec)(implicit ctx : Context2d){
	   ctx.save()
	   val cosa = (p2-p1)* Vec(1d,0d)/(p2-p1).mod
	   ctx.translateS(p1.x, p1.y)
	   ctx.rotate(acos(cosa))
	   ctx.beginPath()
	   ctx.fillStyle = "#000"
	   ctx M(0,0) L(50,10) L(50,-10)
	   ctx.closePath()
	   ctx.fill()
	   ctx.restore()
   }
   
   override def draw(ctx : Context2d){
	   implicit val mctx = ctx 
		val pl1 = (p2-p1)*0.5 + p1
		val pl2 =Vec(pl1.x-50, pl1.y+cln)
		val pl3 =Vec(pl2.x - ctx.measureText(dist.toString).width,pl2.y)
		ctx.save()
		ctx.beginPath()
		ctx.lineWidth = Dim.lineWidth
		ctx M pl1 L pl2 L pl3
		ctx.stroke()
		drawArrow(pl1,pl2)
		ctx.text(dist,pl2 + (0d,5d),RIGHT)
	/*	ctx.beginPath()
		ctx.textBaseline = "bottom"
		ctx.textAlign = "right"
		ctx.translateS(pl2.x, pl2.y+5 )
		ctx.scale(1,-1)	
		ctx.fillStyle = "#000"
		ctx.fillText(dist,0,0)
		ctx.restore()*/
	}
}



