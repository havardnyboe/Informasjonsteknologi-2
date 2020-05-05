window.onload = oppstart;

function oppstart() {
	
	document.getElementById("bensin").onclick = regnUtBensin;
	document.getElementById("diesel").onclick = regnUtDiesel;
}

function regnUtBensin() {

	let resultat = document.getElementById("divResultat");
	let drivstoff = document.getElementById("nummerBoks1").value;
	let pris = 16.4;

	if (drivstoff < 0 || drivstoff > 100) {
		alert("Antall liter drivstoff kan ikke være midre enn 0 eller større enn 100")
	} else {
		totPris = drivstoff*pris;
		console.log(totPris);
		resultat.innerHTML = `Prisen for bensin er:<br>${Math.round(totPris*100)/100} kr`;
	}
}

function regnUtDiesel() {

	let resultat = document.getElementById("divResultat");
	let drivstoff = document.getElementById("nummerBoks1").value;
	let pris = 15.3;

	if (drivstoff < 0 || drivstoff > 100) {
		alert("Antall liter drivstoff kan ikke være midre enn 0 eller større enn 100")
	} else {
		totPris = drivstoff*pris;
		console.log(totPris);
		resultat.innerHTML = `Prisen for diesel er:<br>${Math.round(totPris*100)/100} kr`;
	}
}