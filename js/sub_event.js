// tab
$(document).ready(function () {
    $('.tab li').on('click', function () {
        $('.tab li').removeClass('on');
        $(this).addClass('on');

        var i = $(this).index();

        $('.list ul').removeClass('on');
        $('.list ul').eq(i).addClass('on');

    });

});