function generellMva() {
    let inputTall = document.getElementById("tekstboks1").value; //deklarerer en variabel som henter ut verdien til teksboksen
    let pros25 = Number(inputTall) * 0.25; //deklarerer en variabel som finner Mvaen i kr
    let medMva = Number(inputTall) + Number(pros25); //deklarerer en variabel som finner beløpet + Mva
    document.getElementById("div1").innerHTML = medMva.toFixed(2) + " kr"; //skriver ut beløpet med mva rundet av til 2 desimaler
    document.getElementById("div2").innerHTML = Number(inputTall).toFixed(2) + " kr"; //skriver ut beløpet uten mva rundet av til 2 desimaler
    document.getElementById("div3").innerHTML = pros25.toFixed(2) + " kr"; //skriver ut mva i kroner rundet av til 2 desimaler
    document.getElementById("div4").innerHTML = "25%"; //skriver ut mva i prosent
}

function matMva(){
    let inputTall = document.getElementById("tekstboks1").value; //deklarerer en variabel som henter ut verdien til teksboksen
    let pros15 = Number(inputTall) * 0.15; //deklarerer en variabel som finner Mvaen i kr
    let medMva = Number(inputTall) + Number(pros15); //deklarerer en variabel som finner beløpet + Mva
    document.getElementById("div1").innerHTML = medMva.toFixed(2) + " kr"; //skriver ut beløpet med mva rundet av til 2 desimaler
    document.getElementById("div2").innerHTML = Number(inputTall).toFixed(2) + " kr"; //skriver ut beløpet uten mva rundet av til 2 desimaler
    document.getElementById("div3").innerHTML = pros15.toFixed(2) + " kr"; //skriver ut mva i kroner rundet av til 2 desimaler
    document.getElementById("div4").innerHTML = "15%"; //skriver ut mva i prosent
}

function transportMva(){
    let inputTall = document.getElementById("tekstboks1").value; //deklarerer en variabel som henter ut verdien til teksboksen
    let pros8 = Number(inputTall) * 0.08; //deklarerer en variabel som finner Mvaen i kr
    let medMva = Number(inputTall) + Number(pros8); //deklarerer en variabel som finner beløpet + Mva
    document.getElementById("div1").innerHTML = medMva.toFixed(2) + " kr"; //skriver ut beløpet med mva rundet av til 2 desimaler
    document.getElementById("div2").innerHTML = Number(inputTall).toFixed(2) + " kr"; //skriver ut beløpet uten mva rundet av til 2 desimaler
    document.getElementById("div3").innerHTML = pros8.toFixed(2) + " kr"; //skriver ut mva i kroner rundet av til 2 desimaler
    document.getElementById("div4").innerHTML = "8%"; //skriver ut mva i prosent
}

function validate(evt) {
    let theEvent = evt || window.event;
  
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    let regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }