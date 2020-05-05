let input1 = document.querySelector('#input-number1');
let input2 = document.querySelector('#input-number2');
const divResultat = document.querySelector('#div-resultat');

window.onload = () => {
    document.querySelector('#button-sjekk-tall').onclick = sjekkTall;
}

function sjekkTall() {
    if (input1.value > input2.value) {
        divResultat.innerHTML = "Tall1 er større enn Tall2"
    }
}