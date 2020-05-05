const divInnlogging = `<div class="innpakning">
<br><br>
<p>Skriv inn det utdelte passordet for å logge inn</p>
<br><br>
<input type="password" id="input-passord"><br>
<button id="button-logg-inn">Logg inn</button>
<br><br><br><br><br><br><br>
<button id="button-tell-stemmer" onclick="tableCreate()">Tell opp stemmer</button>
</div>`

const divPartivalg = `<div class="partivalg">
<br><br>
<p>Stem på ditt parti</p>
<br><br>
<input type="radio" name="partivalg" id="rodt">Rødt <br>
<input type="radio" name="partivalg" id="sv">SV <br>
<input type="radio" name="partivalg" id="ap">Arbeiderpartiet<br>
<input type="radio" name="partivalg" id="sp">Senterpartiet<br>
<input type="radio" name="partivalg" id="mdg">MDG<br>
<input type="radio" name="partivalg" id="krf">KrF<br>
<input type="radio" name="partivalg" id="v">Venstre<br>
<input type="radio" name="partivalg" id="h">Høyre<br>
<input type="radio" name="partivalg" id="frp">FrP<br>
<input type="radio" name="partivalg" id="pir">Piratparitet<br>
<br>
<button id="button-stem" onclick="stem()">Stem</button>
</div>`