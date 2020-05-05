let valgResultater2013 = [3.7, 5.9, 20.3, 4.2, 3.8, 2.8, 6.7, 28.2, 15.6, 4.3]

let partierNavn = ["Borgerlig blokk", "Rød-Grønn blokk", "Differanse", "Andre"]
let borgerligBlokk = [5, 6, 7, 8] // velger index-en til partiene i den borgerlige blokken
let rodGronnBlokk = [1, 2, 3] // velger index-en til partiene i den rød-grønne blokken
let andre = [0, 4, 9]

window.onload = () => {
    getChart();
    tableCreate();
}

function regnUtBlokk(blokk, resultater) {
    let sum = 0;
    blokk.forEach(element => {
        sum += resultater[element]
    });
    return sum
}

function finnDifferanse() {
    let liste = []
    let differanse = 0
    let borgerligBlokkVerdi = regnUtBlokk(borgerligBlokk, valgResultater2013)
    let rodGronnBlokkVerdi = regnUtBlokk(rodGronnBlokk, valgResultater2013)
    if (borgerligBlokkVerdi > rodGronnBlokkVerdi) {
        differanse = borgerligBlokkVerdi - rodGronnBlokkVerdi
    } else {
        differanse = rodGronnBlokkVerdi - borgerligBlokkVerdi
    }
    liste[0] = borgerligBlokkVerdi
    liste[1] = rodGronnBlokkVerdi
    liste[2] = differanse
    liste[3] = andre

    return liste
}

function tableCreate() {
    let liste = finnDifferanse();
    let tbl = document.createElement('table'),
        body = document.getElementsByTagName('body');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';

    for (i = 0; i < partierNavn.length; i++) {
        let tr = tbl.insertRow();
        let td = tr.insertCell();
        td.style.border = '1px solid black';
        td.appendChild(document.createTextNode(partierNavn[i]));
        for (j = 0; j < 1; j++) {
            td = tr.insertCell();
            td.style.border = '1px solid black';
            td.appendChild(liste[i] + "%");
        }
    }
    body.appendChild(tbl);
}