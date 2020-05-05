let muskelgrupper = ['Armer', 'Skuldre', 'Ben', 'Rygg', 'Bryst'];
let ovelser = [
    ['Bicepscurl med stang', 'Fransk press'], // Armer
    ['Stående militærpress', 'Sidehev'], // Skuldre
    ['Knebøy', 'Leg extention', 'Leg curl'], // Ben
    ['Nedtrekk', 'Roing'], // Rygg
    ['Benkpress', 'Flies', 'Push up'] // Bryst
];
let selectMuskelgruppe = document.querySelector('#select-muskelgruppe');
let divRadio = document.querySelector('#input-radio-bokser');
let divValgteOvelser = document.querySelector('#div-valgte-ovelser');
let divTabell = document.querySelector('#div-tabell');
let valgtMuskelruppe;
let ovelserRadioKnapper;

window.onload = () => {
    lagOption(muskelgrupper, selectMuskelgruppe);
    radioKnapper();
    lagTabell(muskelgrupper, divTabell, muskelgrupper.length, 2);
}

selectMuskelgruppe.onchange = () => {
    radioKnapper();
}

divRadio.onchange = () => {
    visValgteOvelser();
}

function radioKnapper() {
    valgtMuskelruppe = muskelgrupper.indexOf(selectMuskelgruppe.value);
    lagRadio(ovelser[valgtMuskelruppe], divRadio);
    ovelserRadioKnapper = document.querySelectorAll('input[type=radio]');
}

function visValgteOvelser() {
    divValgteOvelser.innerHTML = `<br><br><b>Ditt treningsprogram:</b><br>Muskelgruppe: ${selectMuskelgruppe.value}<br>Øvelse: ${finnOvelse()}`;
}

function finnOvelse() {
    ovelserRadioKnapper.forEach(element => {
        if (element.checked) a = element.id;
    });
    return a;
}

function lagOption(liste, select) {
    liste.forEach(element => {
        let opt = document.createElement('option');
        opt.innerText = element;
        select.appendChild(opt);
    });
    // lager en option-tag for hvert element i en valgt liste og putter de inn i en select-tag
}

function lagRadio(liste, div) {
    div.innerHTML = '';
    for (i = 0; i < liste.length; i++) {
        let elm = document.createElement('input');
        let span = document.createElement('span');
        elm.type = elm.name = 'radio';
        elm.id = span.innerHTML = liste[i];
        div.appendChild(elm);
        div.appendChild(span);
        div.innerHTML += '<br>';
    }
    // lager en checkbox og en "nametag" for hvert element i en valgt liste, og putter de i en valgt div
}

function lagTabell(liste, div, rad, kol) {
    let tbl = document.createElement('table');
    tbl.style.width = '200px';
    tbl.style.border = '1px solid black';

    for (i = 0; i < rad; i++) {
        let tr = tbl.insertRow();
        for (j = 0; j < kol; j++) {
            let td = tr.insertCell();
            td.style.border = '1px solid black';
            td.appendChild(document.createTextNode(liste[i]))
        }
    }
    div.appendChild(tbl);
    // if (table) {
    //     div.removeChild(tbl);
    // }
    // table = true
}