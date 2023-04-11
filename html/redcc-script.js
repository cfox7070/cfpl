inputs.forEach((i)=>i.addEventListener('change', setRedCC));

window.selchange = setDev

function setDev(e){
	 DetApp.setDev(Number(document.querySelector('#stp').value))
}

function setRedCC(e) {
	DetApp.setRedCC(Number(document.querySelector('#d1').value),
					Number(document.querySelector('#d2').value),
					Number(document.querySelector('#dc').value),
					Number(document.querySelector('#h').value),
					Number(document.querySelector('#f1').value),
					Number(document.querySelector('#f2').value))
	setDev()
}

setRedCC();

