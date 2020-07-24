function retira_acentos(b) {
    for (com_acento =
        "\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd8\xd9\xda\xdb\xdc\xdd\u0154\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff\u0155",
        sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr", novastr = "", i = 0; i < b
        .length; i++) {
        for (troca = !1, a = 0; a < com_acento.length; a++)
            if (b.substr(i, 1) == com_acento.substr(a, 1)) {
                novastr += sem_acento.substr(a, 1), troca = !0;
                break
            } 0 == troca && (novastr += b.substr(i, 1))
    }
    return novastr
}
var filtro = document.getElementById("filtro-produto"),
    busca = document.getElementsByClassName("btn-link"),
    titlebar = document.getElementsByClassName("card"),
    buscayt = document.getElementsByClassName("yttitle"),
    video = document.getElementsByClassName("videoyt");
filtro.onkeyup = function () {
    for (var a = retira_acentos(filtro.value.toLowerCase()), b = 0; b < busca.length; b++) {
        var c = retira_acentos(busca[b].innerText),
            d = c.toLowerCase().indexOf(a) >= 0;
        titlebar[b].style.display = d ? "" : "none"
    }
    for (var a = retira_acentos(filtro.value.toLowerCase()), b = 0; b < buscayt.length; b++) {
        var c = retira_acentos(buscayt[b].innerText),
            d = c.toLowerCase().indexOf(a) >= 0;
        video[b].style.display = d ? "" : "none"
    }
};
