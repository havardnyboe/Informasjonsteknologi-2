const divOppg1 = document.querySelector('#div-oppg1');
let bokstaver = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

for (i = 0; i < bokstaver.length; i++) {
    let antBokstaver = i + 1;
    divOppg1.innerHTML += `${antBokstaver}:`
    for (j = 0; j < antBokstaver; j++) {
        divOppg1.innerHTML += bokstaver[i]
    }
    divOppg1.innerHTML += "<br>"
}