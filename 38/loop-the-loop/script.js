let = div5 = document.getElementById("div5");
let = div7 = document.getElementById("div7");

for (i=1; i<=99; i++) {
	document.getElementById("div1").innerHTML += i + ", ";
}

for (i=99; i>=1; i--) {
	document.getElementById("div2").innerHTML += i + ", ";
}

for (i=2; i<=99; i+=2) {
	document.getElementById("div3").innerHTML += i + ", ";
}

for (i=1; i<=100; i++) {
	document.getElementById("div4").innerHTML += i*i + ", ";
}

for (i=5; i<=100; i+=5) {
	document.getElementById("div4a").innerHTML += i + ", ";
}

for (i=0; i>=(-100); i-=5) {
	document.getElementById("div4b").innerHTML += i + ", ";
}

for (i=(-50); i<=50; i+=5) {
	document.getElementById("div4c").innerHTML += i + ", ";
}

for (i=1; i<=100; i+=2) {
	document.getElementById("div4d").innerHTML += i + ", ";
}

for (i=0; i<1; i++) {
div5.innerHTML += '*' + '<br>';
for (j=0; j<2; j++) {
div5.innerHTML += '*';
if (j==1) {
div5.innerHTML += '<br>'
for (k=0; k<3; k++) {
div5.innerHTML += '*';
if (k==2) {
div5.innerHTML += '<br>'
for (l=0; l<4; l++) {
div5.innerHTML += '*';
if (l==3) {
div5.innerHTML += '<br>'
for (m=0; m<5; m++) {
div5.innerHTML += '*';
if (m==4) {
div5.innerHTML += '<br>'
for (n=0; n<6; n++) {
div5.innerHTML += '*';
if (n==5) {
div5.innerHTML += '<br>'
for (o=0; o<7; o++) {
div5.innerHTML += '*';
if (o==6) {
div5.innerHTML += '<br>'
for (p=0; p<8; p++) {
div5.innerHTML += '*';
if (p==7) {
div5.innerHTML += '<br>'
for (q=0; q<9; q++) {
div5.innerHTML += '*';
if (q==8) {
div5.innerHTML += '<br>'									
}}}}}}}}}}}}}}}}}

for (i=0; i<4; i++) {
	document.getElementById("div6").innerHTML += '*';
	if (i==3) {
		document.getElementById("div6").innerHTML += '<br>' + '*' + '<br>';
		for (j=0; j<3; j++) {
			document.getElementById("div6").innerHTML += '*';
			if (j==2) {
				document.getElementById("div6").innerHTML += '<br>' + '*' + '<br>';
				for (k=0; k<4; k++) {
					document.getElementById("div6").innerHTML += '*';
				}
			}
		}
	}
}

for (i=1; i<=10; i++) {
	div7.innerHTML += '-';
	if (i==10) {
		div7.innerHTML += '<br>';
		for (j=1; j<=10; j++) {
			if (j == 5 || j == 6) {
				div7.innerHTML += '*';
			} else {
				div7.innerHTML += '-'
			}
			if (j==10) {
				div7.innerHTML += '<br>';
				for (k=1; k<=10; k++) {
					if (k == 4 || k == 5 || k == 6 || k == 7) {
						div7.innerHTML += '*';
					} else {
						div7.innerHTML += '-';
					} if (k==10) {
						div7.innerHTML += '<br>';
						for (l=1; l<=10; l++) {
							if (l == 3 || l == 4 || l == 5 || l == 6 || l == 7 || l == 8) {
								div7.innerHTML += '*';
							} else {
								div7.innerHTML += '-';
							} if (l==10) {
								div7.innerHTML += '<br>';
								for (m=1; m<=10; m++) {
									if (m == 2 || m == 3 || m == 4 || m == 5 || m == 6 || m == 7 || m == 8 || m == 9) {
										div7.innerHTML += '*';
									} else {
										div7.innerHTML += '-';
									} if (m == 10) {
										div7.innerHTML += '<br>';
										for (n=1; n<=10; n++) {
											div7.innerHTML += '*';
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}