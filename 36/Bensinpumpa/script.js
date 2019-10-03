function prisBensin() {
    let inputTxt = document.getElementById("txtBoxInput").value;
    let div1 = document.getElementById("div1");

    if (inputTxt > 80) {
        div1.innerHTML = "Antall liter er for stort!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (inputTxt == 5) {
        div1.innerHTML = "Vi selger ikke så små kvanta bensin!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (inputTxt == 4) {
        div1.innerHTML = "Vi selger ikke så små kvanta bensin!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (inputTxt == 3) {
        div1.innerHTML = "Vi selger ikke så små kvanta bensin!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (inputTxt == 2) {
        div1.innerHTML = "Vi selger ikke så små kvanta bensin!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (inputTxt == 1) {
        div1.innerHTML = "Vi selger ikke så små kvanta bensin!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (inputTxt == 0) {
        div1.innerHTML = "Vi selger ikke så små kvanta bensin!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (inputTxt < 0) {
        div1.innerHTML = "Vi tar ikke bensin i retur!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (isNaN(inputTxt)) {
        div1.innerHTML = "Skriv inn et tall!";
        document.getElementById("txtBoxOutput").value = "";
    } else {
        let liter = document.getElementById("txtBoxInput").value;
        let bensin = Number(liter) * 13.4;
        document.getElementById("txtBoxOutput").value = bensin.toFixed(2);
        div1.innerHTML = "";
    }
}

function prisDiesel() {
    let inputTxt = document.getElementById("txtBoxInput").value;
    
    if (inputTxt > 80) {
        document.getElementById("div1").innerHTML = "Antall liter er for stort!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (inputTxt == 5) {
        document.getElementById("div1").innerHTML = "Vi selger ikke så små kvanta diesel!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (inputTxt == 4) {
        document.getElementById("div1").innerHTML = "Vi selger ikke så små kvanta diesel!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (inputTxt == 3) {
        document.getElementById("div1").innerHTML = "Vi selger ikke så små kvanta diesel!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (inputTxt == 2) {
        document.getElementById("div1").innerHTML = "Vi selger ikke så små kvanta diesel!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (inputTxt == 1) {
        document.getElementById("div1").innerHTML = "Vi selger ikke så små kvanta diesel!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (inputTxt == 0) {
        document.getElementById("div1").innerHTML = "Vi selger ikke så små kvanta diesel!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (inputTxt < 0) {
        document.getElementById("div1").innerHTML = "Vi tar ikke diesel i retur!";
        document.getElementById("txtBoxOutput").value = "";
    } else if (isNaN(inputTxt)) {
        document.getElementById("div1").innerHTML = "Skriv inn et tall!";
        document.getElementById("txtBoxOutput").value = "";
    } else {
        let liter = document.getElementById("txtBoxInput").value;
        let diesel = Number(liter) * 12.9;
        document.getElementById("txtBoxOutput").value = diesel.toFixed(2);
        document.getElementById("div1").innerHTML = "";
    }
}

function reset() {
    document.getElementById("txtBoxInput").value = "";
    document.getElementById("txtBoxOutput").value = "";
    document.getElementById("div1").innerHTML = "";
}