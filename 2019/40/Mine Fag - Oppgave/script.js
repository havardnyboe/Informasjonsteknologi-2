window.onload = oppstart;

// oppstartsfunksjon som lytter til knappene og tilordner de funksjoner når de blir trykkt på, 
// og traverserer lista med skolefag ved oppstart
function oppstart() {
	document.getElementById("knappPutt").onclick = puttIListe;
	document.getElementById("knappFjern").onclick = fjernFraListe;
	document.getElementById("knappReverser").onclick = reverserListe;
	document.getElementById("knappSorter").onclick = sorterListe;
	document.getElementById("div1").innerHTML = "";
	for (i=0; i<fagListe.length; i++) {
		document.getElementById("div1").innerHTML += `${fagListe[i]} <br>`;	
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

for (i in fagListe) {
	let option = document.createElement("option");
	option.innerHTML = fagListe[i];
	document.getElementById("select").appendChild(option);
}

// traverserer lista 'fagListe'
function skrivUtListe() {
	document.getElementById("div1").innerHTML = "";
	for (i=0; i<fagListe.length; i++) {
		document.getElementById("div1").innerHTML += `${fagListe[i]} <br>`;	
	}
}

// traverserer lista 'fagListe' i omvendt rekkefølge
function reverserListe() {
	fagListe.reverse();
	skrivUtListe();
}

// traverserer lista 'fagListe' i alfabetisk rekkefølge
function sorterListe() {
	fagListe.sort();
	skrivUtListe();
}

// legger til et nytt element i lista og traverserer lista
function puttIListe() {
	let nyVerdi = document.getElementById("teksBoks1").value;
	if (nyVerdi != '') {
		fagListe.push(nyVerdi);
	} else {
		alert("Du må skrive inn en verdi");
	}
	document.getElementById("teksBoks1").value = '';
	skrivUtListe();
}
// fjerner det siste elementet i lista og traverserer lista
function fjernFraListe() {
	fagListe.pop();
	skrivUtListe();
}
