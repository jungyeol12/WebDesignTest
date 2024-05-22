$(".menu ul li").hover(
    function() {
        $(this).children("ul").stop().slideDown("slow");
    },
    function() {
        $(this).children("ul").stop().slideUp("fast");
    }
)

let currentIndex = 0;
setInterval(function() {
    if(currentIndex < 3) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    
    $(".slider").eq(currentIndex).siblings().fadeOut();
    $(".slider").eq(currentIndex).fadeIn();
}, 3000)