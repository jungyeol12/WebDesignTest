

$(".menu").hover(
    function() {
        $(".sub-menu").stop().slideDown("slow");
    },
    function() {
        $(".sub-menu").stop().slideUp("fast");
    }
)

// 첫번째 공지사항 요소 클릭시
$(".openPop").click(function(){
    $("#popup").show()
})

// 팝업의 '닫기' 버튼 클릭시
$(".closePop").click(function(){
    $("#popup").hide()
})


var slide = $(".slide > img");
var index = 0;
var size = slide.length - 1;
var timer = setInterval("autoslide()", 1500);

function autoslide() {
    $(slide[index]).stop().animate({
        "top": "-100%"
    }, 1000, function() {
        $(this).css({"top": "100%"});
    });

    index++;

    if(index > size) index = 0;

    $(slide[index]).stop().animate({
        "top": "0"
    }, 1000);
}



$(".tab ul li:first-child").click(
    function() {
        $(this).addClass('on');
        $(".tab ul li:last-child").removeClass('on');
        
        $(".news").show();
        $(".gallery").hide();
    }
)

$(".tab ul li:last-child").click(
    function() {
        $(this).addClass('on');
        $(".tab ul li:first-child").removeClass('on');
        
        $(".gallery").show();
        $(".news").hide();
    }
)
