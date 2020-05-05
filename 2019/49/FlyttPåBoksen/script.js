window.onload = oppstart

let boks = document.getElementById("boks");
let synlig = true;

function oppstart() {
    boks.onmouseover = bevegHoyre;
    boks.onmouseout = tilbake;
    boks.onclick = gjennomsiktig;
}

function bevegHoyre() {
    TweenMax.to(boks, 2, {x:700, backgroundColor: '#fe1616'})
}

function tilbake() {
    TweenMax.to(boks, 2, {x:0, backgroundColor: '#5196db'})
}

function gjennomsiktig() {
    if (synlig) {
        TweenMax.to(boks, 2, {opacity:0.3, rotation:360})
        synlig = false
    } 
    else {
        TweenMax.to(boks, 2, {opacity:1, rotation:0})
        synlig = true
    }
}