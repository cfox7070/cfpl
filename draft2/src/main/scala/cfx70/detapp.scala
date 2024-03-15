package cfx70.cfpl.draft

//import scala.scalajs.js.annotation._
import scala.scalajs.js
import org.scalajs.dom
import org.scalajs.dom.{html,document,Event}
import scala.scalajs.js.timers._

import com.raquo.laminar.api.L._
import com.raquo.laminar.codecs.StringAsIsCodec

import scala.math._

import cfx70.cfpl.core._
import cfx70.cfpl.core.CommonHelpers._
import cfx70.cfpl.core.Helpers3d._
import cfx70.cfpl.core.Helpers2d._

import cfx70.threejsfacade.THREE._

import cfx70.vecquat._

object App{
	
	def main(args: Array[String]): Unit = {
		/*val pars : ParamsSeq = Seq(ParamsItem("a", 100),
								   ParamsItem("b", 200),
								   ParamsItem("c", 315,"5","diams"),
								   ParamsItem("d", 400),
								   ParamsItem("e", 500),
								   ParamsItem("f", 600))*/
								   
		val pars = RedRC.defaultParamsSeq
		Ui.paramsVar.update(paramsVar)

		val parContainer: dom.Element = dom.document.querySelector("#params")
		val parRoot: RootNode = render(parContainer, Ui.paramTable())
		
		val mod = RedRC(pars)
		DetApp.setModel(mod)
    }

object Ui{
	
	val step: HtmlProp[String] = htmlProp("step", StringAsIsCodec)
	val list: HtmlAttr[String] = htmlAttr("list", StringAsIsCodec)
		
	val paramsVar: Var[ParamsSeq] = Var()
	val paramsSignal = paramsVar.signal
	
	def selView() : HtmlElement  = {
		val curV = Var("3d")
		val curVS = curV.signal
		def tablinkButton(cap : String, vname :String) : HtmlElement =
				button(cls("w3-bar-item", "w3-button")
					cap,
					onClick.mapTo(vname) --> curV,
					cls.toggle("w3-theme-l4") <-- curV.signal.map(s => s match {
														 case vname => true
														 case _ => false
														}))
			def appcanvas(cId : String) : HtmlElement = 
					canvas(cls:="w3-border", idAttr := cId, width :="1600", height :="1200")
			def cnvTooltip(cap : String, ttext : String,) : HtmlElement = 
				div(cls("tooltip"),
					a(cls("w3-button", "w3-theme", "w3-round-large"),
					  download:="", href:="",
					  cap,
					  onclick="download_model(this);"),
					span(cls("tooltiptext"),ttext))
			def hideIfNotCurrent(vname : String) : Mod[HtmlElement] =
				display <-- curV.signal.map(s => s match {case vname => "block"
														 case _ => "none"
														})
					
		div(cls:="w3-container",
		
			div(cls:="w3-bar w3-theme",
				tablinkButton("Модель","3d"),
				tablinkButton("Эскиз","draft"),
				tablinkButton("Развертка","dev"),
				tablinkButton("Инфо","mat")),
				
			div(idAttr :="3d", cls:="w3-container view",
				hideIfNotCurrent("3d"),
				appcanvas("canvas3d"),
				cnvTooltip("Сохранить .png", "Сохранить модель для программ просмотра рисунков"),
				span(cls("w3-right"),"можно покрутить")),
			div(idAttr :="draft", cls:="w3-container view",
				hideIfNotCurrent("3d"),
				appcanvas("canvasdraft"),
				cnvTooltip("Сохранить .png", "Сохранить эскиз для программ просмотра рисунков")),				
			div(idAttr :="dev", cls:="w3-container view",
				hideIfNotCurrent("3d"),
				appcanvas("canvasdev"),
				cnvTooltip("Сохранить .png", "Сохранить развертку для программ просмотра рисунков"),
				cnvTooltip("Сохранить .dxf", "Сохранить развертку для редактирования в CAD программах")),
				//<?=$rpoints?>
			div(idAttr :="mat", cls:="w3-container view",
								hideIfNotCurrent("3d")))
	}

}

	def paramTable() : HtmlElement  = {
//		val sz : Int = params.size / 2

		def valueChanged(n : String, v : Double) : Unit = {
			
			paramsVar.update(ps => ps.map(itm =>  if(itm.name == n) ParamsItem(n,v,itm.step,itm.list) else itm ))
									
			val s : ParamsSeq = paramsVar.now()
			println(s)
		}
				
		def renderParamsItem(itm : ParamsItem ) : Element = {	
			tr(	
				td(itm.name),
				td(
				  input(cls:="w3-input w3-border dims-input0",
					  typ:="number",
					  step:=itm.step,
					  list:=itm.list,
					  value := itm.v.toString,
					  onChange.mapToValue --> (vs => valueChanged(itm.name, vs.toDouble) ))))
		}

		div(cls:="w3-row",
			table(cls:="w3-table w3-bordered w3-theme-d2",
				tbody(
					children <-- paramsSignal.map(data => data.map { item =>
						renderParamsItem(item)
				})))
		)
	}
}

object DetApp{

    val descr=document.querySelector("#descr")
    
    val ctxDraft={  val cnvDraft=document.querySelector("#canvasdraft").asInstanceOf[html.Canvas]
					cnvDraft.getContext("2d").asInstanceOf[Context2d]}
		ctxDraft.font="italic 2.1em sans-serif"
    
    val ctxDev={  val cnvDev=document.querySelector("#canvasdev").asInstanceOf[html.Canvas]
				  cnvDev.getContext("2d").asInstanceOf[Context2d]}
		ctxDev.font="italic 2.1em sans-serif"
   
    val (renderer,scene,camera3d,light,controls) = set3dRenderer("#canvas3d")

    var model:Model=null
    var animation:Boolean=false
	
	def setDev(st:Int=1) : Unit ={
	   Dev(model,st) match {
		   case Some(dv) => dv.draw(ctxDev)
		   case None =>}		
	}
        
	def setRedRR(a1:Double,b1:Double,a2:Double,b2:Double,da:Double,db:Double,h:Double,f1:Double,f2:Double):Unit = {
          setModel(new RedRR(a1,b1,a2,b2,h,da-a1/2+a2/2,b1/2 -db - b2/2,f1,f2))		  
		}
        def setRedRC(a1:Double,b1:Double,d:Double,da:Double,db:Double,h:Double,f1:Double=30,f2:Double=40):Unit = 
            setModel(new RedRC(a1,b1,d,h,da-a1/2,db-b1/2,f1,f2))
        def setRedCC(d1:Double,d2:Double,dc:Double,h:Double,f1:Double=40,f2:Double=40):Unit = 
            setModel(new RedCC(d1,d2,dc,h,f1,f2))
        def setBrunchCC( d1:Double, d2:Double,  h1:Double,  dd1:Double,
                 d3:Double, d4:Double,  h2:Double,  dd2:Double,
                  ang:Double, h3:Double,  df1:Double, df2:Double,  df3:Double):Unit = 
            setModel(new BrunchCC( d1, d2,  h1,  dd1, d3, d4,  h2 , dd2, ang, h3,  df1, df2,  df3))

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

    def setAnimation(a:Boolean) : Unit ={ animation=a;animate(0) }
    
	def updateScene() : Unit ={renderer.render(scene, camera3d)}
	
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
	
        def setModel(m:Model) : Unit = {
                   if(model != null){
                        scene.remove(model.meshes)
                        model.dispose()
                   }
                   model=m
                   descr.innerHTML=model.description("ru")
                   show3d()
                   Draft(model)match{ case Some(dr) => dr.draw(ctxDraft) case None =>}
                   Mats(model,document.querySelector("#mattbl").asInstanceOf[html.Table]) match {
					   case Some(mt) => mt.writeMats()
					   case None =>}
         }
	
	    
     def animate(time:Double) : Unit = {     
        if(animation){ //println(s"animation $animation")
                        dom.window.requestAnimationFrame(animate)}
        controls.update()
        light.position.set(camera3d.position.x, camera3d.position.y, camera3d.position.z)
        renderer.render(scene, camera3d)
  }	
}
}



