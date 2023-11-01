$(function(){

    // gnb
    $('.gnb>li').hover(
        function(){
            $(this).find('ul').stop().show()
        },
        function(){
            $(this).find('ul').stop().hide()
        });

    // slider
    setInterval(
        function(){
        $('.slides').animate({left:'-100%'},function(){
        $('.slide').first().appendTo('.slides')
        $(this).css('left',0)
    })
    },3000)

    // modal
    $('.show_modal').click(function(){
        $('.modal').show()
    }),
    $('.close').click(function(){
        $('.modal').hide()
    })



})