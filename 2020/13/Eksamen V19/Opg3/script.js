let hytter = ['Gjendesheim', 'Glitterheim', 'Memurubu', 'Gjendebu', 'Leirvassbu', 'Spiterstulen', 'Olavsbu']; // liste med hyttenavn
let startetTur;
let hytterValg;
let totAvstand = 0;
let valgteHytter = [];
// elementer fra HTML dokumentet
const selectHytte = document.querySelector('#select-start-hytte');
const divHytter = document.querySelector('#div-hytter');
const divValgtRute = document.querySelector('#div-valgt-rute');
const divTotAvstand = document.querySelector('#div-totavstand');
const knappLeggTilRute = document.querySelector('#button-legg-til-rute');
// data for hyttene
let hytterData = [
    [0, 22, 14, 0, 0, 0, 0], // Gjendesheim
    [22, 0, 18, 0, 0, 17, 0], // Glitterheim
    [14, 18, 0, 10, 0, 0, 0], // Memurubu
    [0, 0, 10, 0, 19, 24, 26], // Gjendebu
    [0, 0, 0, 19, 0, 15, 11], // Leirvassbu
    [0, 17, 0, 24, 15, 0, 0], // Spiterstulen
    [0, 0, 0, 16, 11, 0, 0]  // Olavsbu 
];

// Når siden laster 
window.onload = () => {
    lagOption(hytter, selectHytte); // lager option-tagger for hver av hyttene
    nyRute();
    document.querySelector('#button-tom-rute').onclick = nyRute;
}

// Når starthytten endres
selectHytte.onchange = () => {nyRute()}

function nyRute() {
    startetTur = false;
    totAvstand = 0;
    valgteHytter = [hytter.indexOf(selectHytte.value)]; // putter starthytta i lista med valgte hytter 
    tilNesteHytte(valgteHytter[0]);
    // Når en hytte blir lagt til i ruten
    knappLeggTilRute.onclick = leggTilRute; // lytter til knappen "Legg til i rute"
}

// funksjon for knappen "Legg til i rute"
function leggTilRute() { 
    hytterValg.forEach(element => {
        if (element.checked) {
            index = element.id;
            valgteHytter.push(index); // legger til hyttene som velges i en liste
            avstand = hytterData[valgteHytter[valgteHytter.length-2]][index]; // finner avstanden mellom hyttene
            totAvstand += avstand; // legger til avstanden i totalavstanden
            divValgtRute.innerHTML += hytter[element.id] + `, ${avstand} km<br>`; // legger til hyttene som blir valgt i diven
            tilNesteHytte(index);
        } 
        });
    }

// funksjon for å legge til nye hytter
function tilNesteHytte(hytte) {
    let startHytte = hytte;
    let nesteHytte = "";
    divHytter.innerHTML = "";
    divTotAvstand.innerHTML = totAvstand + " km"; // legger til totalavstanden i diven
    if (!startetTur) { // hvis turen ikke har startet startes en ny tur
        divValgtRute.innerHTML = hytter[startHytte] + ", 0 km<br>";
        startetTur = true;
    }
    for (i = 0; i < hytterData[startHytte].length; i++) { // legger til radio-knapper for hver hytte som kan gås til
        if (hytterData[startHytte][i]) {
            nesteHytte += `<input type="radio" id="${i}" name="hytte">` + hytter[i] + "<br>";
        }
        divHytter.innerHTML = nesteHytte;
        hytterValg = document.querySelectorAll('input[name="hytte"]'); // henter alle knappene som ble lagd og putter de i en liste
    }
}

// funksjon for å lage option-tagger gitt en liste og en select-tag
function lagOption(liste, select) { 
    liste.forEach(element => {
        let opt = document.createElement('option');
        opt.innerText = element;
        select.appendChild(opt);
    });
}