let inputPassord;
let table = false
let passordListe = ["Passord001", "Passord002", "Passord003", "Passord004", "Passord005", "Passord006", "Passord007", "Passord008", "Passord009", "Passord010"];
let partierNavn = ["Rødt", "Sosialistisk Venstreparti", "Arbeiderpartiet", "Senterpartiet", "Miljøpartiet De Grønne", "Kristelig Folkeparti", "Venstre", "Høyre", "Fremskrittspartiet", "Piratpartiet"]
let partierStemmer = new Array(partierNavn.length).fill(0)
const divInnhold = document.querySelector('#div-innhold')
const divTable = document.querySelector('#table')


window.onload = () => {
    loggInnSide();
}

function loggInn() {
    divTable.innerHTML = "<br><br>"
    inputPassord = document.querySelector('#input-passord')
    let feil = true;
    for (i = 0; i < passordListe.length; i++) {
        if (feil) {
            feil = true
        }
        if (inputPassord.value == passordListe[i]) {
            feil = false;
            passordListe.splice(i, 1)
            divInnhold.innerHTML = divPartivalg
        }
    };
    if (feil) {
        alert('Passordet du skrev inn er feil, prøv igjen')
    }
}

function stem() {
    let partier = document.querySelectorAll('input[name="partivalg"]')
    for (i = 0; i < partier.length; i++) {
        if (partier[i].checked) {
            if (confirm(`Du har stemt på ${partierNavn[i]} vil du bekrefte dette valget?`)) {
                partierStemmer[i]++
                loggInnSide();
            }
        }
    }

}

function loggInnSide() {
    table = false
    divInnhold.innerHTML = divInnlogging;
    document.querySelector('#button-logg-inn').onclick = loggInn;
}

function tableCreate() {
    let tbl = document.createElement('table');
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
            td.appendChild(document.createTextNode(tellStemmer(i) + "%"))
        }
    }
    divTable.appendChild(tbl);
    if (table) {
        divTable.removeChild(tbl);
    }
    table = true
}

function tellStemmer(index) {
    let sum = 0;
    partierStemmer.forEach(element => {
        sum += element
    });
    return Math.round(partierStemmer[index] / sum * 10000) / 100
}