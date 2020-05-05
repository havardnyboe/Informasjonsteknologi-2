window.onload = oppstart;

const arrayOppgave1 = [];
let div1 = document.getElementById("div1");
const listeMaxVerdi = 50;

for (i=0; i<15; i++) {
    listeVerdi = Math.floor(Math.random()*100)-listeMaxVerdi;
    arrayOppgave1.push(Number(listeVerdi));
}

function oppstart () {
    document.getElementById("knapp1").onclick = visListe;
    document.getElementById("knapp2").onclick = summerListe;
    document.getElementById("knapp3").onclick = visNegativ;
    document.getElementById("knapp4").onclick = regnSnitt;
    document.getElementById("knapp5").onclick = visMinsteTall;
    document.getElementById("knapp6").onclick = summerPartall;
    document.getElementById("knapp7").onclick = trekkTreNavn;
}

// OPPAGVE 1 //

function visListe() {
    let listeOppg1 = "";
    for (i=0; i<arrayOppgave1.length; i++) {
        listeOppg1 += arrayOppgave1[i] + ", ";
    }
    div1.innerHTML = listeOppg1 + "<br><br>";
}

function summerListe() {
    let sumListe = 0;
    for (i=0; i<arrayOppgave1.length; i++) {
        sumListe += arrayOppgave1[i];
    }
    div1.innerHTML = sumListe + "<br><br>";
}

function visNegativ() {
    div1.innerHTML = "";
    for (i=0; i<arrayOppgave1.length; i++) {
        if (arrayOppgave1[i] < 0) {
            div1.innerHTML += arrayOppgave1[i] + ", ";
        }
    }
    div1.innerHTML += "<br><br>";
}

function regnSnitt() {
    let sumListe = 0;
    for (i=0; i<arrayOppgave1.length; i++) {
        sumListe += arrayOppgave1[i];
    }
    let snitt = sumListe/arrayOppgave1.length;
    snitt = Math.round(snitt*100)/100
    div1.innerHTML = snitt + "<br><br>";
}

function visMinsteTall() {
    let minsteTall = listeMaxVerdi;
    for (i=0; i<arrayOppgave1.length; i++) {
        if (arrayOppgave1[i]<minsteTall) {
            minsteTall = arrayOppgave1[i];
        }
    }
    div1.innerHTML = minsteTall + "<br><br>";
}

function summerPartall() {
    let sumListe = 0;
    for (i=0; i<arrayOppgave1.length; i++) {
        if (arrayOppgave1[i] % 2 == 0) {
            sumListe += arrayOppgave1[i];
        }
    }
    div1.innerHTML = sumListe + "<br><br>";
}

// OPPGAVE 3 //

let div2 = document.getElementById("div2");
let listeNavn = ["Hans","Ole","Nils","Olav","Per","Knut","Kari","Line","Pia","Even"];

// funksjonen som trekker tre tilfeldige navn //
function trekkTreNavn() {
    let kjorGanger = 3;
    let listeRandNavn = [];
    div2.innerHTML = "<br>";
    for (i=0; i<kjorGanger; i++) {
        let randTall = Math.floor(Math.random()*listeNavn.length); // lager et tilfeldig tall mellom første og siste element i lista
        let randNavn = listeNavn[randTall];
        if (listeRandNavn.includes(randNavn)) {
            kjorGanger++;
        } else {
            listeRandNavn.push(randNavn);
        }
    }
    for (navn in listeRandNavn) {
    div2.innerHTML += listeRandNavn[navn] + "<br>";
    }
}

// OPPGAVE 4 //

let alfabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

let listeBokstaver = ['B','C','G','I','K','O','Q','S','T','Z']

for (i=0; i<alfabet.length; i++) {
    if (listeBokstaver.includes(alfabet[i])) {
        continue
    } else {
        document.getElementById("div3").innerHTML += (alfabet[i]) + ", ";
    }
}