package cfx70.cfpl.draft

import scala.language.implicitConversions

import scala.scalajs.js

import cfx70.vecquat._

import scala.math._

import cfx70.cfpl.core._
import cfx70.cfpl.core.CommonHelpers._
import cfx70.cfpl.core.Helpers2d._


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
   
   def hor(p1 : Vec,p2 : Vec, cln : Double , hint : Int = 0)(implicit ctx:Context2d)=new HorDim(p1,p2,cln,hint).draw(ctx)
   def horD(p1 : Vec,p2 : Vec, cln : Double , hint : Int = 0)(implicit ctx:Context2d)=new HorDimD(p1,p2,cln,hint).draw(ctx)
   def horRev(p1 : Vec,p2 : Vec, cln : Double , hint : Int = 0)(implicit ctx:Context2d)=new HorDimRev(p1,p2,cln,hint).draw(ctx)
   def vert(p1 : Vec,p2 : Vec, cln : Double, hint : Int = 0)(implicit ctx:Context2d)=new VertDim(p1,p2,cln,hint).draw(ctx)
   def vertRev(p1 : Vec,p2 : Vec, cln : Double, hint : Int = 0)(implicit ctx:Context2d)=new VertDimRev(p1,p2,cln,hint).draw(ctx)
   def tx(p1:Vec,p2 : Vec,cln : Double, hint : Int = 0)(implicit ctx:Context2d) = new TxDim (p1,p2,cln,hint).draw(ctx)
   def ld(p1:Vec,p2 : Vec,cln : Double, hint : Int = 0)(implicit ctx:Context2d) = new LdDim (p1,p2,cln,hint).draw(ctx)
}

abstract class Dim (val p1:Vec,val p2 : Vec,val cln : Double, val hint : Int = 0){
   import Dim._
     
   val rscale = RichContext.lscale   
   val dist:Long
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
   
   def drawDim(pnts :  Seq[Vec], hint : Int, 
					txtr : (Context2d) => Unit,
					txfl : (Context2d) => Unit = (ctx) => ctx.fillText(dist.toString,0,0) )(implicit ctx : Context2d){	 
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
	   ctx.textBaseline = "bottom"	   
	   val align = if(dist > 99 || hint == 0){
		ctx.translateS( pnts(10).x, pnts(10).y );"center"}
	   else if(hint < 0){
		ctx.translateS( pnts(11).x, pnts(11).y );"right"}    
	   else{
	   	ctx.translateS(pnts(12).x, pnts(12).y);"left"}
		txtr(ctx)
		ctx.textAlign = align
		txfl(ctx)
	   ctx.restore()
   }
   
}

class HorDim (p1:Vec,p2 : Vec, cln : Double, hint : Int = 0) extends Dim(p1,p2,cln,hint){
   import Dim._
   val dist = abs(p2.x-p1.x).round
   def draw(ctx : Context2d) = dist match {
       case d if d>epsilon => drawDim(horPoints(), hint,(ctx) => ctx.scale(1,-1))(ctx)
       case _ =>
	}     
}

class HorDimD (p1:Vec,p2 : Vec, cln : Double, hint : Int = 0) extends HorDim(p1,p2,cln,hint){
   override def draw(ctx : Context2d) = dist match {
       case d if d>epsilon => drawDim(horPoints(), hint,(ctx) => ctx.scale(1,-1),
														(ctx) => ctx.fillText(s"Ø$dist",0,0))(ctx)
       case _ =>
	}     
}

class HorDimRev (p1:Vec,p2 : Vec, cln : Double, hint : Int = 0) extends HorDim(p1,p2,cln,hint){
   override def draw(ctx : Context2d) = dist match {
       case d if d>epsilon => drawDim(horPoints(), hint,(ctx) => ctx.scale(-1,-1))(ctx)
       case _ =>
	}      
}

class VertDim (p1:Vec,p2 : Vec, cln : Double, hint : Int = 0) extends Dim(p1,p2,cln,hint){
   import Dim._
   val dist = abs(p2.y-p1.y).round     
   def draw(ctx : Context2d) = dist match {
       case d if d>epsilon => drawDim(vertPoints(), hint, (ctx) => {ctx.rotate(Pi/2);ctx.scale(1,-1)})(ctx)
       case _ =>
	}      
}

class VertDimRev (p1:Vec,p2 : Vec, cln : Double, hint : Int = 0) extends VertDim(p1,p2,cln,hint){      
   override def draw(ctx : Context2d) = dist match {
       case d if d>epsilon => drawDim(vertPoints(), hint, (ctx) => ctx.rotate(-Pi/2))(ctx)
       case _ =>
	}      
}

class TxDim (p1:Vec,p2 : Vec,cln : Double, hint : Int = 0) extends Dim(p1,p2,cln,hint){
   import Dim._
   val dist = sqrt( (p2.x-p1.x)*(p2.x-p1.x)+(p2.y-p1.y)*(p2.y-p1.y) ).round
   def draw(ctx : Context2d) = dist match {
       case d if d>epsilon => { 
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
			val align = if(hint == 0) "center"; else if(hint < 0) "right";else "left"
			ctx.beginPath()
			ctx.fillStyle = "#fff"
			ctx.textAlign = align
			val(l,r,a,d) = ctx.textMetrics(dist.toString)
			ctx.fillRect(-(l+1),-(a+1),(r+l+2),(a+d+2) )
			ctx.beginPath()
			ctx.fillStyle = "#000"
			ctx.fillText(dist.toString,0,0)
			ctx.restore()
		  }
       case _ =>
	}     
}

class LdDim (p1:Vec,p2 : Vec,cln : Double, hint : Int = 0) extends TxDim(p1,p2,cln,hint){
   import Dim._
   println(s"ld dist=$dist")
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
   
   override def draw(ctx : Context2d) = dist match {
       case d if d>epsilon => {
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
			ctx.beginPath()
			ctx.textBaseline = "bottom"
			ctx.textAlign = "right"
			ctx.translateS(pl2.x, pl2.y+5 )
			ctx.scale(1,-1)	
			ctx.fillStyle = "#000"
			ctx.fillText(dist.toString,0,0)
			ctx.restore()
		   }
       case _ =>
	}
}



