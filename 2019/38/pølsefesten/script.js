window.onload = oppstart;

const personer = document.getElementById("antPersoner");
const polser = document.getElementById("antPolserPerPers");
const p1 = document.getElementById("p1");
const antPakkerPolser = 10;
const totPakkerPolser;

function oppstart() {
	document.getElementById("knappRegnUt").onclick = regnUt;
}

function regnUt() {
	if (polser.value < antPakkerPolser) {
		totPakkerPolser = 1;
		console.log("pers" + personer.value)
		console.log("polserPKK" + totPakkerPolser);
	} else if (polser.value > antPakkerPolser) {
		totPakkerPolser = polser.value / antPakkerPolser;
		totPakkerPolser =  Math.ceil(totPakkerPolser);
		console.log("pers" + personer.value)
		console.log("polserPKK" + totPakkerPolser);
		divResultat.innerHTML = "Ant. pakker med pølser: <br>" + totPakkerPolser + "<br><br>Ant. pakker pølsebrød:";
	}
}
