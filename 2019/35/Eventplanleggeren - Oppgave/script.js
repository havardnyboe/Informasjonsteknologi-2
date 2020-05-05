document.getElementById("knapp1").onclick = minTekst; //Henter elementet knapp1 via ID knapp1, tilordner den funksjonen minTekst når den blir trykket på
document.getElementById("knapp2").onclick = mittBilde; //Henter elementet knapp2 via ID knapp2, tilordner den funksjonen mittBilde når den blir trykket på
document.getElementById("knapp3").onclick = skrivUt1; //Henter elementet knapp3 via ID knapp3, tilordner den funksjonen skrivUt1 når den blir trykket på
document.getElementById("knapp4").onclick = skrivUt2; //Henter elementet knapp4 via ID knapp4, tilordner den funksjonen skrivUt2 når den blir trykket på

function minTekst() {
    document.getElementById("div1").innerHTML = "Du trykket på meg!"; //Deklarer funksjonen, og får den til å skrive "Du trykket på meg!" i div elementet
}

function mittBilde() {
    document.getElementById("div2").innerHTML = "<img src='bilde1.png' alt='event'></img>"; //Deklarerer funksjonen, og får den til å putte inn bilde 'bilde1.png' i div elementet
}

function skrivUt1() {
    var tekst = document.getElementById("tekstboks1").value; //Deklarer variabelen tekst til å hente ut verdien til tekstboks1

    document.getElementById("div3").innerHTML = tekst; //Får funkjonen til å skrive ut variabelen tekst i div elementet
}

function skrivUt2() {
    document.getElementById("tekstboks2").value = "Hallo!"; //Får funksjonen til å skrive ut teksten 'Hallo!' i tekstboks2
}