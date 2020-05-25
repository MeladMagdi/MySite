/* $ ,global,carousel */

$(function () {
    'use strict';
    
    //NiceScroll

    $("body").niceScroll({
        cursorcolor:"aquamarine",
        cursorwidth:"16px"
        });

    $('.carousel').carousel({
        interval: 4000
    });
    $('.gear-opi').click(function () {
        $('.color-option').slideToggle(1000);
    });
    //Color Of Page
    $(".color-option ul li")
        .eq(0).css('backgroundColor', '#2971e5').end()
        .eq(1).css('backgroundColor', '#52bc37').end()
        .eq(2).css('backgroundColor', '#fc2ceb').end()
        .eq(3).css('backgroundColor', '#7e8f0c');

    $('.color-option ul li').click(function () {

        $('link[href*="theme"]').attr("href", $(this).attr('data-value'));
    });
    
    var scroll = $("#to-top");

    $(window).scroll(function () {

        if($(this).scrollTop() >= 700){

            scroll.fadeIn(1000);

        }else{
            scroll.fadeOut(1000);
        }
    });

    scroll.click(function(){

        $('html,body').animate({scrollTop : 0}, 600);
        
    });
    $(".collapse ul li a").click(function(){

        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        },1000);

    });

});
//lodaing Screen

$(window).load(function () {
    
//Show The Scroll
    
    
    'use strict';
    

    $(".lodaing-overlay .spinner").fadeOut(2000, function () {

        $(this).parent().fadeOut(2000,function (){
            $(this).remove();
        });
    });

});

