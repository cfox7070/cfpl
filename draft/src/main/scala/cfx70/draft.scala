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
    val vsz=1200; val hsz=1600
    val (dimspace, dimstep) = (60,50)
	
    
    def apply(m:Model)= m match {
        case rr : RedRR => new RedRRDraft(rr)
        case rc : RedRC => new RedRCDraft(rc)
        case cc : RedCC => new RedCCDraft(cc)
    }
}

abstract class Draft[M <: Model] (val model : M) {
   import Draft._
   val mscl = min((vsz/2 - (dimspace + dimstep) * 2) /( model.whdsize.y),
						(vsz/2 - (dimspace + dimstep) * 2) /( model.whdsize.z))
   
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
        ctx.fillRect(0, 0, hsz, vsz)
        ctx.translate(hsz/2,vsz/2)
        ctx.scale(1,-1)
        ctx.lineJoin = "bevel"
		RichContext.ctx=ctx
        RichContext.lscale=mscl
   }
}

class RedRRDraft(m:RedRR) extends Draft(m) {
    
   import Draft._
    def draw(ctx : Context2d){
        implicit val mctx=ctx
		val back = model.cn.back
		val front = model.cn.front
	    val shifty = if(front(0).y * mscl > vsz/4 - (dimspace + dimstep)){
						-(front(0).y - (vsz/4 - (dimspace + dimstep)))*mscl
					}else 0
		//println(shifty)
        ctx.save()
        beginDraw(ctx)
         //front
        ctx.lineWidth=Draft.lineWidth
        ctx.beginPath()
        ctx.translate(0,vsz/4 + shifty)
        drawVisible(Vec(0,0,1),Seq(model.cn.top, model.cn.bottom, model.cn.left, model.cn.right))
        ctx.polygon(front)
        ctx.stroke()
       //shadow
        ctx.beginPath()
        ctx.fillStyle = "#000"
        ctx.polygon(front(0),front(1),front(2),
						Vec(front(1).x+(front(0).x-front(1).x)/4, 
							front(1).y-(front(1).y-front(2).y)/4))
        ctx.fill()
        //dims
		//h
		val (ltop,lbot) = (vsz/4-dimspace, -vsz/4-dimspace/3)
		if(back(1).y > front(1).y){ //back on top
			Dim.hor(back(1).xy,back(0).xy,ltop-shifty,0)
			Dim.hor(front(2).xy,front(3).xy,lbot-shifty,0)
			if(back(2).x < front(2).x) Dim.hor(back(2).xy,front(2).xy,lbot-shifty,0) 
			if(back(3).x > front(3).x) Dim.hor(front(3).xy,back(3).xy,lbot-shifty,0) 
		}else{ //back on bottom
			Dim.hor(back(2).xy,back(3).xy,lbot-shifty,0)
			Dim.hor(front(1).xy,front(0).xy,ltop-shifty,0)
			if(back(1).x < front(1).x) Dim.hor(back(1).xy,front(1).xy,ltop-shifty,0) 
			if(back(0).x > front(0).x) Dim.hor(front(0).xy,back(0).xy,ltop-shifty,0) 			
		}
		//v
		val (lrt,llt) = (max(back(0).x,front(0).x)+dimstep, min(back(1).x,front(1).x)-dimstep)
		if(back(1).x > front(1).x){ //back on right
			Dim.vert( back(3).xy, back(0).xy, lrt, 0 )
			Dim.vert( front(2).xy, front(1).xy, llt, 0 )
			if(back(3).y < front(3).y) Dim.vert( back(3).xy, front(3).xy, llt, 0 ) 
			if(back(0).y > front(0).y) Dim.vert( front(0).xy,back(0).xy, llt, 0 ) 
		}else{ //back on left
			Dim.vert( back(2).xy, back(1).xy, llt, 0 )
			Dim.vert( front(3).xy, front(0).xy, lrt, 0 )
			if(back(3).y < front(3).y) Dim.vert( back(3).xy, front(3).xy, lrt, 0 )
			if(back(0).y > front(0).y) Dim.vert( front(0).xy, back(0).xy, lrt, 0 )			
		}
        //top
        ctx.lineWidth=Draft.lineWidth
        ctx.translate(0,-(3*vsz/8)-shifty)
        ctx.scale(1,-1)
        ctx.beginPath()
        ctx.polygon(model.cn.top.map(_.xz))
        ctx.polygon(model.fcb.top.map(_.xz))
        ctx.polygon(model.fct.top.map(_.xz))
        ctx.stroke()
        //dims
		Dim.vertM( model.fct.top(1).xz, 
					model.fcb.top(0).xz, lrt, 0 )
		Dim.vertM( model.fcb.top(2).xz, 
					model.fcb.top(3).xz, llt, 0 )
		Dim.vertM( model.fct.top(2).xz, 
					model.fct.top(3).xz, llt, 0 )
        ctx.restore()
    }
}

class RedRCDraft(m:RedRC) extends Draft(m) {
 //   val model = model.asInstanceOf[RedRC]
    
   import Draft._
    def draw(ctx : Context2d){
        implicit val mctx=ctx
		RichContext.ctx=ctx
        ctx.save()
        beginDraw(ctx)
         //front
        ctx.beginPath()
        ctx.translate(0,vsz/4)
        ctx.lineWidth=Draft.lineWidth
        ctx.polygon(model.cn.pts)
        ctx.stroke()
        ctx.beginPath()
        ctx.ctx.fillStyle = "#ffffff"
        trianglesVisible(Vec(0,0,1),model.cn.pts)
        ctx.fill()
        ctx.beginPath()
        ctx.lineWidth=Draft.thinlineWidth
        trianglesVisible(Vec(0,0,1),model.cn.pts)
        ctx.stroke()
        ctx.beginPath()
        ctx.polygon(model.cn.tpts)
        ctx.fill()
        ctx.beginPath()
        ctx.lineWidth=Draft.lineWidth
        ctx.polygon(model.cn.tpts)
        ctx.stroke()
//        Dim.hor(Vec(10,0),Vec(0,10),10,10)
       //shadow
        val sp1=BGeometry.roundPts(model.cn.d/2,Vec(model.cn.da,model.cn.db,0),Pi/2,3*Pi/2)
        val sp2=BGeometry.roundPts(model.cn.d/2,Vec(model.cn.da+model.cn.d/7,model.cn.db,0),2*Pi/3,4*Pi/3)
        val sp = sp1 ++ sp2.reverse
        ctx.beginPath()
        ctx.ctx.fillStyle = "#000000"
        ctx.polygon(sp)
        ctx.fill()
        //dims
//        Dim.hor(Vec(0,0),Vec(10,10),10,10)
        //top
        ctx.lineWidth=Draft.lineWidth
        ctx.translate(0,-vsz/2)
        ctx.scale(1,-1)
        ctx.beginPath()
        ctx.polygon(model.cn.tophalf.map(_.xz))
        ctx.polygon(model.fcb.top.map(_.xz))
        ctx.polygon(model.fct.tophalf.map(_.xz))
        ctx.stroke()
//        RichContext.lscale=1
        ctx.restore()
    }
}

class RedCCDraft(m:RedCC) extends Draft(m) {
 //   val model = model.asInstanceOf[RedCC]
    
   import Draft._
    def draw(ctx : Context2d){
        implicit val mctx=ctx
		RichContext.ctx=ctx
        ctx.save()
        beginDraw(ctx)
         //front
        ctx.lineWidth=Draft.thinlineWidth
        ctx.beginPath()
        ctx.scale(1,-1)
        ctx.translate(0,vsz/4)
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

