function hoverover(e) {
    szukaj("")
    try {
        document.getElementById(nowopen).classList.remove("this");
    } catch (e) {null}
    console.log(e.id);
    try {
        infos.nazwa.innerText = powiaty_id[e.id][0];
        infos.siedziba.innerText = "Siedziba władz powiatu: " + powiaty_id[e.id][1];
        infos.wojewodztwo.innerHTML = "Województwo: <img id='wojewodztwo' src='" + obrazy.wojewodztwa_flagi[powiaty_id[e.id][3]] + "'> " + powiaty_id[e.id][3];
        infos.powierzchnia.innerText = "Powierzchnia: " + powiaty_id[e.id][4] + " km²";
        infos.ludnosc.innerText = "Liczba ludności: " + powiaty_id[e.id][5];
        infos.gestosc.innerText = "Gęstość zaludnienia: " + powiaty_id[e.id][6] + " os/km²";
        infos.tablice.innerHTML = "Tablice rejestracyjne: ";
        for (i=0; i<powiaty_id[e.id][2].length; i++)
            infos.tablice.innerHTML += "<span title='" +
            (powiaty_id[e.id][2][i].indexOf("[b]") == -1? "" : "Tylko na pojazdy zabytkowe") +
            (powiaty_id[e.id][2][i].indexOf("[c]") == -1? "" : "Nieużywane (stan na 5.03.2024)") +
            (powiaty_id[e.id][2][i].indexOf("[h]") == -1? "" : "dla motocykli i pojazdów zabytkowych") +
            (powiaty_id[e.id][2][i].indexOf("[j]") == -1? "" : "dla samochodów, motocykli i ciągników") +
            (powiaty_id[e.id][2][i].indexOf("[j]") == -1? "" : "dla motocykli") +
            "' class='tab " + 
            (powiaty_id[e.id][2][i].indexOf("[b]") == -1? "" : " tab-zabytek") +
            (powiaty_id[e.id][2][i].indexOf("[c]") == -1? "" : " tab-nieuzywane") +
            "'>" + powiaty_id[e.id][2][i].replace("[a]", "").replace("[b]", "").replace("[c]", "").replace("[d]", "").replace("[g]", "").replace("[h]", "").replace("[j]", "").replace("[k]", "") + "</span>";
        document.getElementById(e.id).classList.add("this");
        nowopen = e.id
    } catch (f) {
        console.error(f);
        e.style.fill = "black";
    }
}

function przygotuj_powiaty() {
    powiaty_s = powiaty_csv.split("\r\n");
    powiaty_id = {};
    for (i=0; i<powiaty_s.length; i++) {
        powiaty_s[i] = powiaty_s[i].split(",");
        if (powiaty_s[i].length == 8) continue;
        else powiaty_id[powiaty_s[i][8]] = powiaty_s[i];
        if (powiaty_s[i].length == 9) powiaty_s[i][2] = powiaty_s[i][2].split(". ")
    }
}

function szukaj(v) {
    miejsce = document.getElementById("wyszukiwarka");
    miejsce.innerHTML = ""
    document.body.classList.remove("match");
    document.getElementById("more_info").style.display = "block";
    if (v == "") return;
    document.getElementById("more_info").style.display = "none";
    document.body.classList.add("match");
    for (i=1; i<powiaty_s.length; i++) {
        document.getElementById(powiaty_s[i][8]).classList.remove("match");
        if (powiaty_s[i][0].replace("powiat ", "").toLowerCase().indexOf(v.toLowerCase()) != -1 ||
        ((v.toLowerCase() == "miasta") && powiaty_s[i][1] == "miasto na prawach powiatu") ||
        v.toLowerCase() == powiaty_s[i][3]) {
            miejsce.innerHTML += "<li><a href='javascript:hoverover(document.getElementById(\"" + powiaty_s[i][8] + "\"))'>" + powiaty_s[i][0] + "</a></li>";
            document.getElementById(powiaty_s[i][8]).classList.add("match");
        }
    }
}


function zaladuj() {
    fetch("powiaty-js.svg")
    .then(function(response) {return response.text()})
    .then(function(text) {document.getElementById("mapa").innerHTML = text;})

    fetch("powiaty.csv")
    .then(function(response) {return response.text()})
    .then(function(text) {powiaty_csv = text; przygotuj_powiaty();})
}