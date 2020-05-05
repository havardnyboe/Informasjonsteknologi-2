let txtBox = document.getElementById("txtBoxOutput");

function plussEn() {
	txtBox.value++;
}

function minusEn() {
	txtBox.value--;
}

function plussFem() {
	let resultat = Number(txtBox.value) + 5;
	txtBox.value = resultat.toFixed(2);
}

function minusFem() {
	let resultat = Number(txtBox.value) - 5;
	txtBox.value = resultat.toFixed(2);
}

function deleTo() {
	let resultat = Number(txtBox.value) / 2;
	txtBox.value = resultat.toFixed(2);
}

function reset() {
	txtBox.value = "";
}