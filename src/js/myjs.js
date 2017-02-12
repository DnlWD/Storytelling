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
        opacita('.dialog', scroll, 200);
        opacita('#duea', scroll, 2800);
        opacita('#dueb', scroll, 5000);
        opacita('#tre', scroll, 10000);
        opacita('#quattro', scroll, 15000);
        opacita('#cinque', scroll, 20000);
        opacita('#sei', scroll, 25000);
        opacita('#sette', scroll, 27000);
        opacita('.backstage', scroll, 28000);
        if (scroll > 28400) {
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