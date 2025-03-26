// top 버튼 
$(document).ready(function () {
    $('.top-btn a').click(function (event) {
        event.preventDefault(); // 기본 클릭 동작 방지
        $('html, body').animate({
            scrollTop: $('#header-top').offset().top // 헤더로 스크롤
        }, 1000); // 1000ms 동안 부드럽게 스크롤
    });
});

$(window).scroll(function() { 
    if($(this).scrollTop() > 1080) { 
        $(".top-btn").fadeIn("fast");
    } else {
        $(".top-btn").fadeOut("fast");
    }
});