let divBilde = document.getElementById("bilde");
let divSpm = document.getElementById("spm");
let divResultat = document.getElementById("resultat");
let divKnapper = document.getElementById("knapper");
let knapp1 = document.getElementById("knapp1");
let knapp2 = document.getElementById("knapp2");
let knapp3 = document.getElementById("knapp3");
const spm1 = "Hva heter mannen som spiller denne karakteren?";
const bildeSpm1 = "fleksnes.jpg";
const spm2 = "Hva het Nintendo's første spillkonsoll?";
const bildeSpm2 = "nintendo.png";
const spm3 = undefined;
const spm4 = undefined;

lagSpm(spm1, bildeSpm1, "Marve Fleksnes", "Rolv Wesenlund", "Rolf Vesenlund", "feil", "riktig", "feil");

function lagSpm(spm, bilde, svarAlt1, svarAlt2, svarAlt3, valAlt1, valAlt2, valAlt3) {
    console.log("laget")
    divSpm.innerHTML = '<br>'+spm;
    divBilde.innerHTML = '<img src="'+bilde+'" width="400px">';
    knapp1.innerHTML = svarAlt1;
    knapp1.value = valAlt1;
    console.log(knapp1.innerHTML)
    knapp2.innerHTML = svarAlt2;
    knapp2.value = valAlt2;
    console.log(knapp2.innerHTML)
    knapp3.innerHTML = svarAlt3;
    knapp3.value = valAlt3;
    console.log(knapp3.innerHTML)

    knapp1.onclick = sjekkKnapp1;
    knapp2.onclick = sjekkKnapp2;
    knapp3.onclick = sjekkKnapp3;
}

function sjekkKnapp1() {
    if (knapp1.value == "riktig") {
        divResultat.innerHTML = "Riktig!"
        neste()
    } 
    if (knapp1.value == "feil") {
        divResultat.innerHTML = "Feil!"
        neste()
    }
}

function sjekkKnapp2() {
    if (knapp2.value == "riktig") {
        divResultat.innerHTML = "Riktig!"
        neste()
    } 
    if (knapp2.value == "feil") {
        divResultat.innerHTML = "Feil!"
        neste()
    }
}

function sjekkKnapp3() {
    if (knapp3.value == "riktig") {
        divResultat.innerHTML = "Riktig!"
        neste()
    } 
    if (knapp3.value == "feil") {
        divResultat.innerHTML = "Feil!"
        neste()
    }
}

function neste() {
    divKnapper.innerHTML = '<button id="neste">Neste Spørsmål</button>'
    document.getElementById("neste").onclick = nesteSpm;
}

function nesteSpm() {
    divResultat = "<br>";
    lagSpm(spm2, bildeSpm2, "Color TV-Game", "Game Watch", "NES", "riktig", "feil", "feil")
    divKnapper.innerHTML = '<button id="knapp1"></button> <button id="knapp2"></button> <button id="knapp3"></button>';
}