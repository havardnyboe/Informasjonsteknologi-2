window.onload = oppstart;

// lytter til knappen "Kjør"
function oppstart() {
	document.getElementById("knappKjoer1").onclick = kjoer1;
	document.getElementById("knappKjoer2").onclick = kjoer2;
}

// løkke som logger annenhvert tall fra 0-100 i konsollen når brukeren trykker på knappen
function kjoer1() {
	document.getElementById("div1").innerHTML = "Åpne konsollen!"
	console.clear();
	for (i = 0; i <= 100; i += 2) {
		console.log(i);
	}
}

// en funksjon som endrer startverdien til en løkke som teller fra x-100
function kjoer2() {
	console.clear();
	let startverdi = document.getElementById("nummerBoks1");
	
	if (startverdi.value <=100 && startverdi.value >= 0) {
		for (i = Number(startverdi.value); i <= 100; i += 2) {
			console.log(i);
		}
	}

	if (startverdi.value > 100) {
		alert("Startverdien kan ikke overstige 100, skriv inn et lavere tall");

	}

	if (startverdi.value < 0) {
		alert("Startverdien kan ikke være mindre enn 0, skriv inn et høyere tall");
	}
}