window.onload = function (){
    document.getElementById('knappTeller').onclick = addTeller;}


let teller = 0;

function addTeller() {
    teller++;
    document.getElementById('teller').innerHTML = teller;
    if (teller >= 20) {document.getElementById('paprika').style.visibility = 'visible'}
}