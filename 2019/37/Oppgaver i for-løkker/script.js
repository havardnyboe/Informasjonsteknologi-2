let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let div5 = document.getElementById("div5");
let div6 = document.getElementById("div6");


for (let i=0; i<5; i++) {
	div1.innerHTML = div1.innerHTML + "*";
}

for (let i=0; i<5; i++) {
	div2.innerHTML = div2.innerHTML + "*";
if (i==4) {
	div2.innerHTML = div2.innerHTML+'<br>';
	for (let i=0; i<5; i++) {
	div2.innerHTML = div2.innerHTML + "*";
if (i==4) {
	div2.innerHTML = div2.innerHTML+'<br>';
	for (let i=0; i<5; i++) {
	div2.innerHTML = div2.innerHTML + "*";
if (i==4) {
	div2.innerHTML = div2.innerHTML+'<br>';
	for (let i=0; i<5; i++) {
	div2.innerHTML = div2.innerHTML + "*";
}}}}}}}

for (let i=0; i<1; i++) {
	div3.innerHTML = div3.innerHTML + "*";
if (i==0) {
	div3.innerHTML = div3.innerHTML+'<br>';
	for (let i=0; i<2; i++) {
	div3.innerHTML = div3.innerHTML + "*";
if (i==1) {
	div3.innerHTML = div3.innerHTML+'<br>';
	for (let i=0; i<3; i++) {
	div3.innerHTML = div3.innerHTML + "*";
if (i==2) {
	div3.innerHTML = div3.innerHTML+'<br>';
	for (let i=0; i<4; i++) {
	div3.innerHTML = div3.innerHTML + "*";
if (i==3) {
	div3.innerHTML = div3.innerHTML+'<br>';
	for (let i=0; i<5; i++) {
	div3.innerHTML = div3.innerHTML + "*";
}}}}}}}}}

for (let i=0; i<5; i++) {
	div4.innerHTML = div4.innerHTML + "*";
if (i==4) {
	div4.innerHTML = div4.innerHTML+'<br>';
	for (let i=0; i<4; i++) {
	div4.innerHTML = div4.innerHTML + "*";
if (i==3) {
	div4.innerHTML = div4.innerHTML+'<br>';
	for (let i=0; i<3; i++) {
	div4.innerHTML = div4.innerHTML + "*";
if (i==2) {
	div4.innerHTML = div4.innerHTML+'<br>';
	for (let i=0; i<2; i++) {
	div4.innerHTML = div4.innerHTML + "*";
if (i==1) {
	div4.innerHTML = div4.innerHTML+'<br>';
	for (let i=0; i<1; i++) {
	div4.innerHTML = div4.innerHTML + "*";
}}}}}}}}}

for (let i=0; i<5; i++) {
	div6.innerHTML = div6.innerHTML + "*";
if (i==4) {
	div6.innerHTML = div6.innerHTML+'<br>';
	for (let i=0; i<1; i++) {
	div6.innerHTML = div6.innerHTML + "*";
if (i==0) {
	div6.innerHTML = div6.innerHTML+'<br>';
	for (let i=0; i<3; i++) {
	div6.innerHTML = div6.innerHTML + "*";
if (i==2) {
	div6.innerHTML = div6.innerHTML+'<br>';
	for (let i=0; i<1; i++) {
	div6.innerHTML = div6.innerHTML + "*";
if (i==0) {
	div6.innerHTML = div6.innerHTML+'<br>';
	for (let i=0; i<5; i++) {
	div6.innerHTML = div6.innerHTML + "*";
}}}}}}}}}

function skrivUt0_100() {
	console.clear();
	div5.innerHTML = "Åpne konsollen";
	for(let i=0; i<=100; i++) {
		console.log(i);
	}
}

function skrivUtPartall() {
	console.clear();
	for (i=0; i<=100; i++) {
		if (i%2==0)
		console.log(i);
	}
}

function skrivUtOddetall() {
	console.clear();
	for (i=0; i<=100; i++) {
		if (i%2==1)
		console.log(i);
	}
}

function skrivUtDele5() {
	console.clear();
	for (i=0; i<=100; i++) {
		if (i%5==0)
		console.log(i);
	}
}

function skrivUtPartallDele5() {
	console.clear();
	for (i=0; i<=100; i++) {
		if (i%5==0 && i%2==0)
		console.log(i)
	}
}