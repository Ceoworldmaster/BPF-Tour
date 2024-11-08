//Thanh điều hướng
$(document).ready(function() {
    $('#toggle').click(function() {
        $('nav').slideToggle();
    });

    // Handle resizing
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('nav').show(); // Ensure nav is visible on large screens
        } else {
            $('nav').hide(); // Hide nav on smaller screens
        }
    });
});

// Toggle the main menu on mobile
document.getElementById('toggle').addEventListener('click', function () {
    var nav = document.querySelector('nav');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    } else {
        nav.classList.add('active');
    }
});

// Toggle submenu when clicking on the parent li in mobile
var submenuParents = document.querySelectorAll('.has-submenu > a');
submenuParents.forEach(function (parent) {
    parent.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default action of the link
        var submenu = this.nextElementSibling;
        if (submenu.classList.contains('active')) {
            submenu.classList.remove('active');
        } else {
            submenu.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn'); // Đảm bảo rằng bạn có phần tử với id này

    // Hiển thị nút scroll-to-top khi người dùng cuộn xuống
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
            scrollToTopBtn.classList.remove('hide');
        } else {
            scrollToTopBtn.classList.remove('show');
            scrollToTopBtn.classList.add('hide');
        }
    });

    // Cuộn lên đầu trang khi nhấp vào nút
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});