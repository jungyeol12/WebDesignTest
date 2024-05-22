$(".menu ul li").hover(
    function() {
        $(this).children("ul").stop().slideDown("slow");
    },
    function() {
        $(this).children("ul").stop().slideDown("fast");
    }
)

let currentCount = 0;
$(".slide-wrap").append($('.slider').first().clone(true));

setInterval(() => {
    currentCount++;
    $(".slide-wrap").animate({marginTop: -100 * currentCount + "%"}, 600);

    if(currentCount == 3) {
        currentCount = 0;
        $(".slide-wrap").animate({marginTop: 0}, 700);
    };  
}, 3000);