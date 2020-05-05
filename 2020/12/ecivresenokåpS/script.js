function beregn() {

	// henter elementene fra HTML-dokumentet 
	var mannValg = document.getElementById("mann").checked;
	var kvinneValg = document.getElementById("kvinne").checked;
	var alderVar = document.getElementById("alder").value;
	var hoydeVar = document.getElementById("hoyde").value;
	var magiskTall=0; 
	
	if(mannValg){ // regner ut spådommen til menn
		magiskTall = alderVar * alderVar - hoydeVar;
	}
	else if (kvinneValg){ // regner ut spådommen til kvinner
		magiskTall = alderVar * hoydeVar - 3;
	}
	else 
		console.log("Du må velge kjønn!");

	if (magiskTall%2==0){ // hvis det magiske tallet er et partall
			document.getElementById("utTekst").innerHTML = "Det vil gå deg godt her i verden... For at spådommen skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345"
		}
	else
			document.getElementById("utTekst").innerHTML = "Stakkars deg! Alt kommer til å gå deg galt... For at spådommen ikke skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345"
		
}
