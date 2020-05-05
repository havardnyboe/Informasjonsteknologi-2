let bredde = document.querySelector('#input-bredde')
let hoyde = document.querySelector('#input-hoyde')
let divResultat = document.querySelector('#div-resultat')
let liggende = document.querySelector('.liggende')
let staende = document.querySelector('.staende')
let kvadratisk = document.querySelector('.kvadratisk')

window.onload = () => {
    document.querySelector('#button-beregn').onclick = regnUt;
}

function regnUt() {
    if (bredde.value > 1920) {
        alert('Kan ikke ha bredde større enn 1920 piksler')
        return
    }
    if (Number(bredde.value) == Number(hoyde.value)) {
        console.log('Kvadratisk');
        kvadratisk.style.visibility = 'visible';
        liggende.style.visibility = 'hidden';
        staende.style.visibility = 'hidden';
    }
    else if (Number(bredde.value) < Number(hoyde.value)) {
        console.log('Stående');
        staende.style.visibility = 'visible';
        liggende.style.visibility = 'hidden';
        kvadratisk.style.visibility = 'hidden';
    }
    else if (Number(bredde.value) > Number(hoyde.value)) {
        console.log('liggende');
        liggende.style.visibility = 'visible';
        staende.style.visibility = 'hidden';
        kvadratisk.style.visibility = 'hidden';
    }
    divResultat.innerHTML = `Piksler: ${hoyde.value*bredde.value}<br>Megapiksler: ${hoyde.value*bredde.value/1000000}`;
}

