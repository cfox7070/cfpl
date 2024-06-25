package cfx70.cfpl.draft

import scala.scalajs.js.annotation._
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
import cfx70.threejsfacade.OrbitControls

import cfx70.vecquat._

@js.native
@JSGlobal
object Android extends js.Object {
	def savepng (dt : String) : Unit = js.native
	def savedxf (dt : String) : Unit = js.native

/*	def savepng(dturl : String) : Unit = js.native
	def savedxf(dxf : String) : Unit = js.native */
}


object App{
	
	def main(args: Array[String]): Unit = {

		val viewContainer: dom.Element = dom.document.querySelector("#views")
		val vewRoot: RootNode = render(viewContainer, Ui.selView())
		
		val typeContainer: dom.Element = dom.document.querySelector("#typebar")
		val typeRoot: RootNode = render(typeContainer, Ui.typeBar())

		val parContainer: dom.Element = dom.document.querySelector("#params")
		val parRoot: RootNode = render(parContainer, Ui.paramTable())
				
		Ui.setModelType("redrc")
    }
    
}

object Ui{
	
//	val android = true
	
	val curModelVar: Var[String] = Var("redrc")
	
	val parImgVar: Var[String] = Var("")
	val parImgAltVar: Var[String] = Var("")
	
		
	val paramsVar: Var[ParamsSeq] = Var(Seq())
	val paramsObserver = Observer[ParamsSeq](onNext = x => setModel())
		
	
	def getParSrc(tp : String) : Option[FromParamsSeq] = tp match {
			case "redrr" => Some(RedRR)
			case "redrc" => Some(RedRC)
			case "redcc" => Some(RedCC)
			case _ => None /*curModelVar*/
		}
	
	def setModelType(mtype : String) : Unit = {
		val parsrc = getParSrc(mtype)
		parsrc match {
			case Some(src) =>{parImgVar.update(s => src.imgSrc)
							  parImgAltVar.update(s => src.imgAlt)
							  paramsVar.update(s => src.defaultParamsSeq)}
			case None => println("unknown detail")
		}
	}
	
	def setModel() : Unit = {
		val parsrc = getParSrc(curModelVar.now())
		val mod = parsrc match {
			case Some(src) => {src(paramsVar.now())}
			case None => null
		}
		if(mod != null) DetApp.setModel(mod) else println("model null")
	}

	def downloadPng(cnvId : String) :String = {
	  val cnv = document.getElementById(cnvId).asInstanceOf[html.Canvas]
	  if(cnvId == "canvas3d") DetApp.updateScene()
	  val dturl = cnv.toDataURL("image/png")
      if (js.typeOf(Android)!="undefined") Android.savepng(dturl)
	  dturl
	}
	
	def typeBar() : HtmlElement = {
		def typeBtn(modtype : String, imgsrc : String, alttxt : String) : HtmlElement = {
				img(cls :="w3-button w3-hover-grayscale typebtn",
					cls.toggle("w3-theme-l4") <-- curModelVar.signal.map(s => if(s == modtype){ setModelType(s); true} else false),
					alt := alttxt,
					src := imgsrc,
					onClick.mapTo(modtype) --> curModelVar )			
		}
		div(cls :="w3-bar w3-center w3-theme",
			typeBtn("redrr","img/redrr-icon.png","переход с прямоугольного на прямоугольное"),
			typeBtn("redrc","img/redrc-icon.png","переход с прямоугольного на круглое"),
			typeBtn("redcc","img/redcc-icon.png","переход с круглого на круглое"),
			paramsVar.signal --> paramsObserver)
	}
	
	def selView() : HtmlElement  = {
		val curV = Var("3d")
		val curVS = curV.signal
		
		def tablinkButton(cap : String, vname :String) : HtmlElement =
				button(cls("w3-bar-item", "w3-button"),
					cap,
					onClick.mapTo(vname) --> curV,
					cls.toggle("w3-theme-l4") <-- curV.signal.map(s => if(s == vname) true else false))
					
		def appcanvas(cId : String) : HtmlElement = 
					canvasTag(cls:="w3-border", idAttr := cId, widthAttr := 1600, heightAttr := 1200)
					
		val picBus = new EventBus[String]
        val picStream: EventStream[String] = picBus.events.map(cId => downloadPng(cId))

		def cnvBtn(cnvId:String, cap : String) : HtmlElement = 
					a(cls("w3-button", "w3-theme", "w3-round-large"),
					  download:="", 
					  href <-- picStream,
					  cap,
					  onClick.mapTo(cnvId) --> picBus.writer)
					  
		def hideIfNotCurrent(vname : String) : Mod[HtmlElement] =
				display <-- curV.signal.map(s => if(s == vname) "block" else "none")
					
		div(		
			div(cls:="w3-bar w3-theme",
				tablinkButton("Модель","3d"),
				tablinkButton("Эскиз","draft"),
				tablinkButton("Развертка","dev"),
				tablinkButton("Инфо","mat")),
				
			div(idAttr :="3d",
				hideIfNotCurrent("3d"),
				appcanvas("canvas3d"),
				p(" "),
				cnvBtn("canvas3d", "Сохранить .png"),
				span(cls("w3-right"),"можно покрутить")),
			div(idAttr :="draft",
				hideIfNotCurrent("draft"),
				appcanvas("canvasdraft"),
				p(" "),
				cnvBtn("canvasdraft", "Сохранить .png")),				
			div(idAttr :="dev",
				hideIfNotCurrent("dev"),
				appcanvas("canvasdev"),
				p(" "),
				cnvBtn("canvasdev", "Сохранить .png"),
				/*cnvTooltip("canvasdev", "Сохранить .dxf", "Сохранить развертку для редактирования в CAD программах")*/),
				//<?=$rpoints?>
			div(idAttr :="mat", cls:="w3-container view",
								hideIfNotCurrent("mats")),
			p(" "))								
	}

	def paramTable() : HtmlElement  = {
//		val sz : Int = params.size / 2

		def valueChanged(n : String, v : Double) : Unit = {			
			paramsVar.update(ps => ps.map(itm =>  if(itm.name == n) ParamsItem(n,v,itm.step,itm.list) else itm ))
			//setModel()					
		}
				
		def renderParamsItem(itm : ParamsItem ) : Element = {	
			tr(	
				td(itm.name),
				td(
				  input(cls:="w3-input w3-border dims-input0",
					  typ:="number",
					  stepAttr:=itm.step,
					  listId:=itm.list,
					  value := itm.v.toString,
					  onChange.mapToValue --> (vs => valueChanged(itm.name, vs.toDouble) ))))
		}
		div(
			div(cls := "w3-container",
				img(src <-- parImgVar,
					alt <-- parImgAltVar,
				    width :="100%")),
			div(cls:="w3-row w3-container",
				table(cls:="w3-table w3-bordered w3-theme-d2",
					tbody(
						children <-- paramsVar.signal.map(data => data.map { item =>
							renderParamsItem(item)
					}))),
			p(" ")))
	}
}

object DetApp{  
	
    lazy val renderer : WebGLRenderer = {  val cnv=document.querySelector("canvas3d").asInstanceOf[html.Canvas]
										println(cnv)
                          new WebGLRenderer($(canvas = cnv ))}

    val camera3d : PerspectiveCamera = new PerspectiveCamera(75, 800.0/600.0, 0.1, 2000)
    val light : DirectionalLight = new DirectionalLight(0xffffff, 0.6)
	val alight = new AmbientLight(0xffffff, 0.5)
    val scene : Scene = { val s = new Scene()
						  s.background=new Color(0xF3F3FA)
						  s.add(light)
                          s.add(alight)
                          s}
                          
    lazy val controls : OrbitControls = { val c =new OrbitControls( camera3d, renderer.domElement )
                                         c.addEventListener("change",(e:dom.Event)=>{    
                                                            light.position.set(camera3d.position.x, camera3d.position.y, camera3d.position.z)
                                                            renderer.render(scene,camera3d) 
                                                        })
                                      c}


    var model:Model=null
    var animation:Boolean=false
	

 /*   var renderer : WebGLRenderer= null
    var scene : Scene = null
    var camera3d : PerspectiveCamera = null
    var light : DirectionalLight = null
    var controls : OrbitControls =null

    var model:Model=null
    var animation:Boolean=false
	
	def setup3d(cnvId : String) : Unit = {
		renderer = {  val cnvDev=document.querySelector(cnvId).asInstanceOf[html.Canvas]
                          new WebGLRenderer($(canvas = cnvDev ))}
                                  
        scene = new Scene()
        scene.background=new Color(0xF3F3FA)
        
        camera3d = new PerspectiveCamera(75, 800.0/600.0, 0.1, 2000)
        light = new DirectionalLight(0xffffff, 0.6)
		val alight = new AmbientLight(0xffffff, 0.5)
        scene.add(light)
        scene.add(alight)
    
        controls = new OrbitControls( camera3d, renderer.domElement )
        controls.addEventListener("change",(e:dom.Event)=>{    
                                                            light.position.set(camera3d.position.x, camera3d.position.y, camera3d.position.z)
                                                            renderer.render(scene,camera3d) 
                                                        })
 
		//(renderer,scene,camera3d,light,controls) = set3dRenderer(cnvId)
	}*/
	
	def setDev(st:Int=1) : Unit ={
       val cnvDev=document.querySelector("#canvasdev").asInstanceOf[html.Canvas]
	   val ctxDev=cnvDev.getContext("2d").asInstanceOf[Context2d]
	   ctxDev.font="italic 2.1em sans-serif"
	   Dev(model,st) match {
		   case Some(dv) => dv.draw(ctxDev)
		   case None =>}		
	}
        
	def setRedRR(a1:Double,b1:Double,a2:Double,b2:Double,da:Double,db:Double,h:Double,f1:Double,f2:Double):Unit = {
          setModel(new RedRR(a1,b1,a2,b2,h,da-a1/2+a2/2,b1/2 -db - b2/2,f1,f2))		  
		}
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
                   
                   val descr=document.querySelector("#descr")
                   descr.innerHTML=model.description("ru")
                   
                   show3d()
                   
                   Draft(model)match{ 
					   case Some(dr) =>{ val cnvDraft=document.querySelector("#canvasdraft").asInstanceOf[html.Canvas]
										 val ctxDraft = cnvDraft.getContext("2d").asInstanceOf[Context2d]
										 ctxDraft.font="italic 2.1em sans-serif"
										 dr.draw(ctxDraft)
									   }
					   case None =>
					   }
					   
				   setDev(3)
				   
                   /*Mats(model,document.querySelector("#mattbl").asInstanceOf[html.Table]) match {
					   case Some(mt) => mt.writeMats()
					   case None =>}*/
         }
	
	    
     def animate(time:Double) : Unit = {     
        if(animation){ //println(s"animation $animation")
                        dom.window.requestAnimationFrame(animate)}
        controls.update()
        light.position.set(camera3d.position.x, camera3d.position.y, camera3d.position.z)
        renderer.render(scene, camera3d)
  }	
}




