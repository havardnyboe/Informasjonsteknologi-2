window.onload = oppstart;

let ord = ['I','T','2'];
let gjettBokstaver = document.getElementById("gjettBokstaver");
let bokstaver = document.getElementById("bokstaver");
let divPoeng = document.getElementById("poeng");
let poeng = 0

function oppstart() {
    document.getElementById("knappGjett").onclick = gjettBokstav;
}

function skrivUtListe() { // skriver ut lista i konsollen
    for (i=0; i<ord.length; i++) {
        console.log(ord[i]);
    }
}
skrivUtListe()

function gjettBokstav() {
    let brukerGjett = String(gjettBokstaver.value).toLocaleUpperCase(); // gjør det brukeren gjetter til stor bokstav
    for (i=0; i<ord.length; i++) { // traverserer listen "ord"
        if (brukerGjett == ord[i]) { // hvis det brukeren gjettet er i listen
            bokstaver.innerHTML += brukerGjett
            poeng++;
            divPoeng.innerHTML = `Poeng: <br> ${poeng}`
        } else {
            poeng--;
            divPoeng.innerHTML = `Poeng: <br> ${poeng}`
        }
    }
}
