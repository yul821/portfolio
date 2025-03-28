
//아이콘 호버
function resetHover() {
    $('.icon1, .icon2, .icon3, .icon4, .icon5, .icon6, .icon7, .icon8, .icon9, .icon10').removeClass('hover');
}

setInterval(function() {
    resetHover();
}, 30000);

var winWidth = "";
if (window.innerWidth != null) {
    winWidth = window.innerWidth + "";
} else if (window.document != null && window.document.documentElement != null && window.document.documentElement.clientWidth != null) {
    winWidth = window.document.documentElement.clientWidth + "";
} else if (window.document != null && window.document.body != null && window.document.body.offsetWidth != null) {
    winWidth = window.document.body.offsetWidth + "";
}
console.log(winWidth);
    




$(function() {
    function mobile() {
        $(".body-back-mobile img:gt(0)").hide(); 
    
        // fadeOut(), fadeIn()
        setInterval(function() {
            $(".body-back-mobile img:first").fadeOut()
            .next('img').fadeIn()
            .end().appendTo('.body-back-mobile'); 
        }, 30000);
    }
    function pc() {
        $(".body-back-pc img:gt(0)").hide(); 
    
        // fadeOut(), fadeIn()
        setInterval(function() {
            $(".body-back-pc img:first").fadeOut()
            .next('img').fadeIn()
            .end().appendTo('.body-back-pc'); 
        }, 30000);
    }
    

    $(window).load( function() {
        if (winWidth >= 1024) {
            pc();
        } else {
            mobile();
        }
    });
});




$(document).ready(function () {
    function isMobile() {
        return $(window).width() < 768; 
    }

    function toggleOrange() {
        if (!isMobile()) { // 모바일이 아닐 때만 실행
            $('#orange_main').fadeIn(1000, function () {
                setTimeout(function () {
                    $('#orange_main').fadeOut(1000);
                }, 29000);
            });
        }
    }

    setTimeout(toggleOrange, 30000); // 30초 후에 처음으로 호출
    setInterval(toggleOrange, 30000); // 이후 30초마다 호출

    function toggleElement(selector) {
        if (!isMobile()) { // 모바일이 아닐 때만 실행
            $(selector).fadeIn(1000, function () {
                setTimeout(function () {
                    $(selector).fadeOut(1000);
                }, 29000);
            });
        }
    }

    function toggleElements() {
        toggleElement('#blue_main');
        toggleElement('#blue-star');
        toggleElement('#blue_contact');
        toggleElement('#blue_semicircle');
        toggleElement('#blue_semicircle2');
    }

    toggleElements();

    setInterval(toggleElements, 30000);
});





// aboutme  애니메이션
var windowWidth = $(window).width();

// 초기 상태 설정

$(`.aboutme img`).css({ 'opacity': 0, 'transform': 'translateX(-400px)' });
$(`.introduc`).css({ 'opacity': 0, 'transform': 'translateX(400px)' });



$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    // 모든 화면 크기에서 적용되는 애니메이션
    $(`.aboutme img`).each(function () {
        var offsetTop = $(this).offset().top;
            $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    });
    $(`.introduc`).each(function () {
        var offsetTop = $(this).offset().top;
        if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
            $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
        }
    });

});


//skill h2 애니메이션
$(document).ready(function() {
    $(window).scroll(function() {
        $('.about-ani').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop() + $(window).height();
            
            if (scroll > position) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});



//skill h2 애니메이션
$(document).ready(function() {
    $(window).scroll(function() {
        $('.h2-ani').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop() + $(window).height();
            
            if (scroll > position) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});

            
            
// //skill > .icon-box 애니메이션
$(document).ready(function() {
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var iconBoxOffset = $('.icon-box').offset().top;
        var windowHeight = $(window).height();

        if (scrollTop + windowHeight > iconBoxOffset) {
            $('.icon-box').addClass('visible');
        } else {
            $('.icon-box').removeClass('visible');
        }
    });
});





//리뉴얼 페이지 스크롤 애니메이션
window.addEventListener('scroll', function (event) {
    event.preventDefault(); // 기본 스크롤 동작 방지

    const section = document.getElementById('renewal');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        section.classList.add('renewal-page-ani');
    } else {
        section.classList.remove('renewal-page-ani');
    }
});

//상세페이지 스크롤 애니메이션
window.addEventListener('scroll', function (event) {
    event.preventDefault(); // 기본 스크롤 동작 방지

    const section = document.getElementById('detailed');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        section.classList.add('detailed-page-ani');
    } else {
        section.classList.remove('detailed-page-ani');
    }
});

//배너디자인 스크롤 애니메이션
window.addEventListener('scroll', function (event) {
    event.preventDefault(); // 기본 스크롤 동작 방지

    const section = document.getElementById('banner');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        section.classList.add('banner-design-ani');
    } else {
        section.classList.remove('banner-design-ani');
    }
});

//앱디자인 스크롤 애니메이션
window.addEventListener('scroll', function (event) {
    event.preventDefault(); // 기본 스크롤 동작 방지

    const section = document.getElementById('app');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        section.classList.add('app-design-ani');
    } else {
        section.classList.remove('app-design-ani');
    }
});

//패키지디자인 스크롤 애니메이션
window.addEventListener('scroll', function (event) {
    event.preventDefault(); // 기본 스크롤 동작 방지

    const section = document.getElementById('packge');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        section.classList.add('package-design-ani');
    } else {
        section.classList.remove('package-design-ani');
    }
});

//카드뉴스디자인 스크롤 애니메이션
window.addEventListener('scroll', function (event) {
    event.preventDefault(); // 기본 스크롤 동작 방지

    const section = document.getElementById('cardnews');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        section.classList.add('cardnews-design-ani');
    } else {
        section.classList.remove('cardnews-design-ani');
    }
});

//팀 프로젝트 스크롤 애니메이션
window.addEventListener('scroll', function (event) {
    event.preventDefault(); // 기본 스크롤 동작 방지

    const section = document.getElementById('team');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        section.classList.add('teamproject-ani');
    } else {
        section.classList.remove('teamproject-ani');
    }
});




