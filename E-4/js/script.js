$(".menu > ul > li").on("mouseover", function () {
    $(this).find(".submenu").stop().slideDown("slow");
  });
  $(".menu > ul > li").on("mouseout", function () {
    $(this).find(".submenu").stop().slideUp("fast");
  });


var slide = $(".slide div");
var index = 0;
var size = slide.length - 1;
var timer = setInterval("autoslide()", 1500);

function autoslide() {
    $(slide[index]).stop().animate({
        "left": "-100%"
    }, 1000, function() {
        $(this).css({"left": "100%"});
    });
    index++;
    if(index > size) index = 0;
    $(slide[index]).stop().animate({
        "left": "0"
    }, 1000);
}

$(".openPop").click(
    function() {
        $("#popup").show();
    }
)

$(".closePop").click(
    function() {
        $("#popup").hide();
    }
)