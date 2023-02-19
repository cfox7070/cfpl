package cfx70.cfpl.draft

import scala.scalajs.js

import scala.math._

import cfx70.vecquat._

import cfx70.cfpl.core._
import cfx70.cfpl.core.CommonHelpers._
import cfx70.cfpl.core.Helpers2d._

object Dev{
    val lineWidth=6.0
    val thinlineWidth=1.0
    val vsz=1200; val hsz=1600
    val (dimspace, dimstep) = (60,50)
	
    
    def apply(m:Model)= m match {
        case rr : RedRR => new RedRRDev(rr)
//        case rc : RedRC => new RedRCDev(rc)
//        case cc : RedCC => new RedCCDev(cc)
    }
}

abstract class Dev[M <: Model] (val model : M) {
   import Dev._
   val mscl = min((vsz/2 - (dimspace + dimstep) * 2) /( model.whdsize.y),
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

class RedRRDev(m:RedRR) extends Draft(m) {
 //   val model = model.asInstanceOf[RedRC]
    
   import Dev._
    def draw(ctx : Context2d){
		beginDraw(ctx)
		ctx.M(0,0) L(500,500) stroke()
   }
}
