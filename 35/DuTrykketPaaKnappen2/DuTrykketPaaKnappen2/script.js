
//Når vi jobber med JS vil vi helst at scriptet vente med å kjøre til nettsiden er feridg lastet.

window.onload = oppstart; //Når vinduet laster så kjør funksjonen oppstart

function oppstart(){
document.getElementById("knapp").onclick = skrivUt; //dette er en lytter som lytter på knappen med ID knapp. Når knappen blir trykket på skal funnksjonen skrivUt kjøre
}

function skrivUt(){
console.log("Dette er en test for å se om funksjonen skrivUt fungerer");
document.getElementById("minDiv").innerHTML = "Du trykket på knappen!";
}
