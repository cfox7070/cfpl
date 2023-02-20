package cfx70.cfpl.draft

import scala.scalajs.js

import scala.math._

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
		//Top
        ctx.beginPath()
        ctx.lineWidth=Dev.lineWidth
        ctx.translate(-hsz/2+dimspace+dimstep,dimstep)
        if(model.fcb.bpts(0).x < model.fct.bpts(0).x)
			ctx.translate((model.fct.bpts(0).x-model.fcb.bpts(0).x)*mscl,0)
		val fcb = model.fcb.top.map(_.xz - model.fcb.top(3).xz)
		ctx.scale(-1,1)
        ctx.M(fcb(1)) L(fcb(0)) L(fcb(3)) L(fcb(2))
        ctx.stroke()
        ctx.beginPath()
        ctx.lineWidth=Dev.thinlineWidth
        ctx.setLineDash(js.Array(50, 10))
        ctx.M(fcb(1)) L(fcb(2))
        ctx.stroke()
//        ctx.translate(0,(fcb(1).y-fcb(0).y)*mscl)
        ctx.beginPath()
        ctx.lineWidth=Dev.lineWidth
        ctx.setLineDash(js.Array())
		val cn = model.cn.top.map(_.xz - model.fcb.top(3).xz)
		val h = model.cn.hside(model.cn.top)
		ctx.M(cn(0)) L(cn(1).x,h+cn(0).y) M(cn(3)) L(cn(2).x,h+cn(0).y)
//		ctx.polygon(cn)
		ctx.stroke()
        ctx.beginPath()
        ctx.lineWidth=Dev.thinlineWidth
        ctx.setLineDash(js.Array(50, 10))
        ctx.M(cn(1).x,h) L(cn(2).x,h)
		ctx.stroke()
        ctx.beginPath()
        ctx.lineWidth=Dev.lineWidth
        ctx.setLineDash(js.Array())
		val fct = model.fct.top.map(_.xz - model.fcb.top(3).xz)
        ctx.M(fct(0)) L(fct(1)) L(fct(2)) L(fct(3))
        ctx.stroke()
        //bottom
        ctx.translate(hsz/2,0)

   }
}
