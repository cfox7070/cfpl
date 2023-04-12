<?php
function curver($fname){
	if (file_exists($fname)) {
		return $fname . "?v=" . filemtime($fname);
	}
	return $fname;
}
$detimport = curver("./js/det.js");
$selpointsrc = <<<END
<span class="w3-right"> Окружность из
	<select class="w3-select" id="stp" style="width:inherit;" onchange = "selchange(event)">
	<option value="3" selected>8</option>
	<option value="2">12</option>
  </select>
  точек.
 </span>
END;
$selpointscc = <<<END
<span class="w3-right"> Окружность из
	<select class="w3-select" id="stp" style="width:inherit;" onchange = "selchange(event)">
	<option value="4">6</option>
	<option value="3" selected>8</option>
	<option value="2">12</option>
  </select>
  точек.
 </span>
END;
		if(isset($_GET["type"])) $dtype=filter_var($_GET["type"], FILTER_SANITIZE_STRING);
        if(!isset($dtype) && $_SERVER['REQUEST_URI']=='/') $dtype="redrr";
        switch ($dtype)
        {
            case "redrr":
                $title="Развертка перехода с прямоугольника на прямоугольник.";
                $title1="Переход с прямоугольника на прямоугольник.";
                $descr="Построение развертки перехода с прямоугольного на прямоугольное сечение по заданным размерам онлайн.";
                $imgsrc=curver("img/red-r-ra.png");
                $detailparams="redrr-params.php";
                $detailscript="redrr-script.js";
                $rpoints = "";
                break;
            
            case "redrc":
                $title="Развертка перехода с прямоугольника на круг.";
                $title1="Переход с прямоугольника на круг.";
                $descr="Построение развертки перехода с прямоугольного на круглое сечение по заданным размерам онлайн.";
                $imgsrc=curver("img/red-r-c.png");
                $detailparams="redrc-params.php";
                $detailscript="redrc-script.js";
                $rpoints = $selpointsrc;
                break;

            case "redcc":
                $title="Развертка перехода с круга на круг.";
                $title1="Переход с круга на круг.";
                $descr="Построение развертки перехода с круглого на круглое сечение по заданным размерам онлайн.";
                $imgsrc=curver("img/red-c-c.png");
                $detailparams="redcc-params.php";
                $detailscript="redcc-script.js";
                $rpoints = $selpointscc;
                break;

        /*    case "elbrr":
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
                break;*/
            
            default:
				http_response_code(404);
				include("404.shtml");
				die();
       }
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title><?= $title ?> </title>
	<meta name="description" content="<?= $descr ?>"/>
    <style>
            body { margin: 0; }
            .container{position:relative;
                       }
            .det-label {font-family:"Lucida Console", Monaco, monospace;
                        font-style: italic;
                        font-size: 18px;
                    }
            canvas {
                        width: 100%;
                        }
            .x11Lgray { background-color : #D3D3D3!important;}
			
			/* Tooltip container */
			.tooltip {
			  position: relative;
			  display: inline-block;
			/*  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
			}

			/* Tooltip text */
			.tooltip .tooltiptext {
			  visibility: hidden;
			  width: 140px;
			  background-color: #555;
			  color: #fff;
			  text-align: center;
			  padding: 5px 0;
			  border-radius: 6px;

			  /* Position the tooltip text */
			  position: absolute;
			  z-index: 1;
			  bottom: 125%;
			  left: 50%;
			  margin-left: -60px;

			  /* Fade in tooltip */
			  opacity: 0;
			  transition: opacity 0.3s;
			}

			/* Tooltip arrow */
			.tooltip .tooltiptext::after {
			  content: "";
			  position: absolute;
			  top: 100%;
			  left: 50%;
			  margin-left: -5px;
			  border-width: 5px;
			  border-style: solid;
			  border-color: #555 transparent transparent transparent;
			}

			/* Show the tooltip text when you mouse over the tooltip container */
			.tooltip:hover .tooltiptext {
			  visibility: visible;
			  opacity: 1;
			}
    </style>
  <link rel="icon" href="https://hvac.cfx70.ru/favicon.ico" type="image/png">
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
				<img src=<?= $imgsrc ?> style="width:100%" alt=<?= $title ?>>
		  </div>
		  
		  <div class=" w3-container"> 
				<?php require $detailparams ?>    
		  </div>
	  <!--/div-->
	</div>

	<div class="w3-twothird">
		
		<div class="w3-container"><!--canvas-->
			<h1 id="descr" class="w3-large w3-center det-label"><?=$title1?></h1>
			<div class="w3-bar w3-theme">
				<button class="w3-bar-item w3-button tablink w3-theme-l4" onclick="openCity(event,'3d')">Модель</button>
				<button class="w3-bar-item w3-button tablink" onclick="openCity(event,'draft')">Эскиз</button>
				<button class="w3-bar-item w3-button tablink" onclick="openCity(event,'dev')">Развертка</button>
				<button class="w3-bar-item w3-button tablink" onclick="openCity(event,'mat')">Материалы</button>
			</div>

			<div id="3d" class="w3-container view">
			<canvas class="w3-border" id="canvas3d" width="1600" height="1200"></canvas>
			<div class="tooltip">
				<a id="download" download="" href="" onclick="download_model(this);" class="w3-button w3-theme w3-round-large">Сохранить .png</a>
				<span class="tooltiptext">Сохранить модель для программ просмотра рисунков</span>
			</div>
			<span class="w3-right"> можно покрутить</span>
			</div>

			<div id="draft" class="w3-container view" style="display:none">
			<canvas class="w3-border" id="canvasdraft" width="1600" height="1200"></canvas>
			<div class="tooltip">
				<a download="" href="" onclick="download_draft(this);" class="w3-button w3-theme w3-round-large">Сохранить .png</a>
				<span class="tooltiptext">Сохранить эскиз для программ просмотра рисунков</span>
			</div>
			</div>

			<div id="dev" class="w3-container view" style="display:none">
			<canvas class="w3-border" id="canvasdev" width="1600" height="1200"></canvas>
			<div class="tooltip">
				<a download="" href="" onclick="download_dev(this);" class="w3-button w3-theme w3-round-large">Сохранить .png</a>
				<span class="tooltiptext">Сохранить развертку для программ просмотра рисунков</span>
			</div>
			<div class="tooltip">
				<a download="" href="" onclick="download_devdxf(this);" class="w3-button w3-theme w3-round-large">Сохранить .dxf</a>
				<span class="tooltiptext">Сохранить развертку для редактирования в CAD программах</span>
			</div>
			<?=$rpoints?>
			</div>

			<div id="mat" class="w3-container view" style="display:none">
				<table id= "mattbl" class="w3-table w3-bordered w3-theme-light" >
				</table> 
			</div>
			<p></p>
		</div>
	</div>
</div>
	<footer class="w3-container w3-theme-d2">
		<p class="w3-left" style="font: 12px Arial, sans-serif;">&copy; 2023 cfx70</p>
		<p class="w3-right">feedback: <a href="mailto:info@cfx70.ru?subject=detail">info@cfx70.ru</a></p>
	</footer>
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
    openCity = function(evt,viewName) {
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
	

</script>

<script async="" src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>

<script type="importmap">
{
  "imports": {
			"three": "./js/three.module.js",
			"detapp": "<?= $detimport ?>",
			"three/addons/": "./js/addons/"
  }
}

</script>

<script type="module">
           
import {DetApp}  from 'detapp';

DetApp.setAnimation(false)

window.download_model = function(el) {
	  let cnv = document.getElementById("canvas3d")
	  DetApp.updateScene()
	  let image = cnv.toDataURL();
	  el.href = image;
	};

const inputs = document.querySelectorAll('.dims-input0')
    <?php require $detailscript ?>

</script>
</html>
