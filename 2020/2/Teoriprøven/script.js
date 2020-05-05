window.onload = () => {
    document.getElementById('sjekk-svar').onclick = sjekkSvar;
    radioAlternativer.forEach(element => {
        element.checked = false; // tilbakestiller alle knappene
    });
}

let radioAlternativer = document.querySelectorAll('input[type=radio]'); // henter alle 'radio-inputene'
let svarAlternativer = document.querySelectorAll('.svar') // henter alle svaralternativene
let riktige;
let prosRiktig
let antSpm = document.querySelectorAll('.spm').length;

function sjekkSvar() {
    riktige = 0
    let index = 0;
    radioAlternativer.forEach(element => {
        if (element.checked && element.value == 'true') {
            riktige++;
            svarAlternativer[index].style.color = 'green'
        }
        if (element.checked && element.value == 'false') {
            svarAlternativer[index].style.color = 'red';
        }
        index++;
    });
    prosRiktig = Math.floor(riktige / antSpm * 10000) / 100;
    alert(`Du hadde ${prosRiktig}% riktig som tilsvarer ${riktige} riktige svar`);
}