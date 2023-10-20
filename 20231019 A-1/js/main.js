$(function(){

    // modal
    $('.show_modal').click(function(){
        $('.modal').show()
    });

    $('.close').click(function(){
        $('.modal').hide()
    });

    // gnb

    // 1. submenu 전체 내림
   $('.gnb').hover(
        function(){
            $(this).find('ul').stop().slideDown()
        },
        function(){
            $(this).find('ul').stop().slideUp()
        },
        )   

    // slider
    
    // 1) 이미지 위 -> 아래
    // setInterval(function(){
    //     $('.slides').animate({top:'-100%'},function(){
    //         $('.slide').first().appendTo('.slides')
    //         $(this).css('top',0)
    //     })
    // },3000)

    // 2) 이미지 좌 -> 우
    setInterval(function(){
        $('.slides').animate({left: '-100%'}, function(){
            $('.slide').first().appendTo('.slides')
            $('.slides').css('left', 0)
        })
    }, 3000)

    //board
    $('.item').eq(0).show()

    $('.titles h2').click(function(){
        var index =$(this).index()

        $('.titles h2').removeClass('active')
        $(this).addClass('active')

        $('.item').hide()
        $('.item').eq(index).show()
    })











})


