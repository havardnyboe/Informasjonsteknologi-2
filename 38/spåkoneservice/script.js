window.onload = oppstart

// deklarer HTML elementene til variabler
let navn = document.getElementById("txtBoxNavn");
let alder = document.getElementById("txtBoxAlder");
let hoyde = document.getElementById("txtBoxHoyde");
let mann = document.getElementById("mann");
let kvinne = document.getElementById("kvinne");
let divResultat = document.getElementById("divResultat");
let valgBox = document.getElementById("valgBox");
let valgVerdi;

// lytter til Send inn knappen 
function oppstart() {
	valgBox.onchange = valgBoxValue;
}

function valgBoxValue() {
	valgVerdi = valgBox.value;
	console.log(valgVerdi);
	document.getElementById("sendInn").onclick = spadom;
	
} valgBoxValue();


// funksjonen som skal kjøre når man trykker på knappen
function spadom() {
	// spådom til mann
	if (valgVerdi == "mann") {
		console.log("Mann");
		let spadom = Number(alder.value)*(Number(alder.value)) - Number(hoyde.value);
		console.log(spadom%2);
		if (hoyde.value >0 && alder.value >0) {
			if (spadom%2 == 0) {
				divResultat.innerHTML = "Det vil gå deg godt her i verden, " + navn.value + "! For at spådommen skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345";
			} else if (spadom%2 == 1) {
				divResultat.innerHTML = "Stakkars deg, " + navn.value + "! Alt kommer til å gå deg galt... For at spådommen ikke skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345";
			}
		} else if ((hoyde.value < 0) || (alder.value < 0) || (hoyde.value%2 > 0 && hoyde.value%2 < 1) || (alder.value%2 > 0 && alder.value%2 < 1)) {
			divResultat.innerHTML = "Du skrev inn noe ugyldig, prøv igjen";
		}
	// spådom til kvinne
	} else if (valgVerdi == "kvinne") {
		console.log("Kvinne");
		let spadom = alder.value*hoyde.value-3;
		console.log(spadom%2)
		if (hoyde.value >0 && alder.value >0) {
			if (spadom%2 == 0 ) {
				divResultat.innerHTML = "Det vil gå deg godt her i verden, " + navn.value + "! For at spådommen skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345";
			} else if (spadom%2 == 1) {
				divResultat.innerHTML = "Stakkars deg, " + navn.value + "! Alt kommer til å gå deg galt... For at spådommen ikke skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345";
			}
		} else if (hoyde.value < 0 || alder.value < 0 || hoyde.value%2 != 0 || hoyde.value%2 != 1 || alder.value%2 != 0 || alder.value%2 != 1) {
			divResultat.innerHTML = "Du skrev inn noe ugyldig, prøv igjen";
		}

	// hvis det mangler en input
	} else {
		divResultat.innerHTML = "Skriv inn navn, alder, høyde og kjønn";
	}

	// nullstilling av inputfeltene når man trykker på knappen
	navn.value = "";
	alder.value = "";
	hoyde.value = "";
}

