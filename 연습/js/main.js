$(function(){
    // jQuery를 사용하여 DOM이 로드될 때 실행할 코드를 감싸줍니다.
    
    $(document).ready(function () {
        const gnbLinks = $(".gnb li a");
    
        gnbLinks.on("click", function (event) {
            event.preventDefault();
    
            const targetClass = $(this).attr("href").substring(1);
            const targetSection = $("#" + targetClass);
    
            if (targetSection.length) {
                $("html, body").animate({
                    scrollTop: targetSection.offset().top
                },300);
            }
        });
    });  
});





