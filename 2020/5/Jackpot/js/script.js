const odometer1 = document.querySelector('#div-odometer1');
const odometer2 = document.querySelector('#div-odometer2');
const odometer3 = document.querySelector('#div-odometer3');
const divPott = document.querySelector('#div-pott');
const divVunnet = document.querySelector('#div-vunnet');
const divAntForsok = document.querySelector('#div-ant-forsok');
const jackpottall = [10, 20, 40, 80, 200, 400, 800, 1000];
let trekktall1, trekktall2, trekktall3;
let premiepott = 50000;
let totVunnet = 0;
let antForsok = 0;

window.onload = () => {
    document.querySelector('#button-trekk-tall').onclick = trekkTall;
    $('#button-trekk-tall');
    oppdaterDiv();
}

function getRandomTall() {
    return Math.floor(Math.random() * jackpottall.length);
}

function oppdaterDiv() {
    divPott.innerHTML = `Premiepott: ${premiepott} kr`;
    divVunnet.innerHTML = `Har vunnet: ${totVunnet} kr`;
    divAntForsok.innerHTML = `Antall forsøk: ${antForsok}`;
}

function trekkTall() {
    antForsok++;
    oppdaterDiv();
    odometer1.innerHTML = 0;
    odometer2.innerHTML = 0;
    odometer3.innerHTML = 0;
    trekktall1 = jackpottall[getRandomTall()];
    trekktall2 = jackpottall[getRandomTall()];
    trekktall3 = jackpottall[getRandomTall()];
    setTimeout(() => {
        odometer1.innerHTML = trekktall1
    }, 1000)
    setTimeout(() => {
        odometer2.innerHTML = trekktall2
    }, 2000)
    setTimeout(() => {
        odometer3.innerHTML = trekktall3
    }, 3000)
    if (trekktall1 == trekktall2 && trekktall2 == trekktall3) {
        setTimeout(() => {
            makeItRain()
            alert(`Gratulerer du vant Jackpotten på ${premiepott} kr! Spill igjen for å vinne enda mer!`)
            totVunnet += premiepott;
            premiepott = premiepott * 1.5;
            oppdaterDiv();
        }, 5000);

    } else {
        setTimeout(() => {
            alert('Du vant desverre ikke denne gangen. Spill igjen for å øke dinne vinnesjanser!')
        }, 5000);

    }
}