    inputs.forEach((i)=>i.addEventListener('change', setRedRR))
    setRedRR() 
 
    function setRedRR(e) {
        detapp.setRedRR(Number(document.querySelector('#a1').value),
                        Number(document.querySelector('#b1').value),
                        Number(document.querySelector('#a2').value),
                        Number(document.querySelector('#b2').value),
                        Number(document.querySelector('#da').value),
                        Number(document.querySelector('#db').value),
                        Number(document.querySelector('#h').value))
    }
