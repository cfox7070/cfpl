<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Схема </title>
    <style>
           html, body { height:100%;
                   margin: 0px; }
            .container{position:relative;
                       }
            h1, h2 {font-family:"Lucida Console", Monaco, monospace;
                    font-style: italic;
                    }
            .arrows { position:absolute;
                      width:110px;
                      height:30px;
                      margin:-10px 0;
                      border-style: solid;
                      border:1px black;
                    }
    </style>
  <link rel="stylesheet" href="css/w3.css"/>
  <link rel="stylesheet" href="css/w3-theme-blue-grey.css"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
<body>
<!--div class="w3-bar w3-center w3-theme-l1"> </div-->
<!--div class="w3-bar w3-theme" style="height:7%;">
    <button class="w3-bar-item w3-button" onclick="app.undo()">схема</button>
    <button class="w3-bar-item w3-button" onclick="app.redo()">детали</button>
    <button class="w3-bar-item w3-button" onclick="app.addS()">материалы</button>
</div-->

<!--div class="w3-container w3-theme-l4" style="height:100%; text-align: center;"><!--development-->
<div class="w3-bar w3-theme">
  <a class="w3-bar-item w3-mobile" href="index.php"> <span class="material-icons"> home </span> </a>
  <div class="w3-bar-item w3-mobile">
    <button id = "undo" class="w3-button" onclick="app.undo()"><span class="material-icons"> undo </span></button>
    <button id = "redo" class="w3-button" onclick="app.redo()"><span class="material-icons"> redo </span></button>
    <button id = "tbl" class="w3-button" onclick="app.table()">table</button>
    <a class="w3-button" onclick="app.toFile()" title="Save to file" download >Download</a>
    <a class="w3-button" onclick="app.fromFile()" title="Load from file" >Upload</a>
    <a class="w3-button" onclick="app.clear()" title="Clear" >Clear</a>
  </div>
</div>
<div class="w3-bar w3-theme-l4">
    <!--button class="w3-bar-item w3-button w3-mobile" onclick="app.addConnectStrPartR({hsystem: '', a : 300,b : 200, l : 1250})">addPart</button-->
	<table class="w3-bar-item w3-mobile">
		<tr>
			<td id = "a">400</td><td id = "xd">x</td><td id = "bd">300</td>
            <td> <button id = "red" class="w3-button" onclick="">R</button></td>
		</tr>
	</table>
    
	<table class="w3-bar-item w3-mobile">
		<tr>
			<td><em>l=</em></td><td><input id = "sL" class="w3-input" type="number" min="0" max="999999" step="50" value="600"></td><td>&nbsp &nbsp</td>
			<td><em>&lt </em></td><td><input id = "sA" class="w3-input" type="number" min="0" max="280" step="5" value="90"></td>
		</tr>
	</table>
</div>
   <div class="w3-row">
    <div id="scheme" class="w3-twothird" style="background-color:#F3F3FA;text-align: center;">
		<div style=" width:100%; height:93%; background-color:#F3F3FA;text-align: center;position:relative;">
        <canvas class="w3-border" id="canvasSch" width="1600" height="1200" style=" width:100%;"></canvas>   
        <div class="arrows" style="left:80%;top:75%;">
             <button class="w3-button" onclick="app.zoomPlus()"> <img src="./img/plus.svg" alt="+" style="width:30px;height:30px;"/> </button>
             <button class="w3-button" onclick="app.zoomMinus()"> <img src="./img/minus.svg" alt="-" style="width:30px;height:30px;"/> </button>
        </div>
        </div>
    </div>
    <div class="w3-third w3-responsive">
		<table class="w3-table w3-striped w3-hoverable w3-bordered w3-theme-l5">
			<tr class="w3-theme-l3">
				<th>#</td><td>Наименование</td><td>кол-во</td><td>Примечание</td>
			</tr>
			<tr>
				<td>1</td><td>Прямой учасок 400х300 L=1250</td><td>5</td><td></td>
			</tr>
			<tr>
				<td>3</td><td>zxcv</td><td>12</td><td></td>
			</tr>
		</table>
   </div>
  </div>  
	<footer class="w3-container w3-theme">
		<p class="w3-left" style="font: 12px Arial, sans-serif;">&copy; 2023 cfx70</p>
		<p class="w3-right">feedback: <a href="mailto:info@cfx70.ru?subject=detail">info@cfx70.ru</a></p>
	</footer>
<!--/div-->


<script src="js/three.js"></script>
<script src="js/OrbitControls.js"></script>
<script type="text/javascript" src="js/redrr-jsdeps.js"></script>
<script type="text/javascript" src="js/redrr-fastopt.js"></script>

<script>
    var lg,sg,ylt1,ylt2,ylb,slt,slb
    [lg,sg,ylt1,ylt2,ylb,slt,slb]=[8,6,251.5,225.5,-250.5,203.5,-203.5]
    var xll1,xll2,xlr,sll,slr
    [xll1,xll2,xlr,sll,slr]=[-351,-325,350,-303.5,303.5]
    var ctxfont="italic 1.8em sans-serif"
    
    var app=null

window.onload=function(){
    const log = document.getElementById('log')
    app=new SchemeApp()
}

</script>
</body>
</html>
