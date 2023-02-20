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

object Mat{	
    
    def apply(m:Model, t:Table)= m match {
        case rr : RedRR => new RedRRMat(rr,t)
//        case rc : RedRC => new RedRCDev(rc)
//        case cc : RedCC => new RedCCDev(cc)
    }
}

abstract class Mat[M <: Model] (val model : M, val t : Table) {
   import Mat._
   t.innerHTML=""
   def writeMats():Unit
}

class RedRRMat(m:RedRR, t:Table) extends Mat(m,t) {
 //   val model = model.asInstanceOf[RedRC]    
   import Mat._
   def writeMats(){
	   val ar = model.area/1000000
	   val arstr = f"<tr> <td>Металл<//td> <td>$ar%.2f <//td> <td>м<sup>2<//sup><//td> <//tr>"
	   t.innerHTML=arstr
   }
}
