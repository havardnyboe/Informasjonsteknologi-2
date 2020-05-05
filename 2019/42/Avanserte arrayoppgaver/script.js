window.onload = oppstart;

function oppstart() {
}

// OPPGAVE 3 //

let div2 = document.getElementById("div2");
let listeNavn = ["Hans","Ole","Nils","Olav","Per","Knut","Kari","Line","Pia","Even"];

// funksjonen som trekker tre tilfeldige navn //
function trekkTreNavn() {
    let kjorGanger = 3
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