$(".menu ul li").hover(
    function() {
        $(this).children("ul").stop().slideDown("slow");
    },
    function() {
        $(this).children("ul").stop().slideUp("fast");
    }
)


var index = 0;
$(".slide-wrap").append($(".slider").first().clone(true));

setInterval(() => {
    index++;
    $(".slide-wrap").animate({margintTop: -100 * index + "%"}, 600)

    setTimeout(() => {
        if(index == 3) {
            index = 0;
            $(".slide-wrap").animate({marginTop: 0}, 0)
        }
    }, 700)
}, 3000);