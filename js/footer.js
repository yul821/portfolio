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

$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var contactOffset = $('.contact').offset().top;

        // 스크롤 위치가 #contact 요소의 위치에 도달했을 때
        if (scrollTop + $(window).height() > contactOffset) {
            $('.contact').addClass('visible');
            $('.p-txt').addClass('visible');
        } else {
            // 스크롤이 #contact 요소의 위치를 벗어났을 때 클래스를 제거
            $('.contact').removeClass('visible');
            $('.p-txt').removeClass('visible');
        }
    });
});