window.onload = oppstart;

// deklarerer og tilordner variabler
const tall1 = document.getElementById("nummerBox1");
const tall2 = document.getElementById("nummerBox2");
const div1 = document.getElementById("div1");
const div2a = document.getElementById("div2a");
const div2b = document.getElementById("div2b");
const div2c = document.getElementById("div2c");
const div2d = document.getElementById("div2d");

// lytter til knapp 1
function oppstart() {
	document.getElementById("knapp1").onclick = sammenlikn;
}

// funksjonen som sammenlikner tallene
function sammenlikn() {
	if (tall1.value == tall2.value && tall1.value%2 == 0 && tall2.value%2 == 0) {
		div1.innerHTML = "Tallene er like og de er deleige med 2";
	} else if (tall1.value > tall2.value) {
		div1.innerHTML = "Tall 1 er størst";
	} else if (tall1.value < tall2.value) {
		div1.innerHTML = "Tall 2 er størst";
	} else if (tall1.value == tall2.value) {
		div1.innerHTML = "Tallene er like";
	} 
}

// løkker oppgave 2 a-d
for (i=1; i<=10; i++) {
	div2a.innerHTML += i + ", ";
}

for (i=10; i>=1; i--) {
	div2b.innerHTML += i + ", ";
}

for (i=1; i<=50; i+=2) {
	div2c.innerHTML += i + ", ";
}

for (i=1; i<=100; i++) {
	if (i%7==0) {
		div2d.innerHTML += i + ", ";
	}
}