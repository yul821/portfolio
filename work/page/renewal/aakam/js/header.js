window.addEventListener('scroll', function() {
const header = document.getElementById('header');
if (window.scrollY > 50) { // 스크롤 위치가 50px 이상이면
    header.classList.add('scrolled');
} else {
    header.classList.remove('scrolled');
}
});