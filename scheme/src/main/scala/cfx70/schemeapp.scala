package cfx70.cfpl.scheme

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


@JSExportTopLevel(name = "SchemeApp", moduleID = "scheme")
object SchemeApp{
	  
    val (renderer,scene,camera3d,light,controls) = set3dRenderer("#canvas3d")
    
}




