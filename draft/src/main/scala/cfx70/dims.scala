package cfx70.cfpl.draft

import cfx70.vecquat._

import scala.math._

import cfx70.cfpl.core._
import cfx70.cfpl.core.CommonHelpers._
import cfx70.cfpl.core.Helpers2d._


object Dim{
   val lineWidth = 1.2
   val lineDist = 25
   val lineEnl = 8
   val lineGap = 2
   val tickWidth = 4
   val tickl=6
   
   def hor(p1:Vec,p2 : Vec, ly:Double, scl : Double=1)(implicit ctx:Context2d)=new HorDim(p1,p2,ly,scl).draw(ctx)
}

abstract class Dim (val p1:Vec,val p2 : Vec,val scl : Double){
   import Dim._
   def tickH(p:Vec)(implicit ctx:Context2d) {ctx.M(p.x+tickl,p.y+tickl) L(p.x-tickl,p.y-tickl)}
   def tickV(p:Vec)(implicit ctx:Context2d) {ctx.M(p.x-tickl,p.y+tickl) L(p.x+tickl,p.y-tickl)}
   
   val dist:Double
   def draw(ctx : Context2d):Unit
}

class HorDim (p1:Vec,p2 : Vec,val ly:Double, scl : Double) extends Dim(p1,p2,scl){
   import Dim._
   
   val dist=p2.x-p1.x
   
   def draw(ctx : Context2d) = dist match {
       case d if d>epsilon =>{ implicit val mctx=ctx
                               ctx.save()
                               ctx.beginPath()
                               ctx.lineWidth=Dim.lineWidth
                               ctx.M(0,0) L(500,500)
                               ctx.stroke()
                               ctx.restore()
                             }
       case _ =>
   }
   
   
}
