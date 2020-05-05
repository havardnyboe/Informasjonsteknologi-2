let fjell1 = document.querySelector('#img-fjell1')
let fjell2 = document.querySelector('#img-fjell2')
let fjell3 = document.querySelector('#img-fjell3')

window.onload = () => {
    fjell1.onclick = () => {alert('For dette bildet anbefaler jeg .jpg formatet. Det er fordi bildet skal brukes på en nettside og ikke har en gjennomsiktig bakgrunn. .jpg formatet komprimerer bildet en del som gjør at det tar mindre plass.')}
    fjell2.onclick = () => {alert('For dette bildet anbefaler jeg enten .gif formatet eller .png. Begge formatene gjør det mulig å ha gjennomsiktig bakgrunn.')}
    fjell3.onclick = () => {alert('For dette bildet anbefaler jeg .svg formatet. Begrunnelsen er at .svg formatet gjør det mulig å endre størrelsen på bildet uten å miste bildekvaliteten.')}
}