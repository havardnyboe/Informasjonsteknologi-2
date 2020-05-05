window.onload = oppstart;

let gangetabell = [[],[],[],[],[],[],[],[],[],[],[]]; // lager en liste med 11 tomme lister
let resultat = document.getElementById("resultat");

// legger til verdiene fra gangetabellene i de tomme listene
for (i=0;i<=10;i++) {gangetabell[0].push(0)} // 0 gangen
for (i=0;i<=10;i++) {gangetabell[1].push(i)} // 1 gangen
for (i=0;i<=20;i+=2) {gangetabell[2].push(i)} // 2 gangen
for (i=0;i<=30;i+=3) {gangetabell[3].push(i)} // 3 gangen
for (i=0;i<=40;i+=4) {gangetabell[4].push(i)} // 4 gangen
for (i=0;i<=50;i+=5) {gangetabell[5].push(i)} // 5 gangen
for (i=0;i<=60;i+=6) {gangetabell[6].push(i)} // 6 gangen
for (i=0;i<=70;i+=7) {gangetabell[7].push(i)} // 7 gangen
for (i=0;i<=80;i+=8) {gangetabell[8].push(i)} // 8 gangen
for (i=0;i<=90;i+=9) {gangetabell[9].push(i)} // 9 gangen
for (i=0;i<=100;i+=10) {gangetabell[10].push(i)} // 10 gangen

function oppstart() {
    document.getElementById("regnUt").onclick = regnUt;
}

function regnUt() {
    let select1 = document.getElementById("select1");
    let kolonne = select1.options[select1.selectedIndex].value; // henter verdien fra valget til brukeren i den første menyen
    let select2 = document.getElementById("select2");
    let rad = select2.options[select2.selectedIndex].value; // henter verdien fra valget til brukeren i den andre menyen
    let produkt = gangetabell[kolonne][rad]; // finner riktig løsning i tabellen med kolonne og rad
    resultat.value = produkt; // skriver ut ril tekstboksen 
}