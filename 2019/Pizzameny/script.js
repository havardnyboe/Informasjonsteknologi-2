window.onload = oppstart;

let selPizza = document.getElementById("pizza");
let selPizzaAnt = document.getElementById("pizzaAnt");
let selDrikke = document.getElementById("drikke");
let selDrikkeAnt = document.getElementById("drikkeAnt");
let kvittering = document.getElementById("kvittering");
let bestilling = {
    pizza: {},
    drikke: {}
};
let totPris = 0;
// lager en assosiativ array med pizzaene, og gir alle pizzaene et navn, ingredienser, og en pris
let meny = {
    margherita: {
        navn: "Margherita",
        ingredienser: ["Hvetemel", "Egg", "Vann", "Tomatsaus", "Mozzarellaost"],
        pris: 99,
        antall: 0
    },
    pepperoni: {
        navn: "Pepperoni",
        ingredienser: ["Hvetemel", "Egg", "Vann", "Tomatsaus", "Mozzarellaost", "Peperoni", "Oregano"],
        pris: 119,
        antall: 0
    },
    ostOgBacon: {
        navn: "Ost & Bacon",
        ingredienser: ["Hvetemel", "Egg", "Vann", "Tomatsaus", "Mozzarellaost", "Cheddar", "Bacon"],
        pris: 139,
        antall: 0
    },
    veganer: {
        navn: "Veganer Spesial",
        ingredienser: ["Nymalt Hvetemel", "Høyfjellsvann", "Økologisk Tomatsaus", "Nyklipt Gress", "Vegansk Ost", "Cherry Tomater"],
        pris: 139,
        antall: 0
    },
    biffOgSopp: {
        navn: "Biff & Sopp",
        ingredienser: ["Hvetemel", "Egg", "Vann", "Tomatsaus", "Mozzarellaost", "Biff av storfe", "Kantarell", "Sjampinjong"],
        pris: 129,
        antall: 0
    },
    bbqChicken: {
        navn: "BBQ Chicken",
        ingredienser: ["Hvetemel", "Egg", "Vann", "BBQ Saus", "Mozzarellaost", "Kylling"],
        pris: 139,
        antall: 0
    },
    sjokolade: {
        navn: "Sjokolade Spesial",
        ingredienser: ["Digestivekjeks", "Egg", "Vann", "Nutella", "Marshmallows", "Nonstop", "Pisket Krem"],
        pris: 139,
        antall: 0
    }
};
// lager en assosiativ array med drikkene, og gir de et navn og en pris
let drikke = {
    cocaCola: {
        navn: "Coca Cola",
        pris: 29,
        antall: 0
    },
    cocaColaZero: {
        navn: "Coca Cola Zero",
        pris: 29,
        antall: 0
    },
    pepsi: {
        navn: "Pepsi",
        pris: 29,
        antall: 0
    },
    pepsiMax: {
        navn: "Pepsi Max",
        pris: 29,
        antall: 0
    },
    fanta: {
        navn: "Fanta",
        pris: 29,
        antall: 0
    },
    sprite: {
        navn: "Sprite",
        pris: 29,
        antall: 0
    }
};

function oppstart() {
    document.getElementById("bestillPizza").onclick = bestillPizza;
    document.getElementById("bestillDrikke").onclick = bestillDrikke;
    document.getElementById("fjernDrikke").onclick = fjernDrikke;
    document.getElementById("fjernPizza").onclick = fjernPizza;
    for (key in meny) { // lager de forskjellige valgelementene til pizzatypene i select tagen
        let elem = document.createElement("option"); // lager en 'option' tag
        elem.textContent = meny[key].navn; // tilordner teksten til 'option' taggen navnet til pizzaen  
        elem.value = key; // tilordner verdien til 'option' taggen nøkkelen til pizza-elementet i arrayen
        selPizza.appendChild(elem);
    } // legger 'option' taggen til i 'select' taggen
    for (key in drikke) { // lager de forskjellige valgelementene til drikketypene i select tagen
        let elem = document.createElement("option"); // lager en 'option' tag
        elem.textContent = drikke[key].navn; // tilordner teksten til 'option' taggen navnet til drikken
        elem.value = key; // tilordner verdien til 'option' taggen nøkkelen til drikke-elementet i arrayen
        selDrikke.appendChild(elem);
    } // legger 'option' taggen til i 'select' taggen
    // lager en 'tooltip' som inneholder ingerediensene til pizzaene
    let menyTabell = document.getElementById("meny");
    for (elem in meny) {
        let span = document.createElement("span"); // lagen en span tag
        let tr = document.createElement("tr"); // lager en tr tag
        let td1 = document.createElement("td"); // lager en td tag
        let td2 = document.createElement("td"); // lager enda en td tag
        td1.textContent = meny[elem].navn; // tilordner td1-elementet navnet til pizzaene
        span.innerHTML = meny[elem].ingredienser.join('<br>'); // legger lista med ingredienser inn i span-elementet
        td1.appendChild(span).classList.add("tooltiptext"); // legger span-elementet inn i td1-elementet og gir det klassen "tooltiptext"
        td2.textContent = meny[elem].pris + " kr"; // tilordner td2-elementet prien til pizzaene
        tr.appendChild(td1).classList.add("tooltip"); // legger td1-elementet til i tr-elementet og gir det klassen "tooltip"
        tr.appendChild(td2).classList.add("menyPris"); // legger td2-elementet til i tr-elementet og gir det klessen "menyPris"
        menyTabell.appendChild(tr); // legger tr-elementet inn i menytabellen
    }
    let span = document.createElement("span"); // lagen en span tag
    let tr = document.createElement("tr"); // lager en tr tag
    let td1 = document.createElement("td"); // lager en td tag
    let td2 = document.createElement("td"); // lager enda en td tag
    td1.textContent = "Mineralvann"; // tilordner td1 elementet teksten "Mineralvann"
    for (elem in drikke) {
        span.innerHTML += drikke[elem].navn + "<br>"
    } // legger til navnene på alle drikkene i span-elementet som blir til 'tooltipen' til td1 elementet
    td1.appendChild(span).classList.add("tooltiptext"); // legger span-elementet inn i td1 elementet og gir det klassen "tooltiptext"
    td2.textContent = drikke.cocaCola.pris + " kr"; // tillordner td2-elementet prisen til coca cola
    tr.appendChild(td1).classList.add("tooltip"); // legger td1-elementet inn i tr-elementet og gir det klassen "tooltip"
    tr.appendChild(td2).classList.add("menyPris"); // legger td2-elementet inn i tr-elementet og gir det klassen "menyPris"
    menyTabell.appendChild(tr); // legger tr-elementet inn i menytabellen
}

function bestillPizza() {
    let pizza = selPizza.options[selPizza.selectedIndex].value; // henter verdien fra valget til brukeren i den første menyen
    if (pizza == "") {
        alert("Du må velge en pizza"); // vasler brukeren om at han/hun må velge en pizza hvis han/hun ikke har lagt inn et valg
    } else {
        let pizzaAnt = selPizzaAnt.options[selPizzaAnt.selectedIndex].value; // finner antall pizzaer brukeren har valgt
        bestilling.pizza[pizza] = meny[pizza]; // legger pizzaen brukeren har valgt inn i bestillingslisten
        bestilling.pizza[pizza].antall += Number(pizzaAnt); // legger til like antall mange pizzaer som brukeren har valgt
        lagKvittering() // lager kvitteringen
    }
}

function bestillDrikke() {
    let drikkeType = selDrikke.options[selDrikke.selectedIndex].value; // henter verdien fra valget til brukeren i den andre menyen
    if (drikkeType == "") {
        alert("Du må velge en drikke"); // varsler brukeren om at han/hun må velge en drikke hvis han/hun ikke har lagt inn et valg
    } else {
        let drikkeAnt = selDrikkeAnt.options[selDrikkeAnt.selectedIndex].value; // finner antall drikke brukeren har valgt
        bestilling.drikke[drikkeType] = drikke[drikkeType]; // legger pizzaen brukeren har valgt inn i bestillingslisten
        bestilling.drikke[drikkeType].antall += Number(drikkeAnt); // legger til like mange antall drikker som brukeren har valgt
        lagKvittering() // lager kvitteringen
    }
}

function fjernPizza() {
    let pizza = selPizza.options[selPizza.selectedIndex].value; // henter verdien fra valget til brukeren i den første menyen
    let pizzaAnt = selPizzaAnt.options[selPizzaAnt.selectedIndex].value; // finner antall pizzaer
    for (i = 0; i < pizzaAnt; i++) {
        if (bestilling.pizza[pizza] !== undefined) {
            bestilling.pizza[pizza].antall--; // fjerner antall pizzaer brukeren har valgt
            if (bestilling.pizza[pizza].antall == 0) {
                delete bestilling.pizza[pizza];
            } // hvis det er 0 pizzaer slettes pizzaen fra bestillingen
            lagKvittering();
        }
    }
}

function fjernDrikke() {
    let drikke = selDrikke.options[selDrikke.selectedIndex].value; // henter verdien fra valget til brukeren i den andre menyen
    let drikkeAnt = selDrikkeAnt.options[selDrikkeAnt.selectedIndex].value; // finner antall drikke
    for (i = 0; i < drikkeAnt; i++) {
        if (bestilling.drikke[drikke] !== undefined) {
            bestilling.drikke[drikke].antall--; // fjerner antall drikker brukeren har valgt
            if (bestilling.drikke[drikke].antall == 0) {
                delete bestilling.drikke[drikke];
            } // hvis det er 0 drikker slettes drikken fra bestillingen
            lagKvittering();
        }
    }
}

function fjernAlleVarer() {
    for (elem in bestilling.pizza) {
        bestilling.pizza[elem].antall = 0; // setter antall pizzaer lik null
        delete bestilling.pizza[elem]; // fjerner pizzaene
    }
    for (elem in bestilling.drikke) {
        bestilling.drikke[elem].antall = 0; // setter antall drikker lik null
        delete bestilling.drikke[elem]; // fjerner drikkene
    }
    lagKvittering();
}

function lagKvittering() {
    // lager tabellen til kvitteringen
    kvittering.innerHTML = ` 
    <div class="kvittering">
        <table>
            <tr><center><b>Kvittering</b></center></tr>
            <tr>
                <th class="varer">Varer</th>
                <th class="ant">Ant</th>
                <th class="pris">Pris</th>
            </tr>
            <tr>
                <td id="varer"></td>
                <td id="ant"></td>
                <td id="pris"></td>
            </tr>
            <tr>
                <th class="varer">Total</th>
            </tr>
            <tr>
                <td>Uten mva: </td>
                <td></td>
                <td id="prisUtenMva"></td>
            </tr>
            <tr>
                <td>Inkl mva:</td>
                <td></td>
                <td id="prisInklMva"></td>
            </tr>
        </table>
    </div><br>
    <center><button style="width: 155px; height: 30px;" id="fjernVarer">Fjern alle varer</button></center>`;
    document.getElementById("fjernVarer").onclick = fjernAlleVarer; // lager lytter til knappen "Fjern alle varer"
    let varer = document.getElementById("varer");
    let ant = document.getElementById("ant");
    let pris = document.getElementById("pris");
    let prisUtenMva = document.getElementById("prisUtenMva");
    let prisInklMva = document.getElementById("prisInklMva");
    let totPizzaPris = 0,
        totDrikkePris = 0;
    varer.innerHTML = "";
    ant.innerHTML = "";
    pris.innerHTML = "";
    for (key in bestilling.pizza) {
        let pizzaAnt = bestilling.pizza[key].antall;
        let pizzaNavn = bestilling.pizza[key].navn;
        let pizzaPris = bestilling.pizza[key].pris * pizzaAnt;
        totPizzaPris += pizzaPris; // legger til prisen til pizzaen(e) i totalprisen
        varer.innerHTML += `${pizzaNavn} <br>`; // skriver ut pizzaen(e) til kviteringen
        ant.innerHTML += `${pizzaAnt} <br>`; // skriver ut antall pizzaer til kvitteringen
        pris.innerHTML += `${toDesimaler(pizzaPris)} kr<br>`; // skriver ut prisen til pizzaen(e) til kvitteringen
    }
    for (key in bestilling.drikke) {
        let drikkeAnt = bestilling.drikke[key].antall;
        let drikkeNavn = bestilling.drikke[key].navn;
        let drikkePris = bestilling.drikke[key].pris * drikkeAnt;
        totDrikkePris += drikkePris; // legger til prisen til drikken(e) i totalprisen
        varer.innerHTML += `${drikkeNavn} <br>`; // skriver ut drikken(e) til kviteringen
        ant.innerHTML += `${drikkeAnt} <br>`; // skriver ut antall drikker til kvitteringen
        pris.innerHTML += `${toDesimaler(drikkePris)} kr<br>`; // skriver ut prisen til drikken(e) til kvitteringen
    }
    totPris = totPizzaPris + totDrikkePris; // regner ut totalprisen
    prisUtenMva.innerHTML = `${toDesimaler(totPris-(totPris*0.25))} kr`; // skriver ut totalprisen uten mva
    prisInklMva.innerHTML = `${toDesimaler(totPris)} kr`; // skriver ut totalprisen med mva
    // kvitteringPris.innerHTML = `Uten mva: ${toDesimaler(totPris)} kr <br>Inkl mva: ${toDesimaler(totPris*1.25)} kr<br>`; // skriver ut prisen med og uten mva
}

function toDesimaler(tall) {
    return (Math.round((tall) * 100) / 100).toFixed(2) // runder av til to desimaler
}