function pokaz(e) {
    szukaj("")
    try {
        document.getElementById(nowopen).style.fill = "#e0e0e0";
    } catch (e) {null}
    try {
        infos.nazwa.innerText = dane_id[e.id][0];
        infos.siedziba.innerText = "Siedziba: " + dane_id[e.id][1].replace("1)", " (wojewody); ").replace("2)", " (sejmiku wojewódzkiego)");
        infos.powierzchnia.innerText = "Powierzchnia: " + dane_id[e.id][2] + " km²";
        infos.ludnosc.innerText = "Liczba ludności: " + dane_id[e.id][3];
        infos.gestosc.innerText = "Gęstość zaludnienia: " + dane_id[e.id][4] + " os/km²";
        infos.powiaty.innerText = "Liczba powiatów: " + dane_id[e.id][5];
        infos.urbanizacja.innerText = "Poziom urbanizacji: " + dane_id[e.id][6];
        infos.bezrobocie.innerText = "Stopa bezrobocia: " + dane_id[e.id][7];
        infos.pkb.innerText = "PKB na osobę: " + dane_id[e.id][8];
        infos.teryt.innerText = "Kod TERYT: " + dane_id[e.id][10];
        infos.tablice.innerHTML = "Wyróżnik na tablicach rejestracyjnych: ";
        infos.flaga.src = obrazy.wojewodztwa_flagi[dane_id[e.id][0]];
        infos.godlo.src = obrazy.wojewodztwa_godla[dane_id[e.id][0]];
        for (i=0; i<dane_id[e.id][9].length; i++)
            infos.tablice.innerHTML += "<span class='tab'>" + dane_id[e.id][9][i] + "</span>";
        e.style.fill = dane_id[e.id][1] == "miasto na prawach powiatu"? "navy" : "blue";
        nowopen = e.id
    } catch (f) {
        null
    }
}