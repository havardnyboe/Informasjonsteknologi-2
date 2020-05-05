window.onload = oppstart;

function oppstart() {
    document.getElementById("reklame").onclick = animer;
}

function animer() {
    TweenMax.fromTo('#reklame-data', 1, {left:'-200px'}, {left:'0px'}).delay(.25);
    TweenMax.fromTo('#reklame-prov-gratis', 1, {left:'496px'}, {left:'376px'}).delay(.25);
    TweenMax.fromTo('#reklame-tekst', .75, {opacity:0}, {opacity:1}).delay(1.5);
}