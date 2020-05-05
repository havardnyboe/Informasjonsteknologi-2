window.onload = oppstart;

function oppstart() {
	document.getElementById("knappRegnUt").onclick = regnUt;
}

function regnUt() {
	let divResultat = document.getElementById("divResultat");
	let antallPakker = document.getElementById("antallPakker").value;
	antallPakker = Math.round(antallPakker)
	// console.log(`antallPakker${antallPakker}`);
	let totalpris = antallPakker * 99;
	totalpris = Math.round(totalpris*10)/10
	// console.log(`totpris${totalpris}`)

	if (antallPakker < 0) {
		divResultat.innerHTML = `Kan ikke kjøpe et negativt antall pakker, prøv igjen`;
	}
	
	else {

		if (antallPakker < 10) {
			divResultat.innerHTML = `Total kostnad for ${antallPakker} pakker: <br>$${totalpris.toFixed(2)}<br><br>Rabatt: <br>0% <br><br>Rabatt i $: <br>$0`
		}

		if (antallPakker >= 10 && antallPakker <= 19) {
			let rabatt = totalpris * 0.1;
			totalpris = totalpris - rabatt;
			divResultat.innerHTML = `Total kostnad for ${antallPakker} pakker: <br>$${totalpris.toFixed(2)}<br><br>Rabatt: <br>10% <br><br>Rabatt i $: <br>$${rabatt.toFixed(2)}`
		}

		if (antallPakker >= 20 && antallPakker <= 49) {
			let rabatt = totalpris * 0.2;
			totalpris = totalpris - rabatt;
			divResultat.innerHTML = `Total kostnad for ${antallPakker} pakker: <br>$${totalpris.toFixed(2)}<br><br>Rabatt: <br>20% <br><br>Rabatt i $: <br>$${rabatt.toFixed(2)}`
		}

		if (antallPakker >= 50 && antallPakker <= 99) {
			let rabatt = totalpris * 0.3;
			totalpris = totalpris - rabatt;
			divResultat.innerHTML = `Total kostnad for ${antallPakker} pakker: <br>$${totalpris.toFixed(2)}<br><br>Rabatt: <br>30% <br><br>Rabatt i $: <br>$${rabatt.toFixed(2)}`
		}

		if (antallPakker >= 100) {
			let rabatt = totalpris * 0.4;
			totalpris = totalpris - rabatt;
			divResultat.innerHTML = `Total kostnad for ${antallPakker} pakker: <br>$${totalpris.toFixed(2)}<br><br>Rabatt: <br>40% <br><br>Rabatt i $: <br>$${rabatt.toFixed(2)}`
		}
	}
}