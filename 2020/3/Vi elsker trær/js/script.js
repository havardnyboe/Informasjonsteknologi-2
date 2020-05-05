let selectTre = document.querySelector('#select-tresort');
let selectFraAar = document.querySelector('#select-fraAar');
let selectTilAar = document.querySelector('#select-tilAar');
let divResultat = document.querySelector('#div-resultat')
let divDiagram = document.querySelector('#div-diagram')
let tresort = ["Furu", "Gran", "Lauvtre"];
let aarstall = ["1915", "1950", "1970", "1990", "1992", "2000"];
let treData = [
    [20, 31, 53, 89, 102, 117], // verdiene for Furu
    [23, 39, 72, 89, 92, 99], // verdiene for Gran
    [4, 6, 8, 12, 15, 18] // verdiene for Lauvtre
];

window.onload = () => {
    // kaller på funksjonen 'lagOption' og lager option-tagger for de valgte listene
    lagOption(tresort, selectTre);
    lagOption(aarstall, selectFraAar);
    lagOption(aarstall, selectTilAar);
    // lagSoyler(); // lager søylediagrammet
    getChart();
    document.querySelector('#button-regnUt').onclick = rengUtOkning; // lytter til knappen
}

selectTre.onchange = () => {
    myChart.data.datasets[0].data = treData[selectTre.value]
    myChart.update()
    // lagSoyler(); // oppdaterer søylediagrammet når select-boksen til tresortene endres
    // getChart();
}

function lagOption(liste, select) {
    let val = 0;
    liste.forEach(element => {
        let opt = document.createElement('option');
        opt.innerText = element;
        opt.value = val;
        val++;
        select.appendChild(opt);
    });
}

function rengUtOkning() {
    if (selectFraAar.value >= selectTilAar.value) {
        divResultat.innerHTML = 'Kan ikke regne med valgte verdier, se over valgte verdier.'
    } else {
        let okning = treData[selectTre.value][selectTilAar.value] - treData[selectTre.value][selectFraAar.value];
        let okningPros = Math.floor((okning / treData[selectTre.value][selectFraAar.value]) * 10000) / 100;
        divResultat.innerHTML = `For ${tresort[selectTre.value].toLowerCase()} er økningen ${okning} millioner trær, eller ${okningPros}%. `
    }
}