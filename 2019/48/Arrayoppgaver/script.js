window.onload = opptart;

let listeOppg1 = [34,53,2,3,34,26,26,85,3,4,98,2,12];
let listeOppg2 = [4,5,2,3,4,6,1,2,0,9,7,6,8,5,6,4,2,3,4,7,3];

function opptart() {
    document.getElementById("skrivUt").onclick = skrivUtListe;
    document.getElementById("sum").onclick = sumListe;
    document.getElementById("negTall").onclick = negTallListe;
    document.getElementById("snitt").onclick = snittListe;
    document.getElementById("minTall").onclick = minTallListe;
    document.getElementById("sumPartall").onclick = sumPartallListe;
    document.getElementById("oppg2").onclick = oppgave2a;
}

function skrivUtListe() {
    console.clear();
    listeOppg1.forEach(element => {
        console.log(element);
    });;
}

function sumListe() {
    let sum = 0;
    listeOppg1.forEach(element => {
        sum += element;
    });
    console.clear();
    console.log(`Summen av lista er ${sum}`)
}

function negTallListe() {
    let antNeg = 0
    listeOppg1.forEach(element => {
        if (element < 0) {antNeg++}
        console.clear();
        console.log(`Det er ${antNeg} negative tall`)
    });
}

function snittListe() {
    let sum = 0;
    let snitt = 0;
    listeOppg1.forEach(element => {
        sum += element;
    });
    snitt = sum / listeOppg1.length
    console.clear();
    console.log(`Gjennomsnittet av lista er ${snitt.toFixed(2)}`);
}

function minTallListe() {
    let minTall;
    listeOppg1.forEach(element => {
        if (minTall == undefined) {minTall = element}
        if (minTall > element) {minTall = element}
    });
    console.clear();
    console.log(`Det minste tallet er ${minTall}`)
}

function sumPartallListe() {
    let sum = 0;
    listeOppg1.forEach(element => {
        if (element%2 == 0) {sum += element};
    });
    console.clear();
    console.log(`Summen var partallene er ${sum}`)
}

function oppgave2a() {
    let teller = 0;
    let tall = {}
    listeOppg2.sort();
    for (i=0; i<=listeOppg2[listeOppg2.length-1]; i++) {
        tall[String(i)] = {antall: 0};
    }
    listeOppg2.forEach(element => {
        if (element !== teller) {teller++};
        if (element == teller) {tall[element].antall++}
    });
    console.log(tall)

    let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text:"Oversikt over tall"},
        axisX:{
            interval: 1
        },
        axisY2:{
            interlacedColor: "rgba(80,80,80,.2)",
            gridColor: "rgba(80,80,80,.1)",
        },
        data: [{
            type: "bar",
            name: "tall",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: [
                { y: tall["0"].antall, label: "0", color: "rgb(220,20,60)"},
                { y: tall["1"].antall, label: "1", color: "rgb(0,102,204)"},
                { y: tall["2"].antall, label: "2", color: "rgb(220,20,60)"},
                { y: tall["3"].antall, label: "3", color: "rgb(0,102,204)" },
                { y: tall["4"].antall, label: "4", color: "rgb(220,20,60)"},
                { y: tall["5"].antall, label: "5", color: "rgb(0,102,204)" },
                { y: tall["6"].antall, label: "6", color: "rgb(220,20,60)"},
                { y: tall["7"].antall, label: "7", color: "rgb(0,102,204)" },
                { y: tall["8"].antall, label: "8", color: "rgb(220,20,60)"},
                { y: tall["9"].antall, label: "9", color: "rgb(0,102,204)" },
                ]
        }]
    });
    chart.render();
}