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
   }),
   $('.gnb').hover(
        function(){
            $(this).find('ul').stop().slideUp()
   })
    

})