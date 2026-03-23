function pokazpowiaty(e) {
    console.log(e)
    try {
        mapa.innerText = "Ładowanie mapy...";
        fetch(dane_pw_id[e.id][0] + ".svg")
        .then(function(response) {return response.text()})
        .then(function(text) {mapa.innerHTML = text;})
        document.body.classList.add("goback")
    } catch (f) {
        console.error(f)
    }
}

function pokazwojewodztwa() {
    document.body.classList.remove("goback")
    mapa.innerHTML = svg;
}