package cfx70.cfplhelpers

import scala.scalajs.js
import org.scalajs.dom
//import scala.scalajs.js.timers._
import org.scalajs.dom.{CanvasRenderingContext2D, html, window,document,Event}
import scala.language.implicitConversions

import vecquat.Vec
import cfx70.threejsfacade.THREE._
import cfx70.threejsfacade.OrbitControls


object CommonHelpers {
	val $=js.Dynamic.literal
	def jsA[T](v1:T*)=js.Array[T](v1: _*)
	def max (a1:Double,a2:Double,ax:Double*):Double={
		var mx=math.max(a1,a2)
		for(x<-ax) mx=math.max(mx,x)
		mx
	}
    def min (a1:Double,a2:Double,ax:Double*):Double={
		var mn=math.min(a1,a2)
		for(x<-ax) mn=math.min(mn,x)
		mn
	}
    def addListener(evt:String,listener: js.Function1[Event, _],els:dom.Element*)=
        for(el <- els) el.addEventListener(evt,listener,false)
    
    def dimsChange(e:dom.Event){
        println("smth changed")
    }
}

object Helpers2d{
	type Context2d = CanvasRenderingContext2D
	
	implicit def context2rich(ctx: CanvasRenderingContext2D)=new RichContext(ctx)
	
	class RichContext(val ctx : CanvasRenderingContext2D){
	//import RichContext._
		var lscale=1.0
		var curPt=Vec(0,0)
		def polygon(st:Vec,pts:Vec *) : RichContext={
			//ctx.beginPath()
			M(st)
			for (pt <- pts) L(pt)
			ctx.closePath
			this
		}
		def polygon(pts:Seq[Vec]) : RichContext = polygon(pts.head,pts.tail: _*)
		def M(x:Double,y:Double)={ctx.moveTo(x*lscale,y*lscale);curPt=Vec(x*lscale,y*lscale);this}
		def M(pt:Vec):RichContext=M(pt.x,pt.y)
		def L(x:Double,y:Double)={ctx.lineTo(x*lscale,y*lscale);curPt=Vec(x*lscale,y*lscale);
                                /*println(f"L ${x*lscale}%2.2f ${x*lscale}%2.2f");*/this}
		def L(pt:Vec):RichContext=L(pt.x,pt.y)
		def H(x:Double)=L(x,curPt.y)
		def V(y:Double)=L(curPt.x,y)
	}
	
  object RichContext{
       var lscale=1.0
  }
}

object Helpers3d{	
    import CommonHelpers.$
    
    def set3dRenderer(canvasId : String):(WebGLRenderer,Scene,PerspectiveCamera,
												DirectionalLight,OrbitControls) ={
        val renderer = {  val cnvDev=document.querySelector(canvasId).asInstanceOf[html.Canvas]
                          new WebGLRenderer($(canvas = cnvDev ))}
                          
        val scene = new Scene()
        scene.background=new Color(0xF3F3FA)
        
        val camera3d = new PerspectiveCamera(75, 800.0/600.0, 0.1, 2000)
        val light = new DirectionalLight(0xffffff, 0.5)
        scene.add(light)
    
        val controls = new OrbitControls( camera3d, renderer.domElement )
        controls.addEventListener("change",(e:dom.Event)=>{    
                                                            light.position.set(camera3d.position.x, camera3d.position.y, camera3d.position.z)
                                                            renderer.render(scene,camera3d) 
                                                        })
        (renderer,scene,camera3d,light,controls)
    }
}







