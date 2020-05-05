function lagSoyler() {
    divDiagram.innerHTML = '';
    for (i = 0; i < treData[selectTre.value].length; i++) {
        let div = document.createElement('div');
        let span = document.createElement('span');
        div.style.width = span.style.width = (treData[selectTre.value][i] * 5) + 'px'; // gir div -og span elementet en bredde
        span.innerHTML = aarstall[i]; // gir span elementet årstallene
        div.innerHTML = treData[selectTre.value][i]; // gir div elementene verdiene til den valgte tresorten
        div.classList.add("soyle");
        divDiagram.appendChild(div);
        divDiagram.appendChild(span);
    }
}