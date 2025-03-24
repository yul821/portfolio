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




//헤더 메뉴
$(function () {
    $("#btn-open").click(function () {
        $("#main-menu-box")
        .css({ // {}안에 속성:값인데 {}가 여러개 배치돼 형식 잘못 됨.
            right: 0,
        });
    });
    $("#btn-close").click(function () {
        $("#main-menu-box").css({
        right: "-100vw", // ★- 100% -> -100vw으로 수정 
        });
    });
    })

    $(document).ready(function () {
        $(".submenu").hide();
    
        // 메뉴 버튼 클릭 시 사이드 메뉴 열기
        $("#btn-open").click(function () {
            $("#main-menu-box").css({ right: 0 });
        });
    
        // 닫기 버튼 클릭 시 사이드 메뉴 닫기
        $("#btn-close").click(function () {
            $("#main-menu-box").css({ right: "-100vw" });
        });
    
        // `.main-menu-a` 클릭 이벤트 처리
        $('.main-menu-a').click(function (e) {
          var $submenu = $(this).next('.submenu'); // 현재 클릭한 메뉴의 서브메뉴 선택

          if ($submenu.length > 0) { // 서브메뉴가 있는 경우
            e.preventDefault(); // 기본 링크 이동 방지 (서브메뉴가 있는 경우만)
            
            if ($submenu.is(":visible")) {
                $submenu.stop(true, true).slideUp();
            } else {
              $(".submenu").stop(true, true).slideUp(); // 다른 서브메뉴 닫기
              $submenu.stop(true, true).slideDown(); // 현재 서브메뉴 열기
            }
            }
          // 서브메뉴가 없는 경우에는 기본 a 태그 동작 (페이지 이동)
        });

        $('.main-menu-a').mouseover(function (e) {
            var $submenu = $(this).next('.submenu'); // 현재 클릭한 메뉴의 서브메뉴 선택
        
            if ($submenu.length > 0) { // 서브메뉴가 있는 경우
                e.preventDefault(); // 기본 링크 이동 방지 (서브메뉴가 있는 경우만)
        
                if ($submenu.is(":visible")) {
                    $submenu.stop(true, true).slideUp();
                } else {
                    $(".submenu").stop(true, true).slideUp(); // 다른 서브메뉴 닫기
                    $submenu.stop(true, true).slideDown(); // 현재 서브메뉴 열기
                }
            }
        });
        
          // 메뉴 외부를 클릭하면 서브메뉴 닫기
    $(document).click(function (e) {
        if (!$(e.target).closest("#menu-box").length) {
        $(".submenu").stop(true, true).slideUp();
        }
    });
    });



    //헤더 서브메뉴 
    $(document).ready(function() {
        // 메뉴 클릭 시 부드러운 스크롤 효과
        $('.submenu-a').on('click', function(event) {
            // 기본 클릭 이벤트 방지
            event.preventDefault();

            // 클릭한 링크의 href 속성 값 가져오기
            var target = $(this).attr('href');

            // 해당 섹션으로 부드럽게 스크롤
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 800); // 800ms 동안 스크롤
        });
    });