window.onload = oppstart;

function oppstart() {
    document.getElementById("knapp1").onclick = trekkTreNavn;
    document.getElementById("knapp2").onclick = leggTilIListe;
    document.getElementById("knapp3").onclick = fjernSiste;
}

// OPPGAVE 3 //

let div1 = document.getElementById("div1");
let listeNavn = ["Hans","Ole","Nils","Olav","Per","Knut","Kari","Line","Pia","Even"];

function skrivUtListe() {
    document.getElementById("div2").innerHTML = ""
    for (i=0; i<listeNavn.length; i++) {
        document.getElementById("div2").innerHTML += listeNavn[i]+"<br>"    
    }
}
skrivUtListe()

// funksjonen som trekker tre tilfeldige navn //
function trekkTreNavn() {
    let listeRandNavn = [];
    let kjorGanger = document.getElementById("nummerBoks1").value;
    if (kjorGanger > listeNavn.length) {
        alert("Kan ikke trekke flere navn enn det er i listen!")
    } else {
        div1.innerHTML = "";
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
            div1.innerHTML += listeRandNavn[navn] + "<br>";
        }
    }
}

function leggTilIListe() {
    let nyVerdi = document.getElementById("teksBoks1").value;
    if (nyVerdi != "") {
        listeNavn.push(nyVerdi);
    }
    document.getElementById("teksBoks1").value = "";
    skrivUtListe();
}

function fjernSiste() {
    listeNavn.pop();
    skrivUtListe();
}