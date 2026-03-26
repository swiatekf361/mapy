function pokaz(e) {
    szukaj("")
    try {
        document.getElementById(nowopen).style.fill = "#c0c0c0";
    } catch (e) {null}
    try {
        infos.nazwa.innerText = dane_id[e.id][0];
        infos.powierzchnia.innerText = "Powierzchnia: " + dane_id[e.id][1] + " km²";
        infos.ludnosc.innerText = "Liczba ludności: " + dane_id[e.id][2];
        infos.gestosc.innerText = "Gęstość zaludnienia: " + dane_id[e.id][3] + " os/km²";
        infos.stolica.innerText = "Stolica: " + dane_id[e.id][4];
        infos.ue.innerText = "UE: " + dane_id[e.id][5];
        infos.rodzaj.innerText = dane_id[e.id][6];
        infos.flaga.src = obrazy.europa_flagi[dane_id[e.id][0].toLowerCase()];
        e.style.fill = dane_id[e.id][1] == "miasto na prawach powiatu"? "navy" : "blue";
        nowopen = e.id
    } catch (f) {null}
}