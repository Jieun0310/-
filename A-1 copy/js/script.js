$(function(){

    // 모달
    $('.show_modal').click(function(){
        $('.modal').show();
        });

    $('.close_modal').click(function(){
    $('.modal').hide();
     });


    //  gnb
     $('.gnb').hover(
        function(){
           $('.header').addClass('active')
           $(this).find('ul').stop().slideDown()
        },
        function(){
            $('.header').removeClass('active')
            $(this).find('ul').stop().slideUp()
        }
    )
    
    // 슬라이더
    setInterval(function(){
        $('.slides').animate({left:'-100%'},function(){
            $('.slide').first().appendTo('.slides')
            $(',slides').css('left',0)
        })
    },3000)


    //board 
    $('.items').eq(0).show()

    $('.titles h2').click(function(){
        var index =$(this).index 

        $('.titles h2').removeClass('active')
        $(this).addClass('active')
       
        $('.itmes').hide()
        $('.itmes').eq(idx).show()
    })
    


// })

// $('.show_modal').click(function(){
//     $('.modal').show();
// });

// $('.close_modal').click(function(){
//     $('.modal').hide();
// });

// $('.gnb').hover(function(){
//     $('.gnb ul').stop().slideDown(600);
// }),
// $('.gnb').hover(function(){
//     $('.gnb ul').stop().slideUp(600);
})