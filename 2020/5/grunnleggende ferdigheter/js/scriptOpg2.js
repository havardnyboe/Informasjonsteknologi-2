window.onload = () => {
    document.querySelector('#button-kallenavn').onclick = lagKallenavn;
}

const divOppg2 = document.querySelector('#div-oppg2');
const fornavn = document.querySelector('#fornavn');
const etternavn = document.querySelector('#etternavn');

const arr1 = {
    A: "gale",
    B: "snartenkte",
    C: "stinkende",
    D: "rykende",
    E: "ferske",
    F: "snartenkte"
};
const arr2 = {
    A: "buss",
    B: "nese",
    C: "glass",
    D: "tomat",
    E: "flaske",
    F: "skål"
};
const arr3 = {
    A: "muffins",
    B: "tastatur",
    C: "kopp",
    D: "vase",
    E: "genser",
    F: "teater"
};

function lagKallenavn() {
    let ekteFornavn = fornavn.value.charAt(0).toUpperCase() + fornavn.value.slice(1).toLowerCase(); // henter fornavnet brukeren har skrevet inn og formaterer det med stor bokstav først og små etterpå
    let ekteEtternavn = etternavn.value.charAt(0).toUpperCase() + etternavn.value.slice(1).toLowerCase(); // henter etternavnet brukeren har skrevet inn og formaterer det med stor bokstav først og små etterpå
    let kalleFornavn = arr1[fornavn.value[0].toUpperCase()];
    kalleFornavn = kalleFornavn.charAt(0).toUpperCase() + kalleFornavn.slice(1).toLowerCase(); // lager kallenavnet og formaterer det med stor bokstav først og små etterpå
    let kalleEtternavn = arr2[etternavn.value[0].toUpperCase()] + arr3[etternavn.value[etternavn.value.length - 1].toUpperCase()];
    kalleEtternavn = kalleEtternavn.charAt(0).toUpperCase() + kalleEtternavn.slice(1).toLowerCase(); // lager kallenavnet og formaterer det med stor bokstav først og små etterpå
    divOppg2.innerHTML = `<br>Velkommen ${ekteFornavn} ${ekteEtternavn}! <br> Du er herved døpt ${kalleFornavn} ${kalleEtternavn}.`
}