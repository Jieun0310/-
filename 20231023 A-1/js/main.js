$(function(){

// gnb
$('.gnb').hover(
    function(){
        $('.sub').stop().slideDown()
    },
    function(){
        $('.sub').stop().slideUp()
    },
)

// slider
setInterval(
  function(){
    $('.slides').animate({left:'-100%'},function(){
    $('.slide').first().appendTo('.slides')
    $(this).css('left',0)
})
},3000)

//tab
// $('.item').eq(0).show()

$('.titles h3').click(function(){
    var index = $(this).index()

    $('.titles h3').removeClass('active')
    $(this).addClass('active')

    $('.item').hide()
    $('.item').eq(index).show()

})

// modal
$('.show_modal').click(function(){
    $('.modal').show()
});

$('.close').click(function(){
    $('.modal').hide()
});

















})