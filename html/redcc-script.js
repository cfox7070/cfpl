inputs.forEach((i)=>i.addEventListener('change', setRedCC));

function setRedCC(e) {
	DetApp.setRedCC(Number(document.querySelector('#d1').value),
					Number(document.querySelector('#d2').value),
					Number(document.querySelector('#dc').value),
					Number(document.querySelector('#h').value),
					Number(document.querySelector('#f1').value),
					Number(document.querySelector('#f2').value))
}

setRedCC();

