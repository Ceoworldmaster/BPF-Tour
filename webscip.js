
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
// Lấy tất cả các mục menu
const menuItems = document.querySelectorAll('#main-menu li a');

// Lặp qua các mục menu để kiểm tra URL
menuItems.forEach(item => {
    if (item.href === window.location.href) {
        item.parentElement.classList.add('active');
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


//Thông báo chân trang
document.getElementById("subscribeBtn").addEventListener("click", function() {
    var emailInput = document.getElementById("emailInput").value;

    // Kiểm tra xem ô nhập liệu có nội dung không
    if (emailInput.trim() !== "") {
        // Ẩn ô input và nút Subscribe
        document.getElementById("emailInput").style.display = "none";
        document.getElementById("subscribeBtn").style.display = "none";

        // Hiển thị thông báo cảm ơn
        document.getElementById("emailresponseMessage").style.display = "block";
    } else {
        // Nếu ô nhập liệu trống, hiển thị thông báo lỗi
        alert("Vui lòng nhập email của bạn.");
    }
});
//Đếm lượt truy cập
function updateVisitCount() {
    let visitCount = parseInt(localStorage.getItem('visitCount')) || 0; // Lấy số lượt truy cập hoặc bắt đầu từ 0
    visitCount++; // Tăng số lượt truy cập lên 1
    localStorage.setItem('visitCount', visitCount); // Cập nhật vào localStorage
    document.getElementById('visitCount').textContent = 'Lượt truy cập cá nhân: ' + visitCount; // Cập nhật giao diện
}

        // Lần đầu tải trang
updateVisitCount();

// Lắng nghe sự kiện storage để cập nhật số lượt truy cập khi có thay đổi từ tab khác
window.addEventListener('storage', (event) => {
    if (event.key === 'visitCount') {
        document.getElementById('visitCount').textContent = 'Lượt truy cập cá nhân: ' + event.newValue;
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'PrintScreen') {
      alert("Chụp màn hình không được phép!");
      e.preventDefault();
    }
  });

  // Xóa dữ liệu clipboard nếu người dùng cố chụp màn hình
  document.addEventListener('keyup', function (e) {
    if (e.key === 'PrintScreen') {
      navigator.clipboard.writeText('');
      alert("Nội dung đã được bảo vệ!");
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        alert('Nội dung được bảo vệ.');
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('Nội dung được bảo vệ.');
});


//cookie//
document.addEventListener('DOMContentLoaded', function () {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookie');
    const declineButton = document.getElementById('decline-cookie');

    // Kiểm tra nếu người dùng đã đồng ý cookie
    const hasAcceptedCookies = localStorage.getItem('acceptedCookies');

    if (hasAcceptedCookies === 'true') {
        cookieBanner.style.display = 'none'; // Ẩn cookie banner nếu đã đồng ý
    } else {
        cookieBanner.style.display = 'block'; // Hiện cookie banner nếu chưa đồng ý
    }

    // Xử lý khi người dùng đồng ý cookie
    acceptButton.addEventListener('click', function () {
        localStorage.setItem('acceptedCookies', 'true'); // Lưu trạng thái đồng ý vào Local Storage
        cookieBanner.style.display = 'none'; // Ẩn banner
    });

    // Xử lý khi người dùng không đồng ý
    declineButton.addEventListener('click', function () {
        cookieBanner.style.display = 'none'; // Ẩn banner, nhưng không lưu trạng thái
    });
});
