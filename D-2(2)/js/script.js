$(".menu ul li").hover(
    function() {
        $(this).children("ul").stop().slideDown("slow");
    },
    function() {
        $(this).children("ul").stop().slideUp("fast");
    }
)

var currentIndex = 0;

$(".slide-wrap").append($(".slider").first().clone(true));

setInterval(() => {
    currentIndex++;
    $(".slide-wrap").animate({marginLeft: -100 * currentIndex + "%"}, 600);

    if(currentIndex == 3) {
        setTimeout(() => {
            currentIndex = 0;
            $(".slide-wrap").animate({marginLeft: 0}, 0)
        }, 700);
    }
}, 3000);

$(".popup-open").on("click", function() {
    $("#popup").css("display", "flex");
})

$(".popup-close").on("click", function() {
    $("#popup").css("display", "none");
})