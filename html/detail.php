<?php
        $dtype=filter_var($_GET["type"], FILTER_SANITIZE_STRING);
        switch ($dtype)
        {
            case "redrr":
                $title="Переход c прямоугольного на прямоугольное";
                $imgsrc="img/red-r-ra.png";
                $detailparams="redrr-params.php";
                $detailscript="redrr-script.js";
                break;
            
            case "redrc":
                $title="Переход c прямоугольного на круглое";
                $imgsrc="img/red-r-c.png";
                $detailparams="redrc-params.php";
                $detailscript="redrc-script.js";
                break;

            case "redcc":
                $title="Переход c круглого на круглое";
                $imgsrc="img/red-с-c.png";
                $detailparams="redcc-params.php";
                $detailscript="redcc-script.js";
                break;

            case "elbrr":
                $title="Отвод прямоугольный";
                $imgsrc="img/elb-r-r.png";
                $detailparams="elbrr-params.php";
                $detailscript="elbrr-script.js";
                break;
            case "elbcc":
                $title="Отвод круглый";
                $imgsrc="img/elb-с-с.png";
                $detailparams="elbcc-params.php";
                $detailscript="elbcc-script.js";
                break;
            case "brunchcc":
                $title="Врезка круглое в круглое";
                $imgsrc="img/brunch-c-c.png";
                $detailparams="brunchcc-params.php";
                $detailscript="brunchcc-script.js";
                break;
            case "cone":
                $title="cone test";
                $imgsrc="none";
                $detailparams="cone-params.php";
                $detailscript="cone-script.js";
                break;
            
            default:
                $title="Переход c прямоугольного на прямоугольное";
                $imgsrc="img/red-r-ra.png";
                $detailparams="redrr-params.php";
                $detailscript="redrr-script.js";
                break;
/*				require "404.shtml";
                http_response_code(404);
                exit("not found");
                break;*/
        }
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
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
	<a href="detail.php?type=redrr" class="w3-button">
		 <img src="img/redrr-icon.png" 
				class=""  alt="переход с прямоугольного на прямоугольное"
				 style="width:58px;height:41px;"> </a>
	<a href="detail.php?type=redrc" class="w3-button">
		 <img src="img/redrc-icon.png" 
				class="w3-hover-grayscale"  alt="переход с прямоугольного на круглое"
				 style="width:58px;height:41px;"> </a>
	<a href="detail.php?type=redcc" class="w3-button">
		 <img src="img/redcc-icon.png" 
				class="w3-hover-grayscale"  alt="переход с круглого на круглое"
				 style="width:58px;height:41px;"> </a>
</div>
<p></p>
<div class="w3-container">

<div class="w3-row">

	<div class="w3-third">
	  <!--div class="w3-row"-->
		  <div class=" w3-container"> <!--params-->
				<img src=<?= $imgsrc ?> style="width:100%">
		  </div>
		  
		  <div class=" w3-container"> 
				<?php require $detailparams ?>    
		  </div>
	  <!--/div-->
	</div>

	<div class="w3-twothird">
		
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
			<a id="download" download="" href="" onclick="download_model(this);">Сохранить</a>
			<span class="w3-right"> можно покрутить</span>
			</div>

			<div id="draft" class="w3-container view" style="display:none">
			<canvas class="w3-border" id="canvasdraft" width="1600" height="1200"></canvas>
			<a id="download" download="" href="" onclick="download_draft(this);">Сохранить</a>
			</div>

			<div id="dev" class="w3-container view" style="display:none">
			<canvas class="w3-border" id="canvasdev" width="1600" height="1200"></canvas>
			<a id="download" download="" href="" onclick="download_dev(this);">Сохранить</a>
			</div>

			<div id="mat" class="w3-container view" style="display:none">
				<table id= "mattbl" class="w3-table w3-bordered w3-theme-light" >
				</table> 
			</div>
		</div>
	</div>
</div>
</body>

<script>
	download_draft = function(el) {
	  let cnv = document.getElementById("canvasdraft")
	  let image = cnv.toDataURL();
	  el.href = image;
	};
	download_dev = function(el) {
	  let cnv = document.getElementById("canvasdev")
	  let image = cnv.toDataURL();
	  el.href = image;
	};
</script>

<script async="" src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>

<script type="importmap">
{
  "imports": {
			"three": "./js/three.r140.module.js",
			"detapp": "./js/det.js",
			"three/addons/": "./js/addons/"
  }
}

</script>

<script type="module">

import {DetApp}  from 'detapp';

window.openCity = function(evt,viewName) {
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

window.download_model = function(el) {
	  let cnv = document.getElementById("canvas3d")
	  DetApp.updateScene()
	  let image = cnv.toDataURL();
	  el.href = image;
	};

const inputs = document.querySelectorAll('.dims-input0')
	DetApp.setAnimation(false)
           
    <?php require $detailscript ?>

</script>
</html>
