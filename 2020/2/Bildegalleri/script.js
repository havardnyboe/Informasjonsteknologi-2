let bildeDiv = document.getElementById('bilder');
let bildeListe = ['img/fleksnes1.jpg', 'img/fleksnes2.jpg', 'img/fleksnes3.jpg', 'img/fleksnes4.jpg', 'img/fleksnes5.jpg'];
let bildenr = 0;
let slideshow = nesteBilde
let intervall

window.onload = () => {
    document.getElementById('forrige-bilde').onclick = forrigeBilde;
    document.getElementById('neste-bilde').onclick = nesteBilde;
    bildeDiv.onclick = skaler;
};

// setInterval(slideshow, 1500);

function nesteBilde() {
    if (bildenr >= bildeListe.length - 1) {
        bildenr = 0
    } else {
        bildenr++
    }
    console.log(bildenr)
    bildeDiv.innerHTML = '<img src=' + bildeListe[bildenr] + ' width="500px">';
}

function forrigeBilde() {
    if (bildenr <= 0) {
        bildenr = bildeListe.length - 1
    } else {
        bildenr--
    }
    console.log(bildenr)
    bildeDiv.innerHTML = '<img src=' + bildeListe[bildenr] + ' width="500px">';
}

function skaler() {
    let skalert = false;
    if (!skalert) {
        bildeDiv.style.transform = 'scale(2)';
    } else {
        console.log('skalert')
        bildeDiv.style.transform = 'scale(1)';
    }
}