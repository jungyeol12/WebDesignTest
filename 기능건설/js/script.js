$(".menu").hover(
    function() {
        $(".sub-menu").stop().slideDown("slow");
    },
    function() {
        $(".sub-menu").stop().slideUp("fast");
    }
)

var slide = $(".slide > img");
var index = 0;
var size = slide.length - 1;
var timer = setInterval("autoslide()", 1500);

function autoslide() {
    $(slide[index]).stop().animate({
        opacity: 0
    }, 1000);
    index++;
    if(index > size) index=0;
    $(slide[index]).stop().animate({
        opacity: 1
    }, 1000);
}

$(".tab ul li:first-child").click(
    function() {
        $(this).addClass('on');
        $(".tab ul li:last-child").removeClass('on');
        
        $(".gallery").hide();
        $(".notice").show();
    }
);

$(".tab ul li:last-child").click(
    function() {
        $(this).addClass('on');
        $(".tab ul li:first-child").removeClass('on');
    
        $(".gallery").show();
        $(".notice").hide();
    }
);


$(".popup-open").on("click", function() {
    $("#popup").css("display", "flex");
});
$(".popup-close").on("click", function() {
    $("#popup").css("display", "none");
});