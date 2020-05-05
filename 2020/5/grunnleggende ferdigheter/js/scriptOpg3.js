const res_Prove1 = [1, 4, 2, 6, 5, 2, 5, 2, 5, 2];
const res_Prove2 = [1, 2, 2, 5, 3, 3, 4, 4, 5, 4];
const res_Eksamen = [2, 4, 1, 2, 4, 3, 4, 3, 5, 4];
const divOppg3 = document.querySelector('#div-oppg3');
const antElever = res_Eksamen.length;
let bedre = 0;
let darligere = 0;
let likt = 0;

for (i = 0; i < antElever; i++) {
    if ((res_Prove1[i] + res_Prove2[i]) / 2 == res_Eksamen[i]) {
        likt++;
    } else if ((res_Prove1[i] + res_Prove2[i]) / 2 < res_Eksamen[i]) {
        bedre++
    } else if ((res_Prove1[i] + res_Prove2[i]) / 2 > res_Eksamen[i]) {
        darligere++
    }
}

divOppg3.innerHTML = `<u>Likt:</u> ${likt}<br><u>Bedre:</u> ${bedre}<br><u>Dårligere:</u> ${darligere}`