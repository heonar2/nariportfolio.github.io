$(document).ready(function() {

    //스크롤

    $('.menu a').click(function(e){
        e.preventDefault();

        let target = $(this).attr('href');
        let headerHeight = $('header').outerHeight();

        $('.menu li').removeClass('on');
        $(this).parent().addClass('on');

        $('html, body').animate({
            scrollTop: $(target).offset().top - headerHeight
        }, 700);
    });


     //모바일

    $('.ham').click(function() {
        $('.mo_menu, .dimd').fadeIn(500);
        $('body').css('overflow', 'hidden');
    });

    $('.closed').click(function() {
        $('.mo_menu, .dimd').fadeOut(500);
        $('body').css('overflow', 'auto');
    });

    $('.mo_menu a').click(function(e) {
        e.preventDefault();

        let target = $(this).attr('href');
        let headerHeight = $('header').outerHeight();

        $('html, body').animate({
            scrollTop: $(target).offset().top - headerHeight
        }, 700);

        $('.mo_menu, .dimd').fadeOut(500);
        $('body').css('overflow', 'auto');
    });

    $(function () {
        $('.photoFrame').on('click', function () {
            $(this).toggleClass('on');
        });
    });
    

    //프로젝트

    let currentIndex = 0;

    $('.tabmenu li').click(function(){

        currentIndex = $(this).index();

        moveTab();

        $('.tabmenu li').removeClass('on');
        $(this).addClass('on');
    });

    function moveTab() {

        let tabWidth = $('.tabbox > div').eq(0).outerWidth();

        $('.tabbox').css({
            transform: `translateX(-${currentIndex * tabWidth}px)`
        });
    }

    $(window).resize(function(){
        moveTab();
    });

    //프로젝트 탭

    $('.project_go').click(function () {

        const tab = $(this).data('tab');

        $('.tab_bg').fadeIn(300);

        $('.newtab').hide();
        $('#' + tab).fadeIn(300);

    });

    $('.pcclose').click(function () {

        $('.tab_bg').fadeOut(300);
        $('.newtab').fadeOut(300);

    });

    $('.tab_bg').click(function (e) {

        if ($(e.target).is('.tab_bg')) {
            $('.tab_bg').fadeOut(300);
            $('.newtab').fadeOut(300);
        }

    });

    $('.detailgo').click(function(){

        const pop = $(this).data('pop');

        $('.tab_bg2').fadeIn(300);

        $('.newtab').hide();
        $('#' + pop).fadeIn(300);

    });

    $('.pcclose').click(function () {

        $('.tab_bg2').fadeOut(300);
        $('.newtab').fadeOut(300);

    });

    $('.tab_bg2').click(function(e){

        if ($(e.target).is('.tab_bg2')) {
            $('.tab_bg2').fadeOut(300);
            $('.newtab').fadeOut(300);
        }
    });
});