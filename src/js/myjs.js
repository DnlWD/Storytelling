//controllo audio JS puro
var audio = document.getElementById('background_audio');
var tag = document.getElementById('mute')
tag.addEventListener('click', function (e) {
    e = e || window.event;
    audio.muted = !audio.muted;
    if (tag.innerHTML == "on") {
        tag.innerHTML = "off";
    }
    else {
        tag.innerHTML = "on";
    }
    e.preventDefault();
}, false);

function opacita(nome, scroll, indice) {
    if (scroll > indice) {
        $(nome).css({
            'opacity': -((indice + 100) - scroll) / 100
        });
    }
}
//passiamo allo scroll "Orizzontale"
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        $('#landing').css({
            'opacity': (100 - scroll) / 100
        });
        if (scroll > 100) {
            $('#storia').css({
                position: 'fixed'
            });
            $('#storia').css({
                left: (-scroll / 5)
            });
        }
        opacita('#0001', scroll, 200);
        opacita('#0002', scroll, 400);
        opacita('.duea', scroll, 1200);
        opacita('#0003', scroll, 1600);
        opacita('#0004', scroll, 2000);
        opacita('.dueb', scroll, 3500);
        opacita('#0005', scroll, 4000);
        opacita('#0006', scroll, 4400);
        opacita('.tre', scroll, 10000);
        opacita('#0007', scroll, 11000);
        opacita('.quattro', scroll, 13000);
        opacita('#0008', scroll, 13400);
        opacita('.cinque', scroll, 17800);
        opacita('#0009', scroll, 19200);
        opacita('.sei', scroll, 23400);
        opacita('#0010', scroll, 24600);
        opacita('#0011', scroll, 25600);
        opacita('.sette', scroll, 26400);
        opacita('#0012', scroll, 26800);
        opacita('#0013', scroll, 27200);
        opacita('#0014', scroll, 27600);
        opacita('#0015', scroll, 28000);
        opacita('.backstage', scroll, 28400);
        if (scroll > 29300) {
            $('#storia').css({
                position: 'static'
            });
        }
    })
});
/*
$(document).ready(function () {
    $(window).scroll(function () {
        var posizione = $(window).scrollTop();
        $('#landing').css({
            'opacity': (100 - posizione) / 100
        });
    })
});*/