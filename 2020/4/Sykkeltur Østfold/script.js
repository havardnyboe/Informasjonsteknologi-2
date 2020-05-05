const byer = document.querySelectorAll('.ramme')
const byAvstander = [
    [0, 62.3, 58.8, 44.6, 33.2],
    [62.3, 0, 37.9, 65.3, 60.1],
    [58.8, 37.9, 0, 40.5, 78.5],
    [44.6, 65.3, 40.5, 0, 77.6],
    [33.2, 60.1, 78.5, 77.6, 0]
];
const navnByer = ['Askim', 'Halden', 'Fredrikstad', 'Moss', 'Ørje']
const divBesoktebyer = document.querySelector('.besokte-byer')
const divResulater = document.querySelector('.resultater')
let totAvstand = 0;
let startBy = byer.length + 1;

window.onload = () => {
    byer.forEach(element => {
        element.onclick = () => {
            beregnAvstand(element.id)
        }
    });
    document.querySelector('.knapp-reset').onclick = reset;
    divBesoktebyer.innerHTML = `<center>Besøkte byer:</center>`;
    divResulater.innerHTML = `<center>Total Avstand og tid:</center> 0 km <br> 0 timer`;
}

function beregnAvstand(by) {
    if (by == startBy) {
        alert('Kan ikke velge samme by to ganger')
    } else {
        if (startBy == byer.length + 1) {
            startBy = by
        }
        totAvstand += byAvstander[startBy][by]
        totAvstand = (Math.round(totAvstand * 100)) / 100;
        tid = totAvstand / 20
        tid = (Math.round(tid * 10)) / 10
        divBesoktebyer.innerHTML += `${navnByer[by]} <br>`;
        divResulater.innerHTML = `<center>Total Avstand og tid:</center> ${totAvstand} km <br> ${tid} timer <br>`;
        startBy = by
    }
}

function reset() {
    startBy = byer.length + 1;
    totAvstand = 0;
    tid = 0;
    divBesoktebyer.innerHTML = `<center>Besøkte byer:</center>`;
    divResulater.innerHTML = `<center>Total Avstand og tid:</center> 0 km <br> 0 timer`;
}