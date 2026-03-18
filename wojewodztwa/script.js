function hoverover(e) {
    szukaj("")
    try {
        document.getElementById(nowopen).style.fill = "#e0e0e0";
    } catch (e) {null}
    console.log(e.id);
    try {
        infos.nazwa.innerText = wojewodztwa_id[e.id][0];
        infos.siedziba.innerText = "Siedziba: " + wojewodztwa_id[e.id][1].replace("1)", " (wojewody); ").replace("2)", " (sejmiku wojewódzkiego)");
        infos.powierzchnia.innerText = "Powierzchnia: " + wojewodztwa_id[e.id][2] + " km²";
        infos.ludnosc.innerText = "Liczba ludności: " + wojewodztwa_id[e.id][3];
        infos.gestosc.innerText = "Gęstość zaludnienia: " + wojewodztwa_id[e.id][4] + " os/km²";
        infos.powiaty.innerText = "Liczba powiatów: " + wojewodztwa_id[e.id][5];
        infos.urbanizacja.innerText = "Poziom urbanizacji: " + wojewodztwa_id[e.id][6];
        infos.bezrobocie.innerText = "Stopa bezrobocia: " + wojewodztwa_id[e.id][7];
        infos.pkb.innerText = "PKB na osobę: " + wojewodztwa_id[e.id][8];
        infos.teryt.innerText = "Kod TERYT: " + wojewodztwa_id[e.id][10];
        infos.tablice.innerHTML = "Wyróżnik na tablicach rejestracyjnych: ";
        infos.flaga.src = obrazy.wojewodztwa_flagi[wojewodztwa_id[e.id][0]];
        infos.godlo.src = obrazy.wojewodztwa_godla[wojewodztwa_id[e.id][0]];
        for (i=0; i<wojewodztwa_id[e.id][9].length; i++)
            infos.tablice.innerHTML += "<span class='tab'>" + wojewodztwa_id[e.id][9][i] + "</span>";
        e.style.fill = wojewodztwa_id[e.id][1] == "miasto na prawach powiatu"? "navy" : "blue";
        nowopen = e.id
    } catch (f) {
        console.error(f);
        e.style.fill = "black";
    }
}

function przygotuj_wojewodztwa() {
    wojewodztwa_s = wojewodztwa_csv.split("\r\n");
    wojewodztwa_id = {};
    max = 0;
    for (i=0; i<wojewodztwa_s.length; i++) {
        wojewodztwa_s[i] = wojewodztwa_s[i].split(",");
        if (!max) max = wojewodztwa_s[i].length;
        if (wojewodztwa_s[i].length == max-1) continue;
        else wojewodztwa_id[wojewodztwa_s[i][max-1]] = wojewodztwa_s[i];
        if (wojewodztwa_s[i].length == max) wojewodztwa_s[i][9] = wojewodztwa_s[i][9].split(". ")
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
    for (i=1; i<wojewodztwa_s.length; i++) {
        document.getElementById(wojewodztwa_s[i][11]).classList.remove("match");
        if (wojewodztwa_s[i][0].toLowerCase().indexOf(v.toLowerCase()) != -1) {
            miejsce.innerHTML += "<li><a href='javascript:hoverover(document.getElementById(\"" + wojewodztwa_s[i][11] + "\"))'>" + wojewodztwa_s[i][0] + "</a></li>";
            document.getElementById(wojewodztwa_s[i][11]).classList.add("match");
        }
    }
}

function zaladuj() {
    fetch("wojewodztwa-js.svg")
    .then(function(response) {return response.text()})
    .then(function(text) {document.getElementById("mapa").innerHTML = text;})

    fetch("wojewodztwa.csv")
    .then(function(response) {return response.text()})
    .then(function(text) {wojewodztwa_csv = text; przygotuj_wojewodztwa();})
}