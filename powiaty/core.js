var infos = {
    nazwa: document.getElementById("nazwa"),
    flaga: document.getElementById("flaga"),
    godlo: document.getElementById("godlo")
}

var more_info = document.getElementById("more_info");
var nowopen = null;

{
    var p = more_info.getElementsByTagName("p");
    for (i=0; i<p.length; i++) infos[p[i].id] = p[i];
}