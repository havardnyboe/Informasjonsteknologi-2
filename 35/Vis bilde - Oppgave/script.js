document.getElementById("html").onclick = htmlBilde; //Henter knappen html, og gir den funksjonen htmlBilde når den blir trykket på
document.getElementById("css").onclick = cssBilde; //Henter knappen css, og gir den funskjonen cssBilde når den blir trykket på
document.getElementById("js").onclick = jsBilde; //Henter knappen js, og gir den funksjonen jsBilde når den blir trykket på


function htmlBilde(){
    document.getElementById("minDiv").innerHTML = "<img src='bilde1.png' alt='html'></img>"; //funksjonen setter bildet bilde1.png i div-taggen
}

function cssBilde(){
    document.getElementById("minDiv").innerHTML = "<img src='bilde2.png' alt='css'></img>"; //funksjonen setter bildet bilde2.png i div-taggen
}

function jsBilde(){
    document.getElementById("minDiv").innerHTML = "<img src='bilde3.jpg' alt='javascript'></img>" //funksjonen setter bildet bilde3.jpg i div-taggen
}