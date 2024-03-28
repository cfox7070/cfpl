enablePlugins(ScalaJSPlugin)

ThisBuild / scalaVersion := "2.13.12"
ThisBuild / organization := "com.cfx70"
ThisBuild / version      := "0.1.1"
 
import scala.sys.process._
import sbt.Keys.streams
val toHtml = taskKey[Unit]("copy to html//")

lazy val commonSettings = Seq(
    scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.ESModule) },
    libraryDependencies +="org.scalactic" %%% "scalactic" % "3.2.14",
//    libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.7" % "test",
	libraryDependencies += "com.lihaoyi" %%% "utest" % "0.8.1" % "test",
    libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "2.7.0",
    testFrameworks += new TestFramework("utest.runner.Framework"),
    scalacOptions ++= Seq(
          "-deprecation",                      // Emit warning and location for usages of deprecated APIs.
          "-encoding", "utf-8",                // Specify character encoding used by source files.
          "-explaintypes",                     // Explain type errors in more detail.
          "-feature"),
    toHtml := {
       val log = streams.value.log
       log.info("replacing server files")
      "./copy_det.sh" !
    }
)

lazy val threejsfacade = (project in file("threejsfacade"))
  .enablePlugins(ScalaJSPlugin)
  .settings(
    name := "threejsfacade",
    commonSettings
   )

lazy val core = (project in file("core"))
  .dependsOn(threejsfacade)
  .enablePlugins(ScalaJSPlugin)
  .settings(
    name := "core",
   commonSettings
   )
   
lazy val idb = (project in file("idb"))
  .enablePlugins(ScalaJSPlugin)
  .settings(
    name := "idb",
   commonSettings
   )

lazy val draft = (project in file("draft"))
  .dependsOn(core)
  .enablePlugins(ScalaJSPlugin)
  .settings(
    name := "draft",
   commonSettings
   )
 
lazy val draft2 = (project in file("draft2"))
  .dependsOn(core)
  .enablePlugins(ScalaJSPlugin)
  .settings(
    scalaJSUseMainModuleInitializer := true,
    name := "draft2",
   libraryDependencies += "com.raquo" %%% "laminar" % "16.0.0",
   commonSettings
   )
  
lazy val scheme = (project in file("scheme"))
  .dependsOn(core)
  .enablePlugins(ScalaJSPlugin)
  .settings(
    name := "scheme",
   commonSettings
   )
   
lazy val fund_anim = (project in file("fund-anim"))
  .dependsOn(threejsfacade)
  .enablePlugins(ScalaJSPlugin)
  .settings(
    name := "fund_anim",
   commonSettings
   )
