// const backgrounds = [
//     '../images/background_orange_pc.png','../images/background_blue_pc_3.png'
// ];

// let currentIndex = 0;

// // 배경을 변경하는 함수
// function changeBackground() {
//     // body 요소 선택
//     const body = document.body;

//     // 다음 배경 인덱스 계산
//     currentIndex = (currentIndex + 1) % backgrounds.length;

//     // 배경 이미지 변경
//     body.style.transition = 'background-image 1s ease-in-out'; // 부드러운 전환 효과
//     body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
// }

// // 1분마다 배경 변경 (60000ms)
// setInterval(changeBackground, 30000); //일정시간이 지나면 배경 변경
// //모바일 버전 배경도 설정해야됨



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




// document.getElementById('scrollToTop').addEventListener('click', function(event) {
//     event.preventDefault(); // 기본 동작 방지
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth' // 부드러운 스크롤
//     });
// });
