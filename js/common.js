$(function(){
    
    $(".top_text").hide().fadeIn(2000);

    $(window).scroll(function () {

        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();

        $(".card").each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 300) {
                $(this).addClass("fadeInDown");
            }
        });

        $(".box").each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 200) {
                $(this).addClass("fadeInDown");
            }
        });
        
    });

    const pagetop = $(".top_icon");

    pagetop.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
          pagetop.fadeIn();
        } else {
          pagetop.fadeOut();
        }
    });

    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });

})