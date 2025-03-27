// window.onload = function() {
//     // 배경 이미지 배열
//     const mobileImages = [
//         '../images/background_blue_mobile_2.png',
//         '../images/background_orange_mobile.png'
//     ];
    
//     const desktopImages = [
//         '../images/background_blue_pc_test.png',
//         '../images/background_orange_pc_test.png'
//     ];
    
//     // 현재 화면 크기에 따라 사용할 이미지 배열 선택
//     let currentImages = window.innerWidth < 768 ? mobileImages : desktopImages;
//     let currentIndex = 0;
    
//     // 배경 이미지 변경 함수
//     function changeBackground() {
//         currentIndex = (currentIndex + 1) % currentImages.length;
//         document.body.style.background = `url(${currentImages[currentIndex]}) no-repeat top left`;
//         document.body.style.backgroundSize = `cover`; 
//         document.body.style.backgroundPosition = `center`; 
//         document.body.style.transition = 'background-image 1s ease-in-out';

//     }
    
//     setInterval(changeBackground, 30000);
// }


$(document).ready(function() {
    const mobileImages = [
        '../images/background_blue_mobile_2.jpg',
        '../images/background_orange_mobile.jpg'
    ];

    const desktopImages = [
        '../images/background_blue_pc_test.jpg',
        '../images/background_orange_pc_test.jpg'
    ];

    let currentImages = $(window).width() < 768 ? mobileImages : desktopImages;
    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % currentImages.length;
        $('body').css({
            'background-image': `url(${currentImages[currentIndex]})`,
            'background-repeat': 'no-repeat',
            'background-position': 'top left',
            'background-size': 'cover',
            'transition': 'background-image 1s ease-in-out'
        });
    }

    // 초기 배경 이미지 설정
    $('body').css('background-image', `url(${currentImages[currentIndex]})`);

    setInterval(changeBackground, 30000);

    $(window).resize(function() {
        currentImages = $(window).width() < 768 ? mobileImages : desktopImages;
        currentIndex = 0; // 인덱스를 초기화하여 새로 고침
        $('body').css('background-image', `url(${currentImages[currentIndex]})`);
    });
});





// // #blue-main 이미지 
// $(document).ready(function () {
//     function toggleBlue() {
//         $('#blue_main').fadeIn(1000, function () {
//             setTimeout(function () {
//                 $('#blue_main').fadeOut(1000);
//             }, 29000);
//         });
//     }

//     toggleBlue();

//     setInterval(toggleBlue, 30000);
// });



// // #blue-star 이미지 
// $(document).ready(function () {
    //     function toggleStar() {
        //         $('#blue-star').fadeIn(1000, function () {
            //             setTimeout(function () {
                //                 $('#blue-star').fadeOut(1000);
                //             }, 29000);
                //         });
                //     }
                
                //     toggleStar();
                
                //     setInterval(toggleStar, 30000);
                // });
                
                
                // // #blue_semicircle 이미지 
                // $(document).ready(function () {
                    //     function toggleSemicircle() {
                        //         $('#blue_semicircle').fadeOut(1000, function () {
                            //             setTimeout(function () {
                                //                 $('#blue_semicircle').fadeIn(1000);
                                //             }, 29000);
                                //         });
                                //     }
                                
                                //     toggleSemicircle();
                                
                                //     setInterval(toggleSemicircle, 30000);
                                // });
                                
                                
                                // // #blue_contact 이미지 
                                // $(document).ready(function () {
                                    //     function toggleContact() {
                                        //         $('#blue_contact').fadeIn(1000, function () {
                                            //             setTimeout(function () {
                                                //                 $('#blue_contact').fadeOut(1000);
                                                //             }, 29000);
                                                //         });
                                                //     }
                                                
                                                //     toggleContact();
                                                
                                                //     setInterval(toggleContact, 30000);
                                                // });
                                                
// #orange_main 이미지 
$(document).ready(function () {
    function toggleOrange() {
        $('#orange_main').fadeOut(1000, function () {
            setTimeout(function () {
                $('#orange_main').fadeIn(1000);
            }, 29000);
        });
    }

    toggleOrange();

    setInterval(toggleOrange, 30000);
});

//고정 이미지 
$(document).ready(function () {
    function toggleElement(selector) {
        $(selector).fadeIn(1000, function () {
            setTimeout(function () {
                $(selector).fadeOut(1000);
            }, 29000);
        });
    }

    function toggleElements() {
        toggleElement('#blue_main');
        toggleElement('#blue-star');
        toggleElement('#blue_contact');
        toggleElement('#blue_semicircle');
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






// $(document).ready(function() {
//     $(window).scroll(function() {
//         var scrollTop = $(this).scrollTop();
//         var contactOffset = $('.contact').offset().top;

//         // 스크롤 위치가 #contact 요소의 위치에 도달했을 때
//         if (scrollTop + $(window).height() > contactOffset) {
//             $('.contact').addClass('visible');
//             $('.p-txt').addClass('visible');
//         }
//     });
// });


// footer 애니메이션 
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