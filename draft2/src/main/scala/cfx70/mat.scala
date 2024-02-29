package cfx70.cfpl.draft

import scala.scalajs.js
import org.scalajs.dom
import org.scalajs.dom.{html,document,Event}
import org.scalajs.dom.html.{Table}

import scala.math._

import cfx70.vecquat._

import cfx70.cfpl.core._
import cfx70.cfpl.core.CommonHelpers._
//import cfx70.cfpl.core.Helpers2d._

object Mats{	
    
    def apply(m:Model, t:Table)= m match {
        case rr : RedRR => Some(new RedRRMats(rr,t) )
//        case rc : RedRC => new RedRCDev(rc)
//        case cc : RedCC => new RedCCDev(cc)
		case _ => None
    }
}

abstract class Mats[M <: Model] (val model : M, val t : Table) {
   t.innerHTML=""
   def writeMats():Unit
}

class RedRRMats(m:RedRR, t:Table) extends Mats(m,t) {
 //   val model = model.asInstanceOf[RedRC]    
   import Mats._
   def writeMats() : Unit = {
	   val ar = model.area/1000000
	   val arstr = f"<tr> <td>Металл<//td> <td>$ar%.2f <//td> <td>м<sup>2<//sup><//td> <//tr>"
	   t.innerHTML=arstr
   }
}
