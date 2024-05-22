$(".menu ul li").hover(
    function() {
        $(".menu ul li ul").stop().slideDown("slow");
    },
    function() {
        $(".menu ul li ul").stop().slideUp("fast");
    }
)

let currentIndex = 0;
$(".slide-wrap").append($(".slider").first().clone(true));

setInterval(() => {
    currentIndex++;
    $(".slide-wrap").animate({marginTop: -25.2 * currentIndex + "%"}, 600);

    if(currentIndex == 3)
    {
        setTimeout(() => {
            $(".slide-wrap").animate({marginTop: 0}, 0)
            currentIndex = 0;
        }, 700);
    }
}, 3000);

$(".popup-open").on("click", function() {
    $("#popup").css("display", "flex");
});
$(".popup-close").on("click", function() {
    $("#popup").css("display", "none");
});