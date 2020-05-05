window.onload = oppstart

let boks = document.getElementById("boks");
let knapp1 = document.getElementById("knapp1");
let knapp2 = document.getElementById("knapp2");
let knapp3 = document.getElementById("knapp3");
let knapp4 = document.getElementById("knapp4");

function oppstart() {
    knapp1.onclick = start;
    knapp2.onclick = stopp;
    knapp3.onclick = storre;
    knapp4.onclick = mindre;
}
function start() {
    TweenMax.to('#boks', 2, {rotation:'+=360', repeat:-1, ease:Linear.easeNone})};

function stopp() {
    TweenMax.to(boks, 1, {rotation:'+=0',y:'+=0', ease:Quad.easeOut})
}

function storre() {
    TweenMax.to(boks, 1, {scale:'+=0.5', ease: "circ.out"})
}

function mindre() {
    TweenMax.to(boks, 1, {scale:1, ease: "circ.out"})
}