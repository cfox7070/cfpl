<?php

                $title="Переход c прямоугольного на прямоугольное";
                $imgsrc="img/red-r-ra.png";
                $detailparams="redrr-params.php";
                $detailscript="redrr-script.js";

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title><?= $title ?> </title>
    <style>
            body { margin: 0; }
            .container{position:relative;
                       }
            h1, h2 {font-family:"Lucida Console", Monaco, monospace;
                    font-style: italic;
                    }
            canvas {
                        width: 100%;
                        }
            .x11Lgray { background-color : #D3D3D3!important;}
    </style>
  <link rel="stylesheet" href="css/w3.css"/>
  <link rel="stylesheet" href="css/w3-theme-blue-grey.css"/>
</head>
<body>
<div class="w3-container">
<div class="w3-bar w3-center w3-theme"> 
	<!--a href="index.php"> выбор детали </a-->
	-------
</div>
<p></p>
<div class="w3-container">

<div class="w3-row">

  <div class="w3-half w3-container"> <!--params-->
        <img src=<?= $imgsrc ?> style="width:100%">
  </div>
  
  <div class="w3-half w3-container"> 
        <?php require $detailparams ?>    
  </div>
</div>
    
<div class="w3-container"><!--canvas-->
    <h1 id="descr" class="w3-large w3-center">*</h1>
    <div class="w3-bar w3-theme">
        <button class="w3-bar-item w3-button tablink w3-theme-l4" onclick="openCity(event,'3d')">Модель</button>
        <button class="w3-bar-item w3-button tablink" onclick="openCity(event,'draft')">Эскиз</button>
        <button class="w3-bar-item w3-button tablink" onclick="openCity(event,'dev')">Развертка</button>
        <button class="w3-bar-item w3-button tablink" onclick="openCity(event,'mat')">Материалы</button>
    </div>

    <div id="3d" class="w3-container view">
    <canvas class="w3-border" id="canvas3d" width="1600" height="1200"></canvas>
    </div>

    <div id="draft" class="w3-container view" style="display:none">
    <canvas class="w3-border" id="canvasdraft" width="1600" height="1200"></canvas>
    </div>

    <div id="dev" class="w3-container view" style="display:none">
    <canvas class="w3-border" id="canvasdev" width="1600" height="1200"></canvas>
    </div>

    <div id="mat" class="w3-container view" style="display:none">
    </div>
</div>
</div>
</body>
<script type="module">
import * as THREE from 'three';
import {DetApp}  from 'detapp';
import {OrbitControls} from 'addons/OrbitControls.js';

function openCity(evt,viewName) {
	let i;
	let x = document.getElementsByClassName("view");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none"  
	}
	let tablinks = document.getElementsByClassName("tablink")
	for (i = 0; i < x.length; i++) {
		tablinks[i].classList.remove("w3-theme-l4")
	}
	let view = document.getElementById(viewName)
	view.style.display = "block"
	evt.currentTarget.classList.add("w3-theme-l4")
 }
 
const inputs = document.querySelectorAll('.dims-input0')
let app=new DetApp()
	app.setAnimation(false)
           
    <?php require $detailscript ?>

</script>
</html>
