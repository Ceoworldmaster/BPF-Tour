function emailSend() {
    // Lấy giá trị từ các trường trong form
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Kiểm tra nếu tất cả các trường đều được nhập
    if (fname && lname && email && phone && message) {
        var messageBody = `
            <strong>First Name:</strong> ${fname}<br/>
            <strong>Last Name:</strong> ${lname}<br/>
            <strong>Email:</strong> ${email}<br/>
            <strong>Phone:</strong> ${phone}<br/>
            <strong>Message:</strong> ${message}
        `;

        // Sử dụng SMTP.js để gửi email
        Email.send({
            Host: "smtp.elasticemail.com",  // Thay bằng thông tin SMTP của bạn
            Username: "ceoworldmaster02032010@gmail.com",  // Đổi thành email của bạn
            Password: "18790E2DA4A64A5D7BED6C375FB6391E8EB1",  // Mật khẩu SMTP của bạn
            To: 'ceoworldmaster02032010@gmail.com',  // Đổi thành email bạn muốn nhận tin nhắn
            From: email,  // Email người gửi
            Subject: "Tin nhắn từ trang web du lịch",
            Body: messageBody
        }).then(
            message => {
                if (message == 'OK') {
                    swal("SUCCESS", "Tin nhắn của bạn đã được gửi thành công", "success");
                } else {
                    swal("ERROR", "Gửi tin nhắn không thành công. ", "error");
                }
            }
        );
    }
}