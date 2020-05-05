const antDager = document.querySelector('#ant-dager');
const antVoksne = document.querySelector('#ant-voksne');
const antBarn = document.querySelector('#ant-barn');
const divResultat = document.querySelector('#div-resultat');
const heiskortPrisVoksen = 200
const heiskortPrisBarn = 100
const maksPrisVoksen = 1000
const maksPrisBarn = 500
let avslagVoksen;
let avslagBarn;

window.onload = () => {
    document.querySelector('#button-beregn').onclick = beregn;
}

function beregn() {
    if (antDager.value < 8 && antDager.value > 0) {
        let totPrisVoksen = antVoksne.value * heiskortPrisVoksen * antDager.value;
        let totPrisBarn = antBarn.value * heiskortPrisBarn * antDager.value;
        if (totPrisVoksen > maksPrisVoksen) {
            avslagVoksen = maksPrisVoksen - totPrisVoksen;
            totPrisVoksen += avslagVoksen

        } else {
            avslagVoksen = 0
        }
        if (totPrisBarn > maksPrisBarn) {
            avslagBarn = maksPrisBarn - totPrisBarn;
            totPrisBarn += avslagBarn

        } else {
            avslagBarn = 0
        }
        divResultat.innerHTML = `Totalpris for voksne: ${totPrisVoksen} kr<br>Avslag: ${Math.abs(avslagVoksen)} kr<br><br>Totalpris for barn: ${totPrisBarn} kr<br>Avslag: ${Math.abs(avslagBarn)} kr`
        console.log(antDager.value, totPrisVoksen, avslagVoksen, totPrisBarn, avslagBarn);
    } else {
        alert('Du kan ikke bestille heiskort for mer enn én uke')
    }

}