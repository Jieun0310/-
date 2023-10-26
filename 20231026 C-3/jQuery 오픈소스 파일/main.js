$(function(){

    // modal
    $('.show_modal').click(function(){
        $('.modal').show()
    }),
    $('.close').click(function(){
        $('.modal').hide()
    })

    // nav
    $('.nav>li').hover(
        function(){
        $(this).find('ul').stop().show()
    },
        function(){
        $(this).find('ul').stop().hide()
    })

    // //slider_fade
    // var slide = $('.slide')
    // var current = 0

    // slide.eq(current).show()

    // setInterval(function(){
    //     var next = (current + 1) % slide.length

    //     slide.eq(current).fadeOut()
    //     slide.eq(next).fadeIn()
    //     current = next
    // },2000)

    // sldier _ slide
    setInterval(
        function(){
        $('.slides').animate({left:'-100%'},function(){
        $('.slide').first().appendTo('.slides')
        $(this).css('left',0)
    })
    },2000)

})