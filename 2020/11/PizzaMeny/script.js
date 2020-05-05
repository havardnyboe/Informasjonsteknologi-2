let meny = [];
let pizzaNavn = [];
let selectPizza = document.querySelector('#select-pizza');
let divBestilling = document.querySelector('#div-bestilling');
let bestilling = [
    ["Navn", "Uten MVA", "Med MVA"]
];

class Pizza {
    constructor(navn, ingr, pris) {
        this.navn = navn;
        this.ingredienser = ingr;
        this.pris = pris;
        this.leggTilMeny = () => {
            meny.push(this);
        }
        this.leggTilMeny();
    }
    utenMVA() {
        return this.pris - (this.pris * 0.25)
    }
}

window.onload = () => {
    meny.forEach(element => {
        pizzaNavn.push(element.navn);
    });
    lagOption(pizzaNavn, selectPizza);
    document.querySelector('#button-bestill').onclick = bestill;
    for (i = 0; i < meny.length; i++) {
        console.log(meny[i].navn);
        console.log(meny[i].ingredienser);
        console.log(meny[i].pris)
    }
}

function bestill() {
    divBestilling.innerHTML = '';
    let valgtPizza = meny[selectPizza.selectedIndex];
    bestilling.push([valgtPizza.navn, valgtPizza.utenMVA(), valgtPizza.pris])
    lagTabell(bestilling, divBestilling, bestilling.length, bestilling[0].length)
}

function lagOption(liste, select) {
    liste.forEach(element => {
        let opt = document.createElement('option');
        opt.innerText = element;
        select.appendChild(opt);
    });
    // lager en option-tag for hvert element i en valgt liste og putter de inn i en select-tag
}

function lagTabell(liste, div, rad, kol) {
    let tbl = document.createElement('table');
    tbl.style.width = '350px';

    for (i = 0; i < rad; i++) {
        let tr = tbl.insertRow();
        for (j = 0; j < kol; j++) {
            let td = tr.insertCell();
            td.appendChild(document.createTextNode(liste[i][j]))
        }
    }
    div.appendChild(tbl);
}