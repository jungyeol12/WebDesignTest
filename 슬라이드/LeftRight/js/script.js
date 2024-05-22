var slide = $(".slide > div");
var count = 0;
var size = slide.length - 1;
var timer = setInterval("autoslide()", 3000);

function autoslide() {
    $(slide[count]).stop().animate({
        left: "-100%"
    }, 1000, function() {
        $(this).css({left: "100%"});
    });
    count++;
    if(count > size) {
        count = 0;
    }
    $(slide[count]).stop().animate({
        left: 0
    }, 1000);
}