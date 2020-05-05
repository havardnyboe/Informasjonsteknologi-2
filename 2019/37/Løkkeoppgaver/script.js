// Deklarerer variabler til tekstboksene
let penger = document.getElementById("txtBox1");
let antAar = document.getElementById("txtBox2");
let renter = document.getElementById("txtBox3");
let fraNummer = document.getElementById("txtBox4");
let tilNummer = document.getElementById("txtBox5");

// Deklarerer variabler til div-elementene
let div4 = document.getElementById("div4");
let div3 = document.getElementById("div3");

// funksjonen som regner ut pengene i banken
function regnUt() {
	let totPenger = penger.value; 
	for (i=1; i<=antAar.value; i++) {
		let renterPenger = (renter.value/100) * totPenger;
			totPenger = Number(totPenger) + renterPenger;
			div3.innerHTML += "Etter " + i + " år har du " + (totPenger.toFixed(2)) + " kr"	+ '<br>';
		}
}

function regnUtKnapp() {
	if (div3.innerHTML == "") {
		regnUt();
	} else {
	div3.innerHTML = "";
	regnUt();
	}
}

// funksjonen som viser bildene fra 1 - 10
function visBilde(){
	for (i=1; i<=10; i++) {
		if (i==fraNummer.value) {
			for (j=i; j<=tilNummer.value; j++) {
			div4.innerHTML += '<img src="fleksnes' + j + '.jpg" alt="Fleksnes" width="400px">';
			}
		}
	}
}

function visBildeKnapp() {
	if (fraNummer.value>0) {
		div4.innerHTML = "";
		if (div4.innerHTML = "") {
			visBilde();
		} else {
			div4.innerHTML = "";
			visBilde();
		}
	} if (tilNummer.value>10) {
		div4.innerHTML = "Til-nummer er for høyt, prøv igjen";
	} if (fraNummer.value<0 || tilNummer.value<0) {
		div4.innerHTML = "Skriv inn et positivt tall";
	} if (fraNummer.value == "" || tilNummer.value == "" || fraNummer.value == 0 || tilNummer.value == 0) {
		div4.innerHTML = "Skriv inn tall mellom 1 og 10";
	} if (fraNummer.value > tilNummer.value) {
		div4.innerHTML = "Fra-nummeret kan ikke være større en til-nummeret";
	} if (fraNummer.value > 10 || tilNummer.value > 10) {
		div4.innerHTML = "Verdien kan ikke overstige 10";
	}
}

// løkken som skriver ut alle tosifrede kombinasjoner av tallene 1, 2, 3, 4 og 5 
for (i=1; i<=5; i++) {
	document.getElementById("div1").innerHTML += '<br>';
	for (j=1; j<=5; j++) {
		document.getElementById("div1").innerHTML += (String(i)+String(j)) + " ";
	}
}

// løkken som skriver ut alle tresifrede kombinasjoner av tallene 1, 2, 3, 4 og 5 
for (i=1; i<=5; i++) {
	for (j=1; j<=5; j++) {
		for (k=1; k<=5; k++) {
			document.getElementById("div2").innerHTML = "Åpne konsollen";
			console.log(String(i)+String(j)+String(k));
		}
	}
}

// lytter som gjør at man kan trykke på enter i renter-tekstboksen
renter.addEventListener("keyup", function enter(event) {
	if (event.keyCode === 13) {
	   event.preventDefault();
	   document.getElementById("knapp1").click();
	}
});
