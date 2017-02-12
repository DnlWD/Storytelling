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
//passiamo allo scroll "Orizzontale"
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        $('#landing').css({
            'opacity': (100 - scroll) / 100
        });
        if (scroll > 100) {
            $('#storia').css({
                position: 'fixed'
            });
            $('#uno').css({
                'margin-left': 200 - scroll
            });
        }
        if (scroll > 150) {
            $('.dialog').css({
                'opacity': scroll / 400
            });
        }
        if (scroll > 500) {
            $('#duea').css({
                'opacity': scroll / 1000
            });
            $('#dueb').css({
                'opacity': scroll / 2000
            });
        }
        if (scroll > 7000) {
            $('#storia').css({
                position: 'static'
            });
        }
    })
});