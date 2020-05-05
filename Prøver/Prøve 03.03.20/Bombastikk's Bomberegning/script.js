let bomData = [
    ['P3587', 17, 'EV13875', 'Kia', 'EL', false],
    ['P3588', 17, 'LS80000', 'Mercedes', 'LB', true],
    ['P3589', 18, 'PD50041', 'Citroen', 'PB', true],
    ['P4678', 22, 'LS69501', 'Volkswagen', 'PB', false],
    ['P3588', 22, 'LS80000', 'Mercedes', 'LB', true],
    ['P4680', 23, 'EB17888', 'Tesla', 'EL', false]
]; // Arrayen med data fra bommringen

let divAntPasseringer = document.querySelector('#div-antpasseringer');
let inputRegNummer = document.querySelector('#input-regnummer');
let divVisPasseringer = document.querySelector('#div-vispasseringer');
let timeKol = 1 // setter kolonnen med time til 1
let regNrKol = 2 // setter kolonnen med registreringsnummere til 2
let bilTypeKol = 4 // setter kolonnen med biltype til 4
let brikkeKol = 5 // setter kolonnen med brykke til 5

window.onload = () => {
    document.querySelector('#button-antpasseringer').onclick = visAntPasseringer; // lytter til knappen 'antall passeringer'
    document.querySelector('#button-vispasseringer').onclick = visPasseringer; // lytter til knappen 'vis passeringer'
}

function visAntPasseringer() {
    divVisPasseringer.innerHTML = ''; // tømmer diven
    divAntPasseringer.innerHTML = bomData.length; // skriver ut totalt antall passeringer til en div
    bomData.forEach(element => { // skriver ut hvert element i lista til diven
        divVisPasseringer.innerHTML += element + '<br><br>'
    });
}

function visPasseringer() {
    divVisPasseringer.innerHTML = ''; // tømmer diven
    for (i = 0; i < bomData.length; i++) { // itterer gjennom lista med data
        if (inputRegNummer.value == bomData[i][regNrKol]) { // sjekker kun om den er lik kolonnen med reg.nummer i tabellen for å hindre å vise feil data
            divVisPasseringer.innerHTML += bomData[i] + '<br>' + 'Pris: ' + regnUtPris(bomData[i]) + 'kr<br><br>';
        }
    }
}

function regnUtPris(bilListe) {
    let pris = 0
    if (bilListe[bilTypeKol] == 'EL') {
        return pris // returnerer prisen hvis det er en el-bil
    } else {
        if (bilListe[bilTypeKol] == 'PB') { // legger til 27kr på PB
            pris += 27;
        }
        if (bilListe[bilTypeKol] == 'LB') { // legger til 52kr på LB
            pris += 52;
        }
        if (bilListe[timeKol] == 7 || (bilListe[timeKol] > 15 && bilListe[timeKol] < 17)) { // sjekker om bilen har passert i rushtiden
            pris += 10; // legger til 10 kr
        }
        if (bilListe[brikkeKol]) { // gir rabatt hvis bilen har brikke
            pris = pris - (pris * 0.15)
        }
        return pris // returnerer prisen
    }
}