
window.onload = oppstart;

function oppstart() {
	document.getElementById("knapp1").onclick = regnUt;
}

function regnUt() {
	const strekning = document.getElementById("nummerBox1").value;
	const antPersoner = document.getElementById("nummerBox2").value;
	let resultat = document.getElementById("divResultat");
	if (antPersoner <= 0) {
		resultat.innerHTML = `<br>Antall personer kan ikke være mindre enn eller lik null`
	if (antPersoner%1 != 0) {
		resultat.innerHTML = `<br>Antall passasjerer kan ikke være et desimaltall`;
	} else {
		let totCO2 = strekning*150;
		let co2PerPers = totCO2/antPersoner;
		console.log(`totCO2${totCO2}`);
		console.log(`co2PerPers${co2PerPers}`);
		resultat.innerHTML = `<br>Totoal utslipp av CO2: <br>${totCO2.toFixed(2)} gram <br><br>Utslipp per passasjer: <br>${co2PerPers.toFixed(2)} gram.`;
	}
	}
}