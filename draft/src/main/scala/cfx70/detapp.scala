package cfx70.cfpl.draft

import scala.scalajs.js.annotation._
import scala.scalajs.js
import org.scalajs.dom
import org.scalajs.dom.{html,document,Event}
import scala.scalajs.js.timers._

import scala.math._

import cfx70.cfpl.core._
import cfx70.cfpl.core.CommonHelpers._
import cfx70.cfpl.core.Helpers3d._
import cfx70.cfpl.core.Helpers2d._

import cfx70.threejsfacade.THREE._

import cfx70.vecquat._


@JSExportTopLevel(name = "DetApp", moduleID = "det")
object DetApp{

	/*{val loader = new TextureLoader()
	 val texture = loader.load("./img/texsh.png",(texture)=>{
		   Model.draftTexture=Some(texture)})
	}*/
	
    val descr=document.querySelector("#descr")
    
    val ctxDraft={  val cnvDraft=document.querySelector("#canvasdraft").asInstanceOf[html.Canvas]
					cnvDraft.getContext("2d").asInstanceOf[Context2d]}
		ctxDraft.font="italic 2.1em sans-serif"
    
    val ctxDev={  val cnvDev=document.querySelector("#canvasdev").asInstanceOf[html.Canvas]
				  cnvDev.getContext("2d").asInstanceOf[Context2d]}
		ctxDev.font="italic 2.1em sans-serif"
   
    val (renderer,scene,camera3d,light,controls) = set3dRenderer("#canvas3d")

    var model:Model=null
    var animation:Boolean=true
        
   @JSExport
	def setRedRR(a1:Double,b1:Double,a2:Double,b2:Double,da:Double,db:Double,h:Double):Unit = 
          setModel(new RedRR(a1,b1,a2,b2,h,da-a1/2+a2/2,b1/2 -db - b2/2))
   @JSExport
        def setRedRC(a1:Double,b1:Double,d:Double,da:Double,db:Double,h:Double,f:Double=30):Unit = 
            setModel(new RedRC(a1,b1,d,h,da,db,f))
   @JSExport
        def setRedCC(d1:Double,d2:Double,dc:Double,h:Double,f1:Double=40,f2:Double=40):Unit = 
            setModel(new RedCC(d1,d2,dc,h,f1,f2))
   @JSExport
        def setBrunchCC( d1:Double, d2:Double,  h1:Double,  dd1:Double,
                 d3:Double, d4:Double,  h2:Double,  dd2:Double,
                  ang:Double, h3:Double,  df1:Double, df2:Double,  df3:Double):Unit = 
            setModel(new BrunchCC( d1, d2,  h1,  dd1, d3, d4,  h2 , dd2, ang, h3,  df1, df2,  df3))

   @JSExport
        def testCone():Unit = {
				
                            val axesHelper = new AxesHelper(100)
                            
                            val bc=new BCylinder(70,50)
                            val bc1=new BCone(40,20,40,5).rotate(Pi/4,Vec(0,1,0)).
                                                           translate(Vec(18,0,15)).cut(bc)
                                                           
                            val bgeom=bc1.getGeometry()
                            val mm = new MeshBasicMaterial()
                            mm.color=new Color(0xff88ff)
                            val msh =new  Mesh(bgeom,mm)
                            
                            bgeom.computeBoundingBox()
                            val bx=bgeom.boundingBox
                            val bxh = new Box3Helper( bx, new Color(0x888800) )
                                                        
                            scene.add(axesHelper)
                            scene.add( bc.wireframe(0xff4400) )
                            scene.add( bc1.wireframe(0x008844) )
                            scene.add( bxh )
                            scene.add(msh)
                           
							camera3d.position.z=300
                            controls.update()
                            renderer.render(scene, camera3d)
			}

    @JSExport
    def setAnimation(a:Boolean){ animation=a;animate(0) }
    
    @JSExport
	def updateScene(){renderer.render(scene, camera3d)}
	
	def show3d():Unit=model match {
		case m:Model =>{
                        val s=m.bsphere
                        camera3d.position.z= (s.radius /** 2*/)/tan((camera3d.fov/2).toRadians)
                        camera3d.position.x= -s.radius
                        camera3d.position.y= s.radius
                        camera3d.rotation.x= -Pi/6
//                        camera3d.rotation.y= -Pi/6
                        camera3d.updateProjectionMatrix()

                        scene.add(model.meshes)
			controls.update()
			light.position.set(camera3d.position.x, camera3d.position.y, camera3d.position.z)
			//animation=true
			animate(0)
		}
		case null => {}
	}
	
        def setModel(m:Model) {
                   if(model != null){
                        scene.remove(model.meshes)
                        model.dispose()
                   }
                   model=m
                   descr.innerHTML=model.description("ru")
                   show3d()
                   Draft(model)match {
					   case Some(dr) => dr.draw(ctxDraft)
					   case None =>}
                   Dev(model) match {
					   case Some(dv) => dv.draw(ctxDev)
					   case None =>}
                   Mats(model,document.querySelector("#mattbl").asInstanceOf[html.Table]) match {
					   case Some(mt) => mt.writeMats()
					   case None =>}
         }
	
	    
     def animate(time:Double) {     
        if(animation){ //println(s"animation $animation")
                        dom.window.requestAnimationFrame(animate)}
        controls.update()
        light.position.set(camera3d.position.x, camera3d.position.y, camera3d.position.z)
        renderer.render(scene, camera3d)
  }	
}




