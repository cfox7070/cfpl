enablePlugins(ScalaJSPlugin)

ThisBuild / version      := "0.1.0"
ThisBuild / scalaVersion := "2.12.16"
ThisBuild / organization := "cfx70"

//scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.ESModule) }
 
import scala.sys.process._
import sbt.Keys.streams
val optLink = taskKey[Unit]("relink fast opt")

lazy val commonSettings = Seq(
    scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.ESModule) },
    libraryDependencies +="org.scalactic" %%% "scalactic" % "3.2.14",
    libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.7" % "test",
    libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "2.3.0",
    scalacOptions ++= Seq(
          "-deprecation",                      // Emit warning and location for usages of deprecated APIs.
          "-encoding", "utf-8",                // Specify character encoding used by source files.
          "-explaintypes",                     // Explain type errors in more detail.
          "-feature"),
    optLink := {
       (Compile / fastOptJS).value
       val log = streams.value.log
       log.info("replacing server file")
      "./relink.sh" !
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

lazy val fund_anim = (project in file("fund-anim"))
  .dependsOn(threejsfacade)
  .enablePlugins(ScalaJSPlugin)
  .settings(
    name := "fund_anim",
   commonSettings
   )
