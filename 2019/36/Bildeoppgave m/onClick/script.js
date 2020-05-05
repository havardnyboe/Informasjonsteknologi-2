let div1 = document.getElementById("div1").innerHTML;

function bildeBytt() {
	document.getElementById("div1").innerHTML = "<img src='fleksnes2.jpg' alt='Fleksnes' width='500px'>";
	document.getElementById("div2").innerHTML = "<img src='fleksnes1.jpg' alt='Fleksnes' onclick='bildeFjern()' width='500px'>";
}

function bildeFjern() {
	document.getElementById("div1").innerHTML = "";
	document.getElementById("div2").innerHTML = "<img src='fleksnes1.jpg' alt='Fleksnes' onclick='bildeBytt()' width='500px'>";

}
