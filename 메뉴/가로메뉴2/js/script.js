$(".menu").hover(
    function() {
        $(".sub-menu").stop().slideDown("slow");
    },
    function() {
        $(".sub-menu").stop().slideUp("fast");
    }
);