const selectModell = document.querySelector('#select-modell');
const selectType = document.querySelector('#select-type');
const divPakke = document.querySelector('#pakke');
const divPris = document.querySelector('#div-pris');
let bilModellerNavn = ["Kuga", "C-max", "Focus", "Mondeo"];
let bilModellerType = ["Trend", "Titanium"];
let bilModellerPakke = ["Familiepakke", "Førerassistent", "Stilpakke"];
let bilModellerTypePriser = [
    [401000, 420000], // Kuga
    [320000, 335000], // C-max
    [255000, 325000], // Focus
    [281000, 361000] // Mondeo
];
let bilModellerPakkePriser = [
    [1000, 10200, 9200], // Kuga
    [1000, 9400, 3600], // C-max
    [900, 12500, 9000], // Focus
    [1100, 9900, 7200] // Mondeo
];

window.onload = () => {
    lagOption(bilModellerNavn, selectModell); // lager dropdown til bilmodellene
    lagOption(bilModellerType, selectType); // lager dropdown til biltypene
    lagCheckbox(bilModellerPakke, divPakke); // lager checkbox til pakkene
    finnPris(); // finner prisen
}

selectModell.onchange = selectType.onchange = divPakke.onclick = () => {
    finnPris();
    // finner prisen når brukeren endrer på noen av valgene
}

function finnPris() {
    let modellIndex = bilModellerNavn.indexOf(selectModell.value); // finner index-en til den valgte modellen
    let typeIndex = bilModellerType.indexOf(selectType.value); // finner index-en til den valgte biltypen
    let pakkePris = 0;
    let pakkeListe = divPakke.querySelectorAll('input'); // lager en liste med alle checkbox-ene
    for (i = 0; i < pakkeListe.length; i++) {
        if (pakkeListe[i].checked) {
            pakkePris += bilModellerPakkePriser[modellIndex][i];
            // hvis pakken er huket av blir prisen lagt til i 'pakkePris'
        }
    }
    let bilPris = bilModellerTypePriser[modellIndex][typeIndex]; // finner prisen på bilen brukeren har valgt
    divPris.innerHTML = `${bilPris+pakkePris} kr`; // regner ut totalpris
}

function lagOption(liste, select) {
    liste.forEach(element => {
        let opt = document.createElement('option');
        opt.innerText = element;
        select.appendChild(opt);
    });
    // lager en option-tag for hvert element i en valgt liste og putter de inn i en select-tag
}

function lagCheckbox(liste, div) {
    div.innerHTML = '';
    for (i = 0; i < liste.length; i++) {
        let e = document.createElement('input');
        let s = document.createElement('span');
        e.type = 'checkbox';
        e.id = s.innerHTML = liste[i];
        div.appendChild(e);
        div.appendChild(s);
        div.innerHTML += '<br>';
    }
    // lager en checkbox og en "nametag" for hvert element i en valgt liste, og putter de i en valgt div
}