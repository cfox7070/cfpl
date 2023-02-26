    inputs.forEach((i)=>i.addEventListener('change', setRedRC));
    setRedRC();
 
    function setRedRC(e) {
        DetApp.setRedRC(Number(document.querySelector('#a').value),
                        Number(document.querySelector('#b').value),
                        Number(document.querySelector('#d').value),
                        Number(document.querySelector('#da').value),
                        Number(document.querySelector('#db').value),
                        Number(document.querySelector('#h').value))
    }
