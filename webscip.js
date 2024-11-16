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

//Ngắn chặn copy
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'c') {
        event.preventDefault(); // Ngừng hành động mặc định của phím Ctrl + C
        alert('Chức năng sao chép bị vô hiệu hóa trên trang này.');
    }
});

document.addEventListener('copy', function(event) {
    event.preventDefault(); // Ngừng hành động sao chép
    alert('Chức năng sao chép bị vô hiệu hóa trên trang này.');
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
const firebaseConfig = {
    apiKey: "AIzaSyAjZcLZsl4tqpj8-YhwAdJ5JfO-PAWcps8",
    authDomain: "bpf-tour-18947.firebaseapp.com",
    projectId: "bpf-tour-18947",
    storageBucket: "bpf-tour-18947.firebasestorage.app",
    messagingSenderId: "262114152500",
    appId: "1:262114152500:web:4486819aadd60bab5c7a61",
    measurementId: "G-768NGG728M"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const visitCountRef = firebase.database().ref('visitCount');

  // Đọc số lượt truy cập từ database và hiển thị
  visitCountRef.on('value', (snapshot) => {
    const count = snapshot.val();
    document.getElementById('visitCount').textContent = 'Lượt truy cập: ' + count;
  });

  // Tăng số lượt truy cập khi người dùng vào trang
  visitCountRef.transaction((currentCount) => {
    return (currentCount || 0) + 1; // Nếu giá trị null, đặt về 0 trước khi tăng
  });
