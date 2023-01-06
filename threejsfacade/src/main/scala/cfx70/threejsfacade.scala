package cfx70.threejsfacade

import org.scalajs.dom._
import org.scalajs.dom.{ HTMLCanvasElement, HTMLElement, HTMLImageElement }

import scalajs.js
import scalajs.js.annotation._
import scalajs.js.typedarray._

/*<script type="importmap">
{
  "imports": {
			"three": "./path.to.three.module.js"			
  }
}
</script>*/

object THREE {
	
//vectorN
	@js.native
	@JSImport("three", "Vector3")
	class Vector3(var x : Double, var y : Double, var z : Double ) extends js.Object{
		def set ( x : Double, y : Double, z : Double ): Vector3 = js.native
	}
//Euler	
	@js.native
	@JSImport("three", "Euler")
	class Euler(var x : Double,var y : Double,var z : Double,var order : String ) extends js.Object{
	}

//renderer
	@js.native
	@JSImport("three", "WebGLRenderer")
	class WebGLRenderer(params: js.Object = js.native) extends js.Object{
		def domElement : HTMLCanvasElement = js.native
		def render ( scene : Object3D, camera : Camera ) : Unit =  js.native
	}
	
	@js.native
	@JSImport("three", "Object3D")
	class Object3D() extends js.Object {
		var position : Vector3 = js.native
		var rotation : Euler = js.native	
		def add ( obj : Object3D* ) : Object3D = js.native
	}

	@js.native
	@JSImport("three", "Scene")
	class Scene() extends Object3D {
		var background : Color = js.native		
	}

//cameras
	@js.native
	@JSImport("three", "Camera")
	class Camera() extends Object3D 

	@js.native
	@JSImport("three", "PerspectiveCamera")
	class PerspectiveCamera(var fov : Double, var aspect : Double, var near : Double, var far : Double) extends Camera 

//lights
	@js.native
	@JSImport("three", "Light")
	class Light(color : Integer = js.native, intensity : Double = js.native) extends Object3D 

	@js.native
	@JSImport("three", "DirectionalLight")
	class DirectionalLight(var color : Integer = js.native, var intensity : Double = js.native) extends Light(color,intensity)

//color
	@js.native
	@JSImport("three", "Color")
	class Color(color: Color = js.native) extends js.Object {
	  def this(r: Double, g: Double, b: Double) = this()
	  def this(hex: Double) = this()
	  def this(name: String) = this()
	}
//geometry
	@js.native
	@JSImport("three", "BufferGeometry")
	class BufferGeometry() extends js.Object {
	}
	
	@js.native
	@JSImport("three", "BoxGeometry")
	class BoxGeometry(width: Double, height: Double, depth: Double,
						var widthSegments: Integer = js.native, var heightSegments: Integer = js.native, 
							var depthSegments: Integer = js.native) extends BufferGeometry {
	}
//material
	@js.native
	@JSImport("three", "Material")
	class Material() extends js.Object {
	}

	@js.native
	@JSImport("three", "MeshBasicMaterial")
	class MeshBasicMaterial(params: js.Object = js.native) extends Material {
	}
//mesh
	@js.native
	@JSImport("three", "Mesh")
	class Mesh( geometry : BufferGeometry, material : Material ) extends Object3D 	
}
