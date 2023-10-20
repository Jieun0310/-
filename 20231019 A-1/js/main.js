$(function(){

    // modal
    $('.show_modal').click(function(){
        $('.modal').show()
    });

    $('.close').click(function(){
        $('.modal').hide()
    });

    // gnb
   $('.gnb').hover(
        function(){
            $(this).find('ul').stop().slideDown()
        },
        function(){
            $(this).find('ul').stop().slideUp()
        },
        )   


    // slider
    
    // setInterval(function(){
    //     $('.slides').animate({top:'-100%'},function(){
    //         $('.slide').first().appendTo('.slides')
    //         $(this).css('top',0)
    //     })
    // },3000)

    setInterval(function(){
        $('.slides').animate({left: '-100%'}, function(){
            $('.slide').first().appendTo('.slides')
            $('.slides').css('left', 0)
        })
    }, 3000)










})


