package cfx70.cfpl.core

import scalajs.js

import math._

import cfx70.threejsfacade.THREE
import cfx70.threejsfacade.THREE._
import cfx70.vecquat._
import CommonHelpers.{$,vec3Vec}

object Model {

    val phongBlueMaterial = new MeshPhongMaterial($(color=0x79bff8,side=THREE.DoubleSide))

    def edges(geom: BufferGeometry,mcolor :Int=0x000000) : LineSegments = {    
        val mat= new LineBasicMaterial($(color = mcolor))
        val medges = new EdgesGeometry(geom)
        new LineSegments(medges, mat) 
    }
        
    def makeMeshes(mat: Material, bgeoms : BGeometry*) : Object3D = {
        val m =new Object3D
        for (bg <- bgeoms)  m.add(new Mesh(bg.getGeometry1,mat)) 
        m
    }

}

abstract class Model{
	def whdsize: Vec = new Box3().setFromObject(meshes).getSize(new Vector3())
	
	def bsphere: Sphere = new Box3().setFromObject(meshes).getBoundingSphere(new Sphere())
	
	val meshes:Object3D
	
	def edges(color :Int=0x000000) :Object3D  = {
        val e =new Object3D
        for(m <- meshes.children) m match {
            case mm : Mesh => e.add(Model.edges(mm.geometry,color))
  //        case _ =>
        }
        e
    }
	
	def dispose(){
        for(m <- meshes.children) m match {
            case mm : Mesh => mm.geometry.dispose
  //        case _ =>
        }
	}

    def description(lang:String):String	
}
////////////////////////
class RedRR(val a1:Double,val b1:Double,val a2:Double,val b2:Double,
			val h:Double,val da:Double,val db:Double, 
                            val hfb:Double=30.0,val hft:Double=30.0 ) extends Model{
        import Model._                                          
		def description(lang:String):String = 
			s"Переход $a1 &times; $b1 &minus; $a2 &times; $b2 l=$h"
		
       val fcb = new BBox(a1,b1,hfb)
       val fct = new BBox(a2,b2,hft).translate(Vec(da,db,h-hft))
       val cn  = new BPyramid(a1,b1,a2,b2,h-hfb-hft,da,db).translate(Vec(0,0,hfb))
                                                
       val meshes = makeMeshes(phongBlueMaterial,fcb,fct,cn)                                                             
}
/////////////////////////////
class RedRC(val a1:Double,val b1:Double,val d:Double,
                val h:Double,val da:Double,val db:Double, 
                val df1:Double=30.0,val df2:Double=50) extends Model{

        import Model._                                          
    def description(lang:String):String = s"Переход $a1 &times; $b1 &minus; &Oslash;$d l=$h"

       val fcb = new BBox(a1,b1,df1)
       val fct = new BCylinder(d,df2).translate(Vec(da,db,h-df2))
       val cn  = new BRCRed(a1,b1,d,h-df1-df2,da,db).translate(Vec(0,0,df1))
                                                
       val meshes = makeMeshes(phongBlueMaterial,fcb,fct,cn)                                                             
}

class RedCC(val d1:Double,val d2:Double,val dc:Double,val h:Double,
						val f1:Double,val f2:Double) extends Model{
        import Model._						
	def description(lang:String):String = 
			s"Переход &Oslash;$d1 &minus; &Oslash;$d2 l=$h"
		       
       val fcb = new BCylinder(d1,f1)
       val fct = new BCylinder(d2,f2).translate(Vec(dc,0,h-f2))
       val cn  = new BCone(d1,d2,h-f1-f2,dc).translate(Vec(0,0,f1))
       						
       val meshes = makeMeshes(phongBlueMaterial,fcb,fct,cn)                                                             
}

class ElbR(val a:Double,val b:Double,
						val r:Double, val ang:Double, val f:Double=0) extends Model{
    import Model._
    def description(lang:String):String = s"Отвод $a &times; $b R=$r &lt;$ang&deg;"

    val ins = new BCylinder(r*2,b,0,ang).translate(Vec(0,0,-b/2))
    val outs = new BCylinder((r+a)*2,b,0,ang).translate(Vec(0,0,-b/2))
    val tdsc = new BDisc(r,r+a,ang).translate(Vec(0,0,-b/2))
    val bdsc = new BDisc(r,r+a,ang).translate(Vec(0,0,b/2))
    
    val meshes = makeMeshes(phongBlueMaterial,ins,outs,tdsc,bdsc)
                                            
}

class ElbRR(val a1:Double,val b1:Double,val a2:Double,val b2:Double,
						val r:Double,val db:Double,val ang:Double, val f:Double) extends Model{

    def description(lang:String):String = if(a1 == a2 && b1 == b2 && db == 0) {
        s"Отвод $a1 &times; $b1 R=$r f=$f &lt;$ang&deg;"
    } else {
        s"Отвод $a1 &times; $b1 &minus; $a2 &times; $b2 R=$r f=$f &lt;$ang&deg;"
    }
	
                val meshes=null
                                                                
             //   def dispose(){}
}

class ElbCC(val d1:Double,val d2:Double,val r:Double,val ang:Double, val f:Double) extends Model{

    def description(lang:String):String = "ElbCC"
        
                val meshes=null
                                                                
           //     def dispose(){}
}

class BrunchCC(val d1:Double,val d2:Double, val h1:Double, val dd1:Double,
                val d3:Double,val d4:Double, val h2:Double, val dd2:Double,
                 val ang:Double,val h3:Double, val df1:Double,val df2:Double, val df3:Double) extends Model{
     import Model._                                          
       def description(lang:String):String = 
                s"Тройник &Oslash;$d1 &minus; &Oslash;$d2 &minus; &Oslash;$d4 &lt;$ang&deg; l=$h1"
       val angr=Pi/180*ang

       val fcb = new BCylinder(d1,df1)
       val fct = new BCylinder(d2,df2).translate(Vec(-dd1,0,h1-df2))       
       val cns  = new BCone(d1,d2,h1-df1-df2,-dd1).translate(Vec(0,0,df1))
       
       val h0=h1-df1-df2;val b0=d1/2-(d2/2-dd1)
       val b=b0*h3/h0
       val dv=Vec(d2/2-dd1+b+d3/2*sin(angr),0,df1+h0-h3-d3/2*cos(angr))
       val cnv  = new BCone(d3,d4,h2-df3,dd2).rotate(angr,Vec(0,1,0)).translate(dv).cut(cns)
       val fcv = new BCylinder(d4,df3).translate(Vec(dd2,0,0)).rotate(angr,Vec(0,1,0)).
                                translate(dv+Vec((h2-df3)*cos(angr),0,(h2-df3)*sin(angr)))

                                                
       val gb = fcb.getGeometry1()
       val gt = fct.getGeometry1()
       val gv = fcv.getGeometry1()
       val gcns = cns.getGeometry1()
       val gcnv = cnv.getGeometry1()
       
       val meshes = {
           val mb=new Mesh(gb,phongBlueMaterial)
           val mt=new Mesh(gt,phongBlueMaterial)
           val mv=new Mesh(gv,phongBlueMaterial)
           val mcns=new Mesh(gcns,phongBlueMaterial)
           val mcnv=new Mesh(gcnv,phongBlueMaterial)
           val m =new Object3D
           m.add(mb);m.add(mt);m.add(mv)
           m.add(mcns);m.add(mcnv)
           m
       }
       
     //  def dispose(){ gb.dispose();gt.dispose();gv.dispose()
     //                  gcns.dispose();gcnv.dispose()}
}

