$(document).ready(function () {
    var transiction = window.innerHeight;
    var larghezza = window.innerWidth;
    var $horizontal = $('#storia');
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        $('#landing').css({
            'opacity': (100 - scroll) / 100
        });
        if ($(window).scrollTop() > (100 - scroll)) {
            var s = $(this).scrollTop()
                , d = $(document).height()
                , c = $(this).height();
            scrollPercent = (s / (d - c));
            var position = (scrollPercent * ($(document).width() - $horizontal.width()));
            $horizontal.css({
                'left': position
            });
        }
    })
});