var infos = {
    nazwa: document.getElementById("nazwa"),
    flaga: document.getElementById("flaga"),
    godlo: document.getElementById("godlo")
}

var more_info = document.getElementById("more_info");
var nowopen = null;
var mapa = document.getElementById("mapa");
var wyniki = document.getElementById("wyszukiwarka");
var nazwa = null;
var svg = "";

{
    let p = more_info.getElementsByTagName("p");
    for (i=0; i<p.length; i++) infos[p[i].id] = p[i];
}

function zaladuj(n) {
    nazwa = n;

    fetch(n + "-js.svg")
    .then(function(response) {return response.text()})
    .then(function(text) {svg = text; mapa.innerHTML = svg;})

    fetch(n + ".csv")
    .then(function(response) {return response.text()})
    .then(function(text) {plik_csv = text; przygotuj();})
}

function przygotuj(skipcheck) {
    dane_s = plik_csv.split("\r\n");
    dane_id = {};
    var max = 0;
    var j = 0;
    for (i=0; i<dane_s.length; i++) {
        dane_s[i] = dane_s[i].split(",");
        if (!max) max = dane_s[i].length;
        if (dane_s[i].length != max) continue;
        else dane_id[dane_s[i][max-1]] = dane_s[i];
        if (nazwa == "powiaty" || (nazwa == "powiaty-wg-w" && skipcheck)) dane_s[i][2] = dane_s[i][2].split(". ");
        else if (nazwa == "wojewodztwa") dane_s[i][9] = dane_s[i][9].split(". ");
    }
    if (nazwa == "powiaty-wg-w" && !skipcheck) {
        dane_pw_s = dane_s;
        dane_pw_id = dane_id;
        fetch("../powiaty/powiaty.csv")
        .then(function(response) {return response.text()})
        .then(function(text) {plik_csv = text; przygotuj(true);})
    }
}

function szukaj(v) {
    wyniki.innerHTML = ""
    document.body.classList.remove("match");
    more_info.style.display = "block";
    if (v == "") return;
    more_info.style.display = "none";
    document.body.classList.add("match");
    var max = 0;
    for (i=1; i<dane_s.length; i++) {
        if (!max) max = dane_s[i].length;
        try {document.getElementById(dane_s[i][max-1]).classList.remove("match")} catch (e) {null}
        if (dane_s[i][0].toLowerCase().indexOf(v.toLowerCase()) != -1) {
            wyniki.innerHTML += "<li><a href='javascript:pokaz(document.getElementById(\"" + dane_s[i][max-1] + "\"))'>" + dane_s[i][0] + "</a></li>";
            try {document.getElementById(dane_s[i][max-1]).classList.add("match")} catch (e) {null}
        }
    }
}