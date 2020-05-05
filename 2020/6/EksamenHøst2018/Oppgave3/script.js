let ferier = ["Jul", "Vinter", "Påske"]

let utleid = [
    ["utleid", "utleid", "ledig"],
    ["ledig", "ledig", "utleid"],
    ["utleid", "ledig", "utleid"],
    ["utleid", "ledig", "utleid"]
]

let hytter = [
    ["Granstua", 4, "Høy", "Ja", 12000, "/img/granstua.jpg"],
    ["Granbo", 6, "Middels", "Nei", 15000, "/img/granbo.jpg"],
    ["Grantoppen", 8, "Lav", "Nei", 16000, "/img/grantoppen.jpg"],
    ["Granhaug", 10, "Høy", "Ja", 30000, "/img/granhaug.jpg"]
]

const divBooking = document.querySelector('#div-booking')
const selectFerier = document.querySelector('#select-ferier')

window.onload = () => {
    lagOption(ferier, selectFerier)
    finnLedigeHytter();
    selectFerier.onchange = () => {
        finnLedigeHytter();
    }
}


function lagOption(liste, select) {
    liste.forEach(element => {
        let opt = document.createElement('option');
        opt.innerText = element;
        select.appendChild(opt);
    });
}

function finnLedigeHytter() {
    let valgtFerie = ferier.indexOf(selectFerier.value)
    let ledigeHytter = "";
    divBooking.innerHTML = "";
    for (i = 0; i < utleid.length; i++) {
        if (utleid[i][valgtFerie] == "ledig") {
            ledigeHytter += `<input type="checkbox" class="ledighytte">` + hytter[i][0] + "<br>";
        }
        divBooking.innerHTML = ledigeHytter;
    }
}