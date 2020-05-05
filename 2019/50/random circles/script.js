let innhold = document.getElementById('innhold');
let totAntSirkler = 85;
let antSirkler = 0;

function getRandomColor() {
    let tegn = '0123456789ABCDEF';
    let farge = '#';
    for (i = 0; i < 6; i++) {
      farge += tegn[Math.floor(Math.random() * 16)]; // velger 6 tilfleldige tegn fra lista og lager de til en hex-kode
    }
    return farge;
  }

function tegnSirkel() {
    let div = document.createElement('div'); // lager et div element
    div.style.width = div.style.height = Math.floor((Math.random())*250)+20 + 'px'; // gir den en tilfeldig radius (bredde og høyde)
    div.style.left = Math.floor((Math.random())*105)-5 + '%'; // gir en tilfeldig x-posisjon
    div.style.top = Math.floor((Math.random())*105)-5 + '%';// gir en tilfeldig y-posisjon
    div.style.backgroundColor = getRandomColor(); // genererer en tilfeldig farge
    document.body.appendChild(div).classList.add('sirkel'); // legger den til i dokumentet og gi den klassen 'sirkel'
}

for (let i=1; i<Number(totAntSirkler)+1; i++) { // lager et x-antal sirkler
    setTimeout( function () { // lager en delay på når sirklene vises
        tegnSirkel();
        antSirkler++;
        console.log(antSirkler)
        if (antSirkler == totAntSirkler) {location.reload();} // looper programmet
    }, i*100 );
}
