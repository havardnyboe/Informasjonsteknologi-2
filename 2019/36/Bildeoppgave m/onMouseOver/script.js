/*window.onload = oppstart;

function oppstart() {
	document.getElementById("bilde1").onmouseover = bildeBytt;
	document.getElementById("bilde1").onmouseout = bildeFjern;
}*/

function bildeBytt() {
	document.getElementById("div1").innerHTML = "<img src='fleksnes2.jpg' alt='Fleksnes' width='500px'>";

}

function bildeFjern() {
	document.getElementById("div1").innerHTML = "";
}