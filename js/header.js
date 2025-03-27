// 각 메뉴를 클릭했을때 해당 섹션으로 부드럽게 스크롤     ******************작동이 안됨 
$(document).ready(function() {
    $('.main-menu-a').on('click', function(event) {
        event.preventDefault();

        var target = $(this).attr('href');

        $('html,body').animate({
            scrollTop: $(target).offset().top
        }, 800);

        $('#main-menu-box').css({ right: "-100vw" }); //햄버거 )슬라이드 메뉴 닫기
    });
});




//헤더 메뉴
$(function () {
    $("#btn-open").click(function () {
        $("#main-menu-box")
        .css({ 
            right: 0,
        });
    });
    $("#btn-close").click(function () {
        $("#main-menu-box").css({
        right: "-100vw", 
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
            var $submenu = $(this).next('.submenu'); 

            if ($submenu.length > 0) { 
            e.preventDefault(); 
            
            if ($submenu.is(":visible")) {
                $submenu.stop(true, true).slideUp();
            } else {
              $(".submenu").stop(true, true).slideUp(); // 다른 서브메뉴 닫기
                $submenu.stop(true, true).slideDown(); 
            }
            }
        });


        $('.main-menu-a').click(function (e) {
            var $submenu = $(this).next('.submenu'); 

            if ($submenu.length > 0) { 
                e.preventDefault(); 
                
                if ($submenu.is(":visible")) {
                    $submenu.stop(true, true).slideUp();
                } else {
                $(".submenu").stop(true, true).slideUp(); // 다른 서브메뉴 닫기
                $submenu.stop(true, true).slideDown(); // 현재 서브메뉴 열기
                }
                }
        });

            
        $('.main-menu-a').mouseover(function (e) {
            var $submenu = $(this).next('.submenu'); 
        
            if ($submenu.length > 0) { 
                e.preventDefault(); 
        
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



    //헤더 서브 메뉴
    $(document).ready(function () {
        $(".submenu").hide();
    
        // 포트폴리오 메뉴에 마우스 오버 시 서브메뉴 열기
        $("#hover").hover(
            function () {
                if (!$(".submenu").is(":visible")) { 
                    $(this).find(".submenu").stop(true).slideDown();
                }
            },
            function () {
                $(this).find(".submenu").stop(true).slideUp();
            }
        );
    
        $(".submenu-a").on("click", function (event) {
            event.preventDefault();
            var target = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(target).offset().top
            }, 800);
            $(".submenu").stop(true).slideUp(); // 서브메뉴 닫기
        });
    });

    // //헤더 서브메뉴 
    // $(document).ready(function() {
    //     // 메뉴 클릭 시 부드러운 스크롤 효과
    //     $('.submenu-a').on('click', function(event) {
    //         // 기본 클릭 이벤트 방지
    //         event.preventDefault();

    //         var target = $(this).attr('href');

    //         $('html, body').animate({
    //             scrollTop: $(target).offset().top
    //         }, 800); // 800ms 동안 스크롤

    //         $('.submenu').css({ right: "-100vw" }); /// 서브메뉴 닫기
    //     });
    // });






    // `.main-menu-a` 클릭 이벤트 처리
$('.main-menu-a').click(function (e) {
    var $submenu = $(this).next('.submenu'); 

    if ($submenu.length > 0) { 
        e.preventDefault(); // 기본 링크 이동 방지
        if ($submenu.is(":visible")) {
            $submenu.stop(true, true).slideUp();
        } else {
            $('.submenu').stop(true, true).slideUp(); // 다른 서브메뉴 닫기
            $submenu.stop(true, true).slideDown(); // 현재 서브메뉴 열기
        }
    } else {
        $('#main-menu-box').css({ right: "-100vw" });
    }
});