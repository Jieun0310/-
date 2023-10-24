$(function(){

    // 메뉴 
    $('.gnb').hover(
        function(){
            $('.header').addClass('active')
            $(this).find('ul').stop().slideDown('fast')
        },
        function(){
            $('.header').removeClass('active')
            $(this).find('ul').stop().slideUp('fast')
        },
    )

    // 슬라이드
    setInterval(
        function(){
        $('.slides').animate({left:'-100%'},function()
        {$('.slide').first().appendTo('.slides')
        $(this).css('left', 0)
        })
    },3000)






















})