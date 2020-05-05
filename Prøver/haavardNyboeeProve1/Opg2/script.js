window.onload = oppstart;

// lytter til knappen "Regn ut"
function oppstart() {
	document.getElementById("knapp1").onclick = regnUt;
}

// funksjonen som regner ut BMR og Energiforbruk
function regnUt() {
	let vekt = document.getElementById("nummerBoks1");
	let stille = document.getElementById("stille");
	let gaa = document.getElementById("gaa");
	let resultat = document.getElementById("divResultat");
	let bmr = 35.27 + (0.558*vekt.value);
	// gir en feilmelding hvis vekten er negativ
	if (vekt.value < 0) {
		alert("Vekten kan ikke være mindre enn 0, skriv inn et høyere tall");
		resultat.innerHTML = "";
	} else {
		// sjekker om aktiviteten "Sitte stille" er huket av
		if (stille.checked) {
			energiforbruk = bmr * 1.2
			resultat.innerHTML = `BMR-verdien er: <br>${bmr.toFixed(2)}<br><br>Energiforbruket for aktiviten "Sitte stille" er:<br>${energiforbruk.toFixed(2)}`;
		}
		// sjekker om aktiviteten "Gå en tur" er huket av
		if (gaa.checked) {
			energiforbruk = bmr * 1.4
			resultat.innerHTML = `BMR-verdien er: <br>${bmr.toFixed(2)}<br><br>Energiforbruket for aktiviten "Gå en tur" er:<br>${energiforbruk.toFixed(2)}`;
		}
	}
}