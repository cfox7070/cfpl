package cfx70.cfpl.draft

import scala.language.implicitConversions

import cfx70.vecquat._

import scala.math._

import cfx70.cfpl.core._
import cfx70.cfpl.core.CommonHelpers._
import cfx70.cfpl.core.Helpers2d._


object Dim{
   val lineWidth = 1.2
   val lineEnl = 10
   val lineGap = 8
   val tickWidth = 6
   val tickl=12
   
   def hor(p1 : Vec,p2 : Vec, cln : Double , hint : Int = 0)(implicit ctx:Context2d)=new HorDim(p1,p2,cln,hint).draw(ctx)
   def vert(p1 : Vec,p2 : Vec, cln : Double, hint : Int = 0)(implicit ctx:Context2d)=new VertDim(p1,p2,cln,hint).draw(ctx)
   def vertM(p1 : Vec,p2 : Vec, cln : Double, hint : Int = 0)(implicit ctx:Context2d)=new VertDimM(p1,p2,cln,hint).draw(ctx)
}

abstract class Dim (val p1:Vec,val p2 : Vec,val cln : Double, val hint : Int = 0){
   import Dim._
     
   val rscale = RichContext.lscale   
   val dist:Int
   def draw(ctx : Context2d):Unit
   
   def exoffs ( extdir : Double) = (v : Double) => v + extdir * lineGap/rscale
   def exenl  ( extdir : Double) = (v : Double) => v + extdir * lineEnl/rscale
   def denl  ( dimdir : Double) =  dimdir * lineEnl/rscale
      
   def setOffsets( c : Double, d :Double) = (exoffs(c),exenl(c),denl(d))
  
   def tickH(x : Double,y : Double)(implicit ctx:Context2d) {ctx.M(x+tickl,y+tickl) L(x-tickl,y-tickl)}
   def tickV(x : Double,y : Double)(implicit ctx:Context2d) {ctx.M(x-tickl,y+tickl) L(x+tickl,y-tickl)}

   def text(x : Double, y : Double, align : String = "center",
					scl : Double = -1, rot : Double = 0)(implicit ctx:Context2d){
		ctx.save()
	    ctx.beginPath()
	    ctx.lineWidth=Dim.lineWidth
	    ctx.textBaseline = "bottom"
		ctx.translate(x * rscale,y * rscale)
		ctx.rotate(rot)
		ctx.scale(1,scl)
		ctx.textAlign = align
		ctx.fillText(dist.toString,0,0)
		ctx.restore()
   } 

   implicit def bolDbl(b : Boolean) : Double = if(b) 1 else -1

   def drawHorLines()(implicit ctx : Context2d){
	   val cl = cln / rscale
	   val (o,e,dx) = setOffsets(cln >p1.y, p2.x > p1.x)
	   
	   ctx.beginPath()
	   ctx.lineWidth=Dim.lineWidth
	   ctx.M( p1.x, o(p1.y) )  L( p1.x, e(cl) )
	   ctx.M( p2.x, o(p2.y) )  L( p2.x, e(cl) )
	   ctx.M(p1.x - dx, cl) L(p2.x + dx, cl)
	   ctx.stroke()
	   ctx.beginPath()
	   ctx.lineWidth=Dim.tickWidth
	   tickH(p1.x,cl)
	   tickH(p2.x,cl)
	   ctx.stroke()
   }
   
   def drawVertLines()(implicit ctx : Context2d){
	   val cl = cln / rscale
	   val (o,e,dy) = setOffsets(p1.x < cln, p2.y > p1.y)
	   
	   ctx.beginPath()
	   ctx.lineWidth=Dim.lineWidth
	   ctx.M( o(p1.x), p1.y )  L( e(cl), p1.y )
	   ctx.M( o(p2.x), p2.y )  L( e(cl), p2.y )
	   ctx.M( cl, p1.y - dy )   L( cl, p2.y + dy )
	   ctx.stroke()
	   ctx.beginPath()
	   ctx.lineWidth=Dim.tickWidth
	   tickV(cl,p1.y)
	   tickV(cl,p2.y)
	   ctx.stroke()
   }
   
   def drawAngleLines(ctx : Context2d){
   }
   
   def drawDim(lines : () => Unit, txcrd : Vec)(implicit ctx : Context2d){	 
	   ctx.save()
	   lines()
	   text(txcrd.x, txcrd.y,"center",rot = txcrd.z, scl=txcrd(3))
	   ctx.restore()
   }
   
}

class HorDim (p1:Vec,p2 : Vec, cln : Double, hint : Int = 0) extends Dim(p1,p2,cln,hint){
   import Dim._
   val dist = abs(p2.x-p1.x).toInt
      
   def draw(ctx : Context2d) = dist match {
       case d if d>epsilon => implicit val mctx=ctx; drawDim(drawHorLines,
												 Vec(p1.x+(p2.x-p1.x)/2,(cln+lineGap)/rscale, 0, -1))
	}
      
}

class VertDim (p1:Vec,p2 : Vec, cln : Double, hint : Int = 0) extends Dim(p1,p2,cln,hint){
   import Dim._
   val dist = abs(p2.y-p1.y).toInt
      
   def draw(ctx : Context2d) = dist match {
       case d if d>epsilon => implicit val mctx=ctx; drawDim(drawVertLines,
												 Vec((cln-lineGap)/rscale,p1.y+(p2.y-p1.y)/2, Pi/2,-1))
	}
      
}

class VertDimM (p1:Vec,p2 : Vec, cln : Double, hint : Int = 0) extends Dim(p1,p2,cln,hint){
   import Dim._
   val dist = abs(p2.y-p1.y).toInt
      
   def draw(ctx : Context2d) = dist match {
       case d if d>epsilon => implicit val mctx=ctx; drawDim(drawVertLines,
												 Vec((cln-lineGap)/rscale,p1.y+(p2.y-p1.y)/2, -Pi/2,1))
	}
      
}



/*   
   val dirV = if(p1.y < cln) 1 else -1
   val dirH = if(p2.x > p1.x) 1 else -1   

   def draw1(ctx : Context2d) = dist match {
       case d if d>epsilon =>{ implicit val mctx=ctx
                               ctx.save()
                               ctx.beginPath()
                               ctx.lineWidth=Dim.lineWidth
							   ctx.lineCap = "butt"
							 //  println(s"${ctx.lineWidth}")
							   val (y,ev,eh,g) = (cln/rscale,dirV * lineEnl/rscale,
													dirH * lineEnl/rscale,lineGap/rscale)
                               ctx.M(p1.x,p1.y + dirV * g) L(p1.x, y + ev)
							   ctx.M(p2.x,p2.y + dirV * g) L(p2.x, y + ev)
                               ctx.M(p1.x - eh, y) L(p2.x + eh, y)
                               ctx.stroke()
                               ctx.beginPath()
							   ctx.lineWidth=Dim.tickWidth
							   tickH(p1.x,y)
							   tickH(p2.x,y)
                               ctx.stroke()
                               ctx.beginPath()
                               ctx.lineWidth=Dim.lineWidth
							   ctx.textBaseline = "bottom"
							   text(p1.x+(p2.x-p1.x)/2, y + lineGap, dist.toString,"center")
                               ctx.restore()
                             }
       case _ =>
   }
*/


