var slide = $(".slider");
var count = 0;
var size = slide.length - 1;
var timer = setInterval("autoslide()", 1000);

function autoslide() {
    $(slide[count]).stop().animate({
        opacity: 0
    }, 1000);
    count++;
    if (count > size) count = 0;
    $(slide[count]).stop().animate({
        opacity: 1
    }, 1000);

}

