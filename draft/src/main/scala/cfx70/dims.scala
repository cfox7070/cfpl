package cfx70.cfpl.draft

import cfx70.vecquat._

import scala.math._

import cfx70.cfpl.core._
import cfx70.cfpl.core.CommonHelpers._
import cfx70.cfpl.core.Helpers2d._


object Dim{
   val lineWidth = 0.5
   val lineEnl = 10
   val lineGap = 8
   val tickWidth = 4
   val tickl=12
   
   def hor(p1 : Vec,p2 : Vec, ly : Double = 30, hint : Int = 0)(implicit ctx:Context2d)=new HorDim(p1,p2,ly,hint).draw(ctx)
}

abstract class Dim (val p1:Vec,val p2 : Vec,val ly : Double = 30,val hint : Int = 0){
   import Dim._
   def tickH(x : Double,y : Double)(implicit ctx:Context2d) {ctx.M(x+tickl,y+tickl) L(x-tickl,y-tickl)}
   def tickV(x : Double,y : Double)(implicit ctx:Context2d) {ctx.M(x-tickl,y+tickl) L(x+tickl,y-tickl)}
   def text(x : Double, y : Double, tx : String,align : String)(implicit ctx:Context2d){
		ctx.save()
		ctx.translate(x * rscale,y * rscale)
		ctx.scale(1,-1)
		ctx.textAlign = align
		ctx.fillText(tx,0,0)
		ctx.restore()
   }   
   val rscale = RichContext.lscale   
   val dist:Int
   def draw(ctx : Context2d):Unit
}

class HorDim (p1:Vec,p2 : Vec, ly : Double = 30, hint : Int = 0) extends Dim(p1,p2,ly,hint){
   import Dim._
   val dist = abs(p2.x-p1.x).toInt
   
   var dirV = if(p1.y < ly) 1 else -1
   val dirH = if(p2.x > p1.x) 1 else -1   
   
   def draw(ctx : Context2d) = dist match {
       case d if d>epsilon =>{ implicit val mctx=ctx
                               ctx.save()
                               ctx.beginPath()
                               ctx.lineWidth=Dim.lineWidth
							   ctx.lineCap = "butt"
							 //  println(s"${ctx.lineWidth}")
							   val (y,ev,eh,g) = (ly/rscale,dirV * lineEnl/rscale,
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
      
}
