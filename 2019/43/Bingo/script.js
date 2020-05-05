window.onload = oppstart;

// deklarerer variablene for scriptet
let bingo = [];
let bingoListe = [];
let bingoTall;
let divBingo = document.getElementById("bingoTall");
let divBingoListe = document.getElementById("bingoTallListe");

// lager en liste med 'bingokuler' fra 1 - 75
for (i=1; i<=75; i++) {
    bingo.push(i);
}
function oppstart() {
    document.getElementById("trekkTall").onclick = trekkTall;
}

function trekkTall() {
    trekkTall = Math.floor(Math.random()*bingo.length); // trekker et tilfeldig tall mellom 0 og 74
    bingoTall = bingo[trekkTall]; // tilordner 'bingoTall' verdien til tallet som ble trukket fra listen
    bingo.splice(trekkTall, 1); // fjerner 'bingokulen' fra listen
    bingoListe.push(bingoTall); // putter 'bingokulen' i en ny liste
    if (bingoTall != undefined) { // skriver bare ut når tallet har en verdi
        divBingo.innerHTML = bingoTall;
        divBingoListe.innerHTML = ``;
        for (i=0; i<bingoListe.length; i++) {
            divBingoListe.innerHTML += `${bingoListe[i]}, `;
            if (i%13==0 && i!=0){divBingoListe.innerHTML+=`<br>`} // bryter linjen for hvert 13. tall
        }
    } else {
        divBingo.innerHTML = `<a href="index.html">Kjør igjen</a>`
    }

}