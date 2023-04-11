inputs.forEach((i)=>i.addEventListener('change', setRedRC));

window.selchange = setDev

function setDev(e){
	 DetApp.setDev(Number(document.querySelector('#stp').value))
}

function setRedRC(e) {
	DetApp.setRedRC(Number(document.querySelector('#a').value),
					Number(document.querySelector('#b').value),
					Number(document.querySelector('#d').value),
					Number(document.querySelector('#da').value),
					Number(document.querySelector('#db').value),
					Number(document.querySelector('#h').value),
					Number(document.querySelector('#f1').value),
					Number(document.querySelector('#f2').value))
	setDev()
}

setRedRC();
