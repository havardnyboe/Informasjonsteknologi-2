window.onload = oppstart;

// oppstartsfunksjon som lytter til knappene og tilordner de funksjoner når de blir trykkt på, 
// og traverserer lista med skolefag ved oppstart
function oppstart() {
	document.getElementById("knappPutt").onclick = puttIListe;
	document.getElementById("knappFjern").onclick = fjernFraListe;
	document.getElementById("knappSkrivUt").onclick = skrivUtListe;
	document.getElementById("knappReverser").onclick = reverserListe;
	document.getElementById("knappSorter").onclick = sorterListe;
	for (i=0; i<fagListe.length; i++) {
		console.log(fagListe[i]);	
	}

}

// lista med skolefag
let fagListe = [
	"Informasjonsteknologi 2", 
	"Matematikk R1", 
	"Fysikk 1", 
	"Programmering og modellering X", 
	"Historie",
	"Norsk", 
	"Fransk 1"
]

// traverserer lista 'fagListe'
function skrivUtListe() {
	console.clear();
	for (i=0; i<fagListe.length; i++) {
		console.log(fagListe[i]);	
	}
}

// traverserer lista 'fagListe' i omvendt rekkefølge
function reverserListe() {
	console.clear();
	fagListe.reverse();
	for (i=0; i<fagListe.length; i++) {
		console.log(fagListe[i]);	
	}
}

// traverserer lista 'fagListe' i alfabetisk rekkefølge
function sorterListe() {
	console.clear();
	fagListe.sort();
	for (i=0; i<fagListe.length; i++) {
		console.log(fagListe[i]);
	}
}

// legger til et nytt element i lista og traverserer lista
function puttIListe() {
	console.clear();
	let nyVerdi = document.getElementById("teksBoks1").value;
	fagListe.push(nyVerdi);
	document.getElementById("teksBoks1").value = '';
	for (i=0; i<fagListe.length; i++) {
		console.log(fagListe[i]);
		
	}
}
// fjerner det siste elementet i lista og traverserer lista
function fjernFraListe() {
	console.clear();
	fagListe.pop();
	for (i=0; i<fagListe.length; i++) {
		console.log(fagListe[i]);
	}
}
