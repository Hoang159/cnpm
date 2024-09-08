// Thay đổi ảnh nền mỗi 3 giây
document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slides img');
    
    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000); // Thay đổi ảnh mỗi 3 giây
    }
    
    showSlides();
});

//Chuyển phần trang chủ, du lịch, ẩm thực, lễ hội tương ứng
function showSection(section) {
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }
    document.getElementById(section).classList.add('active');
}
