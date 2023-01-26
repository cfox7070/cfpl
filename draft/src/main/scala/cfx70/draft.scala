package cfx70.cfpl.draft

import scala.scalajs.js

import scala.math._

import cfx70.vecquat._

import cfx70.cfpl.core._
import cfx70.cfpl.core.CommonHelpers._
import cfx70.cfpl.core.Helpers2d._

object Draft{
    val lineWidth=6.0
    val thinlineWidth=1.0
    
    def apply(m:Model)= m match {
        case rr : RedRR => new RedRRDraft(rr)
        case rc : RedRC => new RedRCDraft(rc)
        case cc : RedCC => new RedCCDraft(cc)
    }
}

abstract class Draft (val model : Model) {
   
   val vsz=1200/4; val hsz=1600/2
   val (sz,st) = model.placement
   val mscl = CommonHelpers.min(vsz/sz.y,vsz/sz.z,hsz/sz.x)
   
   def drawVisible(v:Vec,ps:Seq[Seq[Vec]])(implicit ctx : Context2d){
        for(p <- ps){
           if(p.length < 3) throw new Exception("not surface")
           if((v * ((p(2)-p(1)) X (p(0)-p(1))) ) > 0) ctx.polygon(p)
        }
   }
   
   def trianglesVisible(v:Vec,p:Seq[Vec])(implicit ctx : Context2d){
        if(p.length < 3) throw new Exception("not surface")
        for(i <- 2 until p.length by 3){
           val t=Seq(p(i-2),p(i-1),p(i))
           if((v * ((t(2)-t(1)) X (t(0)-t(1))) ) > 0) ctx.polygon(t)
        }
   }
     
   def draw(ctx : Context2d)
   
   protected def beginDraw(ctx : Context2d) {
        ctx.beginPath()
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(0, 0, 1600, 1200)
        ctx.translate(1600/2-st.x*mscl,1200/2)
        ctx.lineJoin = "bevel"
        ctx.lscale=mscl
   }
}

class RedRRDraft(m:RedRR) extends Draft(m) {
    val mm = model.asInstanceOf[RedRR]
    
    def draw(ctx : Context2d){
        implicit val mctx=ctx
        ctx.save()
        beginDraw(ctx)
         //front
        ctx.lineWidth=Draft.lineWidth
        ctx.beginPath()
        ctx.scale(1,-1)
        ctx.translate(0,vsz-st.y*mscl)
        drawVisible(Vec(0,0,1),Seq(mm.cn.top, mm.cn.bottom, mm.cn.left, mm.cn.right))
        val f=mm.cn.front
        ctx.polygon(f)
        ctx.stroke()
       //shadow
        ctx.beginPath()
        ctx.fillStyle = "#000"
        ctx.polygon(f(0),f(1),f(2),Vec(f(1).x+(f(0).x-f(1).x)/4, f(1).y-(f(1).y-f(2).y)/4))
        ctx.fill()
        //dims
        Dim.hor(Vec(0,0),Vec(10,10),10,10)
        //top
        ctx.lineWidth=Draft.lineWidth
        ctx.translate(0,-vsz+st.y*mscl-vsz/2)
        ctx.scale(1,-1)
        ctx.beginPath()
        ctx.polygon(mm.cn.top.map(_.xz))
        ctx.polygon(mm.fcb.top.map(_.xz))
        ctx.polygon(mm.fct.top.map(_.xz))
        ctx.stroke()
//        RichContext.lscale=1
        ctx.restore()
    }
}

class RedRCDraft(m:RedRC) extends Draft(m) {
    val mm = model.asInstanceOf[RedRC]
    
    def draw(ctx : Context2d){
        implicit val mctx=ctx
        ctx.save()
        beginDraw(ctx)
         //front
        ctx.beginPath()
        ctx.scale(1,-1)
        ctx.translate(0,vsz-st.y*mscl)
        ctx.lineWidth=Draft.lineWidth
        ctx.polygon(mm.cn.pts)
        ctx.stroke()
        ctx.beginPath()
        ctx.ctx.fillStyle = "#ffffff"
        trianglesVisible(Vec(0,0,1),mm.cn.pts)
        ctx.fill()
        ctx.beginPath()
        ctx.lineWidth=Draft.thinlineWidth
        trianglesVisible(Vec(0,0,1),mm.cn.pts)
        ctx.stroke()
        ctx.beginPath()
        ctx.polygon(mm.cn.tpts)
        ctx.fill()
        ctx.beginPath()
        ctx.lineWidth=Draft.lineWidth
        ctx.polygon(mm.cn.tpts)
        ctx.stroke()
//        Dim.hor(Vec(10,0),Vec(0,10),10,10)
       //shadow
        val sp1=BGeometry.roundPts(mm.cn.d/2,Vec(mm.cn.da,mm.cn.db,0),Pi/2,3*Pi/2)
        val sp2=BGeometry.roundPts(mm.cn.d/2,Vec(mm.cn.da+mm.cn.d/7,mm.cn.db,0),2*Pi/3,4*Pi/3)
        val sp = sp1 ++ sp2.reverse
        ctx.beginPath()
        ctx.ctx.fillStyle = "#000000"
        ctx.polygon(sp)
        ctx.fill()
        //dims
//        Dim.hor(Vec(0,0),Vec(10,10),10,10)
        //top
        ctx.lineWidth=Draft.lineWidth
        ctx.translate(0,-vsz+st.y*mscl-vsz/2)
        ctx.scale(1,-1)
        ctx.beginPath()
        ctx.polygon(mm.cn.tophalf.map(_.xz))
        ctx.polygon(mm.fcb.top.map(_.xz))
        ctx.polygon(mm.fct.tophalf.map(_.xz))
        ctx.stroke()
//        RichContext.lscale=1
        ctx.restore()
    }
}

class RedCCDraft(m:RedCC) extends Draft(m) {
    val mm = model.asInstanceOf[RedCC]
    
    def draw(ctx : Context2d){
        implicit val mctx=ctx
        ctx.save()
        beginDraw(ctx)
         //front
        ctx.lineWidth=Draft.thinlineWidth
        ctx.beginPath()
        ctx.scale(1,-1)
        ctx.translate(0,vsz-st.y*mscl)
        trianglesVisible(Vec(0,0,1),m.cn.pts)
        ctx.stroke()
//        Dim.hor(Vec(10,0),Vec(0,10),10,10)
 /*       val f=m.cn.front
        ctx.polygon(f)
        ctx.stroke()
       //shadow
        ctx.beginPath()
        ctx.polygon(f(0),f(1),f(2),Vec(f(1).x+(f(0).x-f(1).x)/4, f(1).y-(f(1).y-f(2).y)/4))
        ctx.fill()
        //dims
        Dim.hor(Vec(0,0),Vec(10,10),10,10)
        //top
        ctx.lineWidth=Draft.lineWidth
        ctx.translate(0,-vsz+st.y*mscl-vsz/2)
        ctx.scale(1,-1)
        ctx.beginPath()
        ctx.polygon(m.cn.top.map(_.xz))
        ctx.polygon(m.fcb.top.map(_.xz))
        ctx.polygon(m.fct.top.map(_.xz))
        ctx.stroke()
        RichContext.lscale=1*/
        ctx.restore()
    }
}

