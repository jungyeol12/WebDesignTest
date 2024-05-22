$(".menu ul li").hover(
    function() {
        $(this).children("ul").stop().slideDown("slow")
    },
    function() {
        $(this).children("ul").stop().slideUp("fast")
    }
)

var slide = $(".slider"); // slide 변수는 .slide 아래 있는 이미지들이다. (s1, s2, s3)
var count = 0; // 슬라이드 카운트
var max = slide.length - 1; // .slide 아래 있는 모든 요소의 수
var timer = setInterval("autoslide()", 3000); // autoslide() 함수를 3초마다 실행

function autoslide() {
    // 화면 가운데 표시된 이미지 애니메이션
    $(slide[count]).stop().animate({
        opacity: 0 // fade-out
    }, 1000);
    count++;
    if(count > max) { // count가 max 이상이면 카운트 초기화
        count = 0;
    }
    $(slide[count]).stop().animate({
        opacity: 1
    }, 1000);
}

$(".popup-open").on("click", function () {
    $(".popup").css("display", "flex");
});

$(".popup-close").on("click", function () {
    $(".popup").css("display", "none");
});