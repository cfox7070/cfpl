package cfx70.cfpl.core

import scala.scalajs.js
import org.scalajs.dom
//import scala.scalajs.js.timers._
import org.scalajs.dom.{CanvasRenderingContext2D, html, window,document,Event}
import scala.language.implicitConversions

import cfx70.vecquat.Vec
import cfx70.threejsfacade.THREE._
import cfx70.threejsfacade.OrbitControls


object CommonHelpers {
	
	implicit def vec2vec3(pt: Vec)=new Vector3(pt.x,pt.y,pt.z)
	//implicit def vec2vec2(pt: Vec)=new Vector2(pt.x,pt.y)
	implicit def vec3Vec(v: Vector3)=Vec(v.x,v.y,v.z)
	implicit def plane3threePlane(p: Plane3) = new Plane(p.n,p.p)

	val $=js.Dynamic.literal
	def jsA[T](v1:T*)=js.Array[T](v1: _*)
	
	def V3(x:Double,y:Double,z:Double=0)=new Vector3(x,y,z)
    def V3(v : Vec)= vec2vec3(v)
//    def V2(x:Double,y:Double)=new Vector2(x,y)

	def maxN (a1:Double,a2:Double,ax:Double*):Double={
		var mx=math.max(a1,a2)
		for(x<-ax) mx=math.max(mx,x)
		mx
	}
    def minN (a1:Double,a2:Double,ax:Double*):Double={
		var mn=math.min(a1,a2)
		for(x<-ax) mn=math.min(mn,x)
		mn
	}

    def addListener(evt:String,listener: js.Function1[Event, _],els:dom.Element*)=
        for(el <- els) el.addEventListener(evt,listener,false)
    
    def dimsChange(e:dom.Event){
        println("smth changed")
    }

	def s(v: Vector3)=s"Vector3: ${v.x},${v.y},${v.z}"
	/*def printmt(m:Matrix4,comment:String=""){
		println(comment)
		val e=m.elements
		println(f""" ${e(0)}%.2f\t  ${e(4)}%.2f\t  ${e(8)}%.2f\t  ${e(12)}%.2f\t
					|${e(1)}%.2f\t  ${e(5)}%.2f\t  ${e(9)}%.2f\t  ${e(13)}%.2f\t
					|${e(2)}%.2f\t  ${e(6)}%.2f\t  ${e(10)}%.2f\t  ${e(14)}%.2f\t
					|${e(3)}%.2f\t  ${e(7)}%.2f\t  ${e(11)}%.2f\t  ${e(15)}%.2f\t
				 """.stripMargin)
	}*/

}

object Helpers2d{
	type Context2d = CanvasRenderingContext2D
	
//	implicit def context2rich(ctx: CanvasRenderingContext2D)=new RichContext(ctx)
	implicit def context2rich(ctx: CanvasRenderingContext2D) : RichContext.type = RichContext
	
	object RichContext{
//	  import RichContext.lscale
       var lscale=1.0
	   var ctx : CanvasRenderingContext2D = null
	   var curPt=Vec(0,0)
		def polygon(st:Vec,pts:Vec *) : RichContext.type={
			//ctx.beginPath()
			M(st)
			for (pt <- pts) L(pt)
			ctx.closePath
			this
		}
		def polygon(pts:Seq[Vec]) : RichContext.type = polygon(pts.head,pts.tail: _*)
		def M(x:Double,y:Double)={ctx.moveTo(x*lscale,y*lscale);curPt=Vec(x*lscale,y*lscale);this}
		def M(pt:Vec):RichContext.type=M(pt.x,pt.y)
		def L(x:Double,y:Double)={ctx.lineTo(x*lscale,y*lscale);curPt=Vec(x*lscale,y*lscale);
                                /*println(f"L ${x*lscale}%2.2f ${x*lscale}%2.2f");*/this}
		def L(pt:Vec):RichContext.type=L(pt.x,pt.y)
		def H(x:Double)=L(x,curPt.y)
		def V(y:Double)=L(curPt.x,y)
	}
	
 /* object RichContext{
       var lscale=1.0
  }*/
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







