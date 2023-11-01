$(function(){
    //gnb
    $('.gnb').hover(
        function(){
            $(this).find('ul').show()
        },
        function(){
            $(this).find('ul').hide()
        }
        )

    
        // slider
        var slide = $('.slide')
        var current = 0
        
        slide.eq(current).show() //제일 첫번째 이미지를 보여주기 위한 설정 
        
        setInterval(function(){
            var next = (current + 1) % slide.length

            // console.log(current, next) // 이미지 순서 확인 

            slide.eq(current).fadeOut()
            slide.eq(next).fadeIn()
            current = next
        },3000)
        

        // modal
        $('.show_modal').click(function(){
                $('.modal').show()
        }),
        $('.close').click(function(){
                $('.modal').hide()
        })


        // contents
        $('.item').eq(0).show()

        $('.titles h2').click(function(){
            var index =$(this).index()
    
            $('.titles h2').removeClass('active')
            $(this).addClass('active')
    
            $('.item').hide()
            $('.item').eq(index).show()
        })
})