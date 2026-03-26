function pokaz(e) {
    szukaj("")
    try {
        document.getElementById(nowopen).classList.remove("this");
    } catch (e) {null}
    try {
        infos.nazwa.innerText = dane_id[e.id][0];
        infos.siedziba.innerText = "Siedziba władz powiatu: " + dane_id[e.id][1];
        infos.wojewodztwo.innerHTML = "Województwo: <img id='wojewodztwo' src='" + obrazy.wojewodztwa_flagi[dane_id[e.id][3]] + "'> " + dane_id[e.id][3];
        infos.powierzchnia.innerText = "Powierzchnia: " + dane_id[e.id][4] + " km²";
        infos.ludnosc.innerText = "Liczba ludności: " + dane_id[e.id][5];
        infos.gestosc.innerText = "Gęstość zaludnienia: " + dane_id[e.id][6] + " os/km²";
        infos.tablice.innerHTML = "Tablice rejestracyjne: ";
        for (i=0; i<dane_id[e.id][2].length; i++)
            infos.tablice.innerHTML += "<span title='" +
            (dane_id[e.id][2][i].indexOf("[b]") == -1? "" : "Tylko na pojazdy zabytkowe") +
            (dane_id[e.id][2][i].indexOf("[c]") == -1? "" : "Nieużywane (stan na 5.03.2024)") +
            (dane_id[e.id][2][i].indexOf("[h]") == -1? "" : "dla motocykli i pojazdów zabytkowych") +
            (dane_id[e.id][2][i].indexOf("[j]") == -1? "" : "dla samochodów, motocykli i ciągników") +
            (dane_id[e.id][2][i].indexOf("[j]") == -1? "" : "dla motocykli") +
            "' class='tab " + 
            (dane_id[e.id][2][i].indexOf("[b]") == -1? "" : " tab-zabytek") +
            (dane_id[e.id][2][i].indexOf("[c]") == -1? "" : " tab-nieuzywane") +
            "'>" + dane_id[e.id][2][i].replace("[a]", "").replace("[b]", "").replace("[c]", "").replace("[d]", "").replace("[g]", "").replace("[h]", "").replace("[j]", "").replace("[k]", "") + "</span> ";
        document.getElementById(e.id).classList.add("this");
        nowopen = e.id
    } catch (f) {null}
}