window.onload = () => { // en lytter til knappene på siden
    document.querySelector('.neste').onclick = nesteBilde;
    document.querySelector('.forrige').onclick = forrigeBilde;
    divBilder.innerHTML = `<img src="${bilder[0]}" width="${bildeBredde}">`;
    sjekkSettGjennom();
}

const divBilder = document.querySelector('.bilder');
const bilder = ['img/bird.jpg', 'img/ducks.jpeg', 'img/panda.jpg']; // liste med bildene 
const bildeBredde = 500
let settGjennom = new Array(bilder.length).fill(0) // liste med bildene som er sett
let bildeNr = 0;

setInterval(() => {
    nesteBilde();
}, 5000);

function nesteBilde() {
    if (bildeNr >= bilder.length - 1) {
        bildeNr = 0;
    } else {
        bildeNr++;
    }
    divBilder.innerHTML = `<img src="${bilder[bildeNr]}" width="${bildeBredde}">`;
    sjekkSettGjennom();
}

function forrigeBilde() {
    if (bildeNr <= 0) {
        bildeNr = bilder.length - 1;
    } else {
        bildeNr--;
    }
    divBilder.innerHTML = `<img src="${bilder[bildeNr]}" width="${bildeBredde}">`;
    sjekkSettGjennom();
}

function sjekkSettGjennom() {
    settGjennom[bildeNr]++;
    if (settGjennom[bildeNr] == 2) {
        alert('Du har sett dette bildet før, prøv å utvid din bildesmak.')
    }
    if (settGjennom[bildeNr] == 3) {
        alert('Dette er 3 gangen du ser på dette bildet, du liker det vist veldig godt.')
    }
    if (settGjennom[bildeNr] == 5) {
        alert('Du har nå sett på dette bildet 5 ganger, du har virkelig ikke noe bedre å finne på.')
    }
}