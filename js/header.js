// 각 메뉴를 클릭했을때 해당 섹션으로 부드럽게 스크롤     ******************작동이 안됨 
$(document).ready(function() {
    $('.main-menu-a').on('click', function(event) {
        event.preventDefault();

        var target = $(this).attr('href');

        $('html,body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
});