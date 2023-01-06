package cfx70.fund_anim

import scala.scalajs.js
import scala.scalajs.js.annotation._
import org.scalajs.dom
//import scala.scalajs.js.timers._
import org.scalajs.dom.{ window,document}

import cfx70.threejsfacade.THREE._

@JSExportTopLevel("AnimApp")
object App {
	private val $=js.Dynamic.literal
	
	@JSExport
	def start(cnvId : String){
		val mcanvas = document.querySelector(cnvId).asInstanceOf[dom.HTMLCanvasElement]
		val renderer = new WebGLRenderer($(canvas = mcanvas ))
		val camera = new PerspectiveCamera(75, 2, 0.1, 5)
		camera.position.z = 2
		val scene = new Scene()
		val geometry = new BoxGeometry(1, 1, 1)
		val material = new MeshBasicMaterial($(color = 0x44aa88))  // greenish blue
		val cube = new Mesh(geometry, material)
		scene.add(cube);
		
		  def render(mtime : Double) {
			val stime = mtime * 0.001  // convert time to seconds

			cube.rotation.x = stime
			cube.rotation.y = stime

			renderer.render(scene, camera)

			window.requestAnimationFrame(render _)
		  }
		  
		  window.requestAnimationFrame(render _)		
	}
}







