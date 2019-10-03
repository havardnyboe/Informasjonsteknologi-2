window.onload = oppstart;

function oppstart() {
	document.getElementById("knapp1").onclick = oppgA;
	document.getElementById("knapp2").onclick = oppgB;
}

function oppgA() {
	console.clear();
	for (i = 50; i <= 100; i++) {
		console.log(i);
	}
}

function oppgB() {
	console.clear();
	let intervallTall = document.getElementById("nummerBoks1");
	if (Number(intervallTall.value) > 5 || Number(intervallTall.value) < 1) {
		alert("Du må skrive inn et tall mellom 1 og 5")
	} else {
		if (intervallTall == "") {
			alert("Du må skrive inn et intervall");
		} else {
			for (i = 50; i <= 100; i += Number(intervallTall.value)) {
				console.log(i);
			}
		}
	}
}