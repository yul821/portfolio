
// 배경 이미지 배열
const mobileImages = [
    '../images/background_blue_mobile_2.png',
    '../images/background_orange_mobile.png'
];

const desktopImages = [
    '../images/background_blue_pc_3.png',
    '../images/background_orange_pc.png'
];

// 현재 화면 크기에 따라 사용할 이미지 배열 선택
let currentImages = window.innerWidth < 768 ? mobileImages : desktopImages;
let currentIndex = 0;

// 배경 이미지 변경 함수
function changeBackground() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    document.body.style.transition = 'background-image 1s ease-in-out'; 
    document.body.style.backgroundImage = `url(${currentImages[currentIndex]})`;
}

setInterval(changeBackground, 30000);


// top 버튼 
$(document).ready(function() {
    $('.top-btn a').click(function(event) {
        event.preventDefault(); // 기본 클릭 동작 방지
        $('html, body').animate({
            scrollTop: $('#header-top').offset().top // 헤더로 스크롤
        }, 1000); // 1000ms 동안 부드럽게 스크롤
    });
});


// 스크롤 이벤트
$(document).ready(function() {
    $(window).scroll(function() {
        const enjoyScrollTop = $('.renewal-page').offset().top;
        console.log (window.scrollY);
        console.log (enjoyScrollTop);
    
        if ($(this).scrollTop() >= enjoyScrollTop) {
            $('.renewal-page').addClass('renewal-page-ani');
            console.log ($(this).scrollTop());
        } else {
            $('.renewal-page').removeClass('renewal-page-ani');
        }
    });
});

