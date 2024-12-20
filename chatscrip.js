function levenshtein(a, b) {
    const alen = a.length;
    const blen = b.length;
    const dp = Array(alen + 1).fill(null).map(() => Array(blen + 1).fill(null));

    for (let i = 0; i <= alen; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= blen; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= alen; i++) {
        for (let j = 1; j <= blen; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,     // Deletion
                dp[i][j - 1] + 1,     // Insertion
                dp[i - 1][j - 1] + cost // Substitution
            );
        }
    }

    return dp[alen][blen];
}

function getBotResponse(input) {
    const responses = {
        "hello": "꧁Xin chào ✌! Tôi rất sẵn sàng giúp đỡ và giải đáp thắc mắc của bạn trong chuyến hành trình khám phá Bình Phước này꧂",
        "hello": "꧁Xin chào ✌! Tôi rất sẵn sàng giúp đỡ và giải đáp thắc mắc của bạn trong chuyến hành trình khám phá Bình Phước này꧂",
        "hi": "꧁Xin chào ✌! Tôi rất sẵn sàng giúp đỡ và giải đáp thắc mắc của bạn trong chuyến hành trình khám phá Bình Phước này꧂",
        "xin chao": "꧁Xin chào ✌! Tôi rất sẵn sàng giúp đỡ và giải đáp thắc mắc của bạn trong chuyến hành trình khám phá Bình Phước này꧂",
        "how are you": "Tôi rất sẵn lòng giúp đỡ bạn trong hành trình khám phá Bình Phước",
        "what's your name": "Tôi tên là Thái. Họ và tên đầy đủ là Chatbot Nhà Tìm Kiếm Thông Thái.",
        "bye": "Goodbye! Have a great day!, Rất trân thành cảm ơn bạn vì đã tin tưởng",
        "yes": "Cảm ơn bạn vì đã tưởng tưởng, tôi sẽ cố gắng hết sức",
        "no": "Tôi sẽ cố gắng học tập thêm để giúp đỡ bạn tốt hơn, cảm ơn bạn vì đã góp ý",
        "thoi tiet hom nay": "Tôi không thể kiểm tra thời tiết, bạn có thể tra cứu trên các trang web dự báo thời tiết.",
        "khu du lich noi tieng": "Khu du lịch Bù Gia Mập và hồ Suối Cam là những điểm nổi tiếng.",
        "ban co the lam gi": "Tôi có thể cung cấp thông tin về du lịch, văn hóa và các điểm đến tại Bình Phước. Bạn có thể hỏi tôi bất kỳ điều gì liên quan đến địa phương!",
        "tac gia tac pham": "Tác giả của sản phẩm là bạn Nguyễn Hồng Dương (Tổng chủ biên, người viết web), bạn Hồ Quốc Trung (Nội dung, đồ họa) và cô Nguyễn Thị Vương (Biên tập nội dung, hướng dẫn)",
        "goi y": [
            "Thông tin về Bình Phước?",
            "Kể tên các địa điểm du lịch sinh thái của Bình Phước",
            "Kể tên các địa điểm di tích lịch sử của Bình Phước?",
            "Kể tên các làng nghề của Bình Phước?",
            "Kể tên các lễ hội của Bình Phước?",
            "Kể tên các đặc sản của Bình Phước?",
            "Kể tên các địa điểm lưu trú tại Bình Phước?"
        ],
        "hind": [
            "Thông tin về Bình Phước?",
            "Kể tên các địa điểm du lịch sinh thái của Bình Phước",
            "Kể tên các địa điểm di tích lịch sử của Bình Phước?",
            "Kể tên các làng nghề của Bình Phước?",
            "Kể tên các lễ hội của Bình Phước?",
            "Kể tên các đặc sản của Bình Phước?",
            "Kể tên các địa điểm lưu trú tại Bình Phước?"
        ],
        // Giới thiệu
        "thong tin binh phuoc": "Bình Phước là tỉnh miền núi thuộc vùng Đông Nam Bộ, gồm 1 thành phố, 3 thị xã và 7 huyện, với diện tích tự nhiên 6 873,55 km² và dân số 1 034,667 người (năm 2022). Bình Phước nằm trong vùng kinh tế trọng điểm phía Nam và tiếp giáp khu vực Tây Nguyên, là khu vực có nhiều nét truyền thống văn hóa độc đáo, đồng thời có đường biên giới với Campuchia.", 
        "don vi hanh chinh": [
            "Các đơn vị hành chính của tỉnh Bình Phước là:",
            "Thành phố Đồng Xoài",
            "Thị xã Bình Long",
            "Thị xã Phước Long",
            "Thị xã Chơn Thành",
            "Huyện Hớn Quản",
            "Huyện Lộc Ninh",
            "Huyện Bù Đốp",
            "Huyện Bù Gia Mập",
            "Huyện Bù Đăng",
            "Huyện Phú Riềng",
            "Huyện Đồng Phú"
        ],
        // Di tích lịch sử
        "ta thiet": [
            "Theo Địa chí Bình Phước, Căn cứ Tà Thiết là di tích lịch sử quốc gia thuộc xã Lộc Thành, huyện Lộc Ninh, có diện tích 3.500ha. Trong hai cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ, căn cứ Bộ Chỉ huy Miền đóng tại Tà Thiết là căn cứ cuối cùng được thành lập ở chiến trường miền Nam.","---",
            "Xem thêm tại: https://binhphuoc.gov.vn/vi/dukhach/di-tich-van-hoa-61/khu-di-tich-quoc-gia-dac-biet-bo-chi-huy-mien-ta-thiet-105.html",
            "https://youtu.be/oOMigIcaEaI"],
        "can cu bo chi huy mien": [
            "Theo Địa chí Bình Phước, Căn cứ Tà Thiết là di tích lịch sử quốc gia thuộc xã Lộc Thành, huyện Lộc Ninh, có diện tích 3.500ha. Trong hai cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ, căn cứ Bộ Chỉ huy Miền đóng tại Tà Thiết là căn cứ cuối cùng được thành lập ở chiến trường miền Nam.","---",
            "Xem thêm tại: https://binhphuoc.gov.vn/vi/dukhach/di-tich-van-hoa-61/khu-di-tich-quoc-gia-dac-biet-bo-chi-huy-mien-ta-thiet-105.html;",
            " https://youtu.be/oOMigIcaEaI"],
        "duong ong xang dau vk96": [
            "Di tích Điểm cuối đường ống dẫn xăng dầu VK96 tọa lạc tại xã Bù Gia Mập, huyện Bù Gia Mập, tỉnh Bình Phước. Di tích thuộc hệ thống di tích lịch sử quốc gia đặc biệt Đường Trường Sơn – Đường Hồ Chí Minh.","---",
            " Xem thêm tại: https://baotangbinhphuoc.org.vn/di-tich-quoc-gia-dac-biet-diem-cuoi-duong-ong-dan-xang-dau-vk96/"],
        "bon xang vk98": [
            "Di tích Bồn xăng – Kho nhiên liệu VK98 tọa lạc tại xã Lộc Quang, huyện Lộc Ninh, tỉnh Bình Phước. Di tích thuộc hệ thống di tích lịch sử quốc gia đặc biệt Đường Trường Sơn – Đường Hồ Chí Minh. Tổng kho nhiên liệu VK98 được xây dựng năm 1974, tọa lạc quanh ngọn đồi 117 (tên một điểm cao trong bản đồ quân sự) thuộc xã Lộc Quang, huyện Lộc Ninh, với diện tích 10ha, gồm 7 bồn, mỗi bồn có sức chứa 250.000 lít, Tổng kho nhiên liệu VK98 có trữ lượng 1.750.000 lít.","---",
            " Xem thêm tại: https://baotangbinhphuoc.org.vn/di-tich-quoc-gia-dac-biet-bon-xang-kho-nhien-lieu-vk98/"],
        "diem cuoi ho chi minh": [
            "Di tích điểm cuối đường mòn Hồ Chí Minh - 1973 nằm ở ngã tư Chơn Thành, phường Hưng Long, thị xã Chơn Thành, tỉnh Bình Phước.","---",
            " Xem thêm tại: https://baobinhphuoc.com.vn/news/200/99817/mot-so-thong-tin-ve-doan-cuoi-duong-ho-chi-minh-o-binh-phuoc"],
        "mo 3000 an loc": [
            "Di tích Mộ 3.000 đồng bào An Lộc bị đế quốc Mỹ tàn sát ngày 03/10/1972 (còn gọi là Mộ tập thể 3.000 người) tọa lạc tại phường An Lộc, thị xã Bình Long, tỉnh Bình Phước, là một trong những chứng tích ghi dấu tội ác chiến tranh mà Mỹ – ngụy đã gây ra cho nhân dân ta nói chung và nhân dân Bình Long nói riêng trong kháng chiến chống Mỹ.","---",
            " Xem thêm tại: "],
        "chua quang minh": "Chùa Quang Minh ở thành phố Đồng Xoài.",
        //Du lịch sinh thái
        'vuon quoc gia bu gia map':[
            'Vườn quốc gia Bù Gia Mập có tổng diện tích là 25.601,18 ha, trong đó đó diện tích rừng tự nhiên là 25.505 ha, rừng gỗ lá rộng là 5.918 ha (4.134 ha rừng giàu, 1.310 ha rừng trung bình, 169 ha rừng nghèo, 304,8 rừng phục hồi, rừng hỗn giao 17.851 ha, và rừng tre nứa, lồ ô 1.776,5 ha). Đây là nơi lý tưởng phục vụ cho công tác nghiên cứu khoa học nhằm bảo tồn nguồn gene quý hiếm của các loài động, thực vật.','---',
            'Xem thêm tại: http://vuonquocgiabugiamap.vn/vi/news/Gioi-thieu/Gioi-thieu-ve-Vuon-quoc-gia-Bu-Gia-Map-274/'],
        'trang co bu lach':[
            'Cách trung tâm huyện Bù Đăng, tỉnh Bình Phước hơn 20km, ở xã Đồng Nai có một trảng cỏ xanh rờn đến mênh mông được bao bọc giữa những cánh rừng nguyên sinh bạt ngàn, như cách biệt với thế giới bên ngoài.','---',
            'Xem thêm tại: https://www.vntrip.vn/cam-nang/trang-co-bu-lach-58434'],
        'cao su bu dang':['Rừng cao su ở Bù Đăng nổi tiếng trồng nhiều cao su nhất của tỉnh Bình Phước, với những hàng cao su bạt ngàn. Vào khoảng thời gian cuối tháng 1 cho đến đầu tháng 4 là những cánh rừng phương Nam sẽ rực lên một màu đỏ. Đó chính là mùa của những cánh rừng cao su đang đồng loạt thay lá trong đó có những cánh rừng cao su tại Bình Phước.','---',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/lac-vao-rung-cao-su-bu-dang-bat-ngan-tai-binh-phuoc-7184'],
        'nong trai phu gia':[
            'Được công nhận là điểm du lịch nông thôn của tỉnh hơn 2 năm nay, trong không gian xinh đẹp, Điểm du lịch sinh thái Phú Gia ngày càng tạo nên nhiều hoạt động vui chơi, giải trí phù hợp dành cho gia đình, nhóm bạn bè hay cả những nhóm dã ngoại của học sinh ở các trường trong và ngoài tỉnh về cắm trại, vui chơi, giải trí cuối tuần hoặc dịp lễ, tết.','---',
            'Xem thêm tại: https://baobinhphuoc.com.vn/news/20/152231/an-tuong-diem-hen-sinh-thai-phu-gia'],
        'khu du lich sinh thai my le':[
            'Lâm Viên Mỹ Lệ (huyện Bù Gia Mập, tỉnh Bình Phước) địa điểm thu hút lượng lớn du khách tìm đến sau chuỗi ngày “ngủ đông” bởi dịch COVID -19. Tại đây du khách sẽ được thỏa sức vui chơi, tham quan sở thú, chơi đạp vịt, cắm trại, hoạt động teambuilding, hái trái cây hay thư giãn trong hồ bơi với nhiều trải nghiệm đáng nhớ.','---',
            'Xem thêm tại: https://dangcongsan.vn/thong-tin-kinh-te/lam-vien-my-le-diem-den-ly-tuong-tai-binh-phuoc-617539.html'],
        'dak mai':[
            'Thác Đắk Mai nằm ở vùng khá heo hút của Bình Phước nên vẫn giữ được cho mình vẻ đẹp hoang sơ, tĩnh lặng vốn có.','---',
            'Thác Đắk Mai Bình Phước có độ cao 12m và rộng 50m, nằm giữa núi rừng tĩnh lặng,  quanh năm tung bọt trắng xóa. Nơi đây tuy không có vẻ đẹp quá đỗi ngất ngây như những dòng thác ở đại ngàn Tây Nguyên nhưng vẫn sở hữu cảnh quan thiên nhiên vừa hoang sơ vừa huyền bí. Khi ghé đến Thác Đắk Mai, bạn sẽ được hòa mình vào thiên nhiên tươi đẹp, đắm mình trong bầu không khí trong lành, khám phá cuộc sống giản dị của các bản làng dân tộc thiểu số tại đây.','---',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/kham-pha-thac-dak-mai-voi-ve-dep-hung-vi-va-say-dam-long-nguoi-7101'],
        'soc bom bo':[
            'Sóc Bom Bo là điểm tham quan thuộc xã Bình Minh, huyện Bù Đăng, tỉnh Bình Phước. Địa điểm thuộc top điểm đến ở Bình Phước này nằm cách trung tâm thị xã Đồng Xoài khoảng 50km và là địa điểm gắn liền với nhân dân ta trong công cuộc kháng chiến chống Mĩ hào hùng. Khi ghé thăm Sóc Bom Bo bạn hoàn toàn không cần lo lắng về vấn đề tiền bạc bởi vì di tích lịch sử này hoàn toàn miễn phí vé vào cổng.','---',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/kham-pha-soc-bom-bo-binh-phuoc-qua-nhung-net-van-hoa-dac-trung-7183'],
        'uoi giai':[
            'Hồ Suối Giai Bình Phước là hồ nước đẹp với cảnh sắc thiên nhiên êm đềm, thư thái. Nơi đây rất lý tưởng cho các hoạt động dã ngoại, cắm trại, tận hưởng một ngày nghỉ thật vui vẻ và thoải mái.','---',
            'Xem thêm tại: https://dongxoai.binhphuoc.gov.vn/du-lich/khu-cam-trai-va-da-ngoai-ho-suoi-giai-tinh-binh-phuoc-247006'],
        'thac dung':[
            'Sở hữu cảnh sắc hoang sơ, Thác Đứng thu hút sự chú ý của đông đảo mọi người trong hành trình du lịch Bình Phước. Nếu có dịp đứng dưới chân con thác hùng vĩ, bạn mới hiểu lý do vì sao nơi đây lại trở thành thác nước đẹp nhất của vùng Bình Phước đặc sắc này.','---',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/ngo-ngang-thac-dung-voi-canh-sac-hoang-so-day-an-tuong-7089'],
        'thac mo':[
            'Thủy điện Thác Mơ là một công trình quan trọng tại tỉnh Bình Phước. Không những mang trong mình một nhiệm vụ cao cả là cung cấp nước và tạo ra dòng điện phục vụ đời sống nhân dân mà nơi đây còn sở hữu phong cảnh hữu tình.','---',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/ho-thuy-dien-thac-mo-diem-du-lich-tu-tuc-cho-nhung-kham-pha-tuyet-voi-6983'],
        'thac so 4':[
            'Thác số 4 – hồ Sóc Xiêm tọa lạc trên địa phận 2 xã Tân Lợi, An Khương của huyện Hớn Quản; cách thức thị trấn An Lộc, thị xã Bình Long khoảng 10 km. Quần thể Thác số 4 có cấu tạo vững bền, gồm nhiều tảng khối đá xanh chêm vào nhau, chắn ngang một khe suối nhỏ dại, uốn lượn theo một triền đồi và vắt ngang một cánh rừng hoang sơ, kỳ bí.','---',
            'Xem thêm tại: https://bietthungoctrai.vn/quan-the-thac-so-4-binh-phuoc/'],
        'thac voi':[
            'Thác Voi (hay còn được gọi là thác Nokrop) thuộc xã Đồng Nai, huyện Bù Đăng là một địa danh du lịch Bình Phước cực kỳ nổi tiếng. Con thác này được rất nhiều phượt thủ săn đón trong hành trình khám phá vẻ đẹp bí ẩn của núi rừng mà mẹ thiên nhiên đã ưu ái ban tặng cho con người nơi đây.','---',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/thac-voi-bu-dang-ve-dep-thien-nhien-ky-vi-giua-long-binh-phuoc-7029'],  
        'thuy dien thac mo':[
            'Thủy điện Thác Mơ là một công trình quan trọng tại tỉnh Bình Phước. Không những mang trong mình một nhiệm vụ cao cả là cung cấp nước và tạo ra dòng điện phục vụ đời sống nhân dân mà nơi đây còn sở hữu phong cảnh hữu tình.','---',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/ho-thuy-dien-thac-mo-diem-du-lich-tu-tuc-cho-nhung-kham-pha-tuyet-voi-6983'],
            
            
            
            
            
            //Ẩm thực
        "hat dieu":[
            "Là vùng đất chuyên trồng điều vì thế hạt điều rang muối Bình Phước luôn giữ được nguyên vỏ lụa, vị ngọt, hương thơm đậm đà. Khi ăn hạt điều giòn tan và giữ được hương vị lâu hơn hạt điều vùng khác.", "---",
            "Vỏ lụa là lớp vỏ mỏng màu loang lổ nâu đôi khi pha nhiều sắc trắng là lớp phân cách giữa nhân hạt điều ăn được và lớp vỏ cứng bảo vệ bên ngoài. Trong quy trình bóc tách hạt điều lấy nhân, khâu bóc tách lớp vỏ lụa này là một trong những khâu phức tạp nhất bởi rất dễ làm vỡ hạt gây giảm giá trị đáng kể cho sản phẩm. Tuy nhiên đối với hạt điều rang muối, việc bóc lớp vỏ này thực sự không khó, đặc biệt là với cách xử lý của đội ngũ rang mộc lành nghề của chúng tôi. Đây cũng là nguyên nhân người tiêu dùng dành nhiều thiện cảm cho loại hạt này.","---",
            "Xem thêm tại: https://dacsanvina.vn/10-mon-ngon-khong-the-nao-quen-o-vung-que-binh-phuoc-d106031/"],
        "ruou can":[
            "Rượu cần theo tiếng S'Tiêng là thức uống độc đáo và cũng là một loại sản vật gắn chặt với đời sống văn hóa, tâm linh, tín ngưỡng của đồng bào dân tộc S’Tiêng ở Bình Phước. Rượu cần được chế biến theo một quy trình công phu, nghiêm ngặt, đòi hỏi người chế biến phải có kinh nghiệm, tay nghề cao.","---",
            "Xem thêm tại:  https://bptv.vn/video/520/17569/nguoi-giu-huong-ruou-can-s-tieng-bptv"],
        'la nhip xao':[
            'Để chế biến món ăn này, người ta nhặt bỏ những lá sâu, rửa sạch, để ráo, vò sơ. Tỏi bóc vỏ, bằm sơ, sau đó xào với dầu nóng, rồi cho rau nhíp vào đảo nhanh tay, cho thịt bò đã được xào sẵn vào rồi rắc tiêu. Khi ăn, bạn sẽ cảm nhận được cả hương vị của núi rừng thấm đẫm nơi đầu lưỡi. ',"---",
            'Xem thêm tại: https://vietnamnet.vn/dac-san-binh-phuoc-thom-ngon-doc-la-thu-hut-du-khach-gan-xa-2161605.html'],
        'com lam':[
            'Cơm lam là một món ăn truyền thống đặc trưng cho bản sắc văn hóa của cộng đồng người dân tộc S’tiêng. Trong tiếng S’tiêng, cơm lam được gọi là “Biêng măn đừng ka” với nghĩa là nếp được nấu thành cơm trong ống nứa.', '---',
            'Cơm lam hay còn gọi là cơm ống là cơm được nấu chín trong ống tre, nứa hoặc ống lồ ô là món ngon của Bình Phước.','---',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/com-lam-binh-phuoc-mon-an-hap-dan-co-mat-tren-moi-mien-dat-nuoc-7161'],
        //Kinh tế
        // Lưu trú
        //Lữ hành
        //Tin tức
    };

    input = input.toLowerCase();

    let closestMatch = '';
    let minDistance = Infinity;

    for (const [key, value] of Object.entries(responses)) {
        const distance = levenshtein(input, key);
        if (distance < minDistance) {
            minDistance = distance;
            closestMatch = key;
        }
    }

    let response = responses[closestMatch] || "Oops, tôi không chắc về điều vừa rồi. Bạn có thể hỏi tôi câu khác?";

    // Nếu câu trả lời là một mảng (danh sách)
    if (Array.isArray(response)) {
        response = response.map(item => `- ${item}`).join('<br>');
    }

    return response;
}

function clearChatHistory() {
    localStorage.removeItem('chatHistory'); // Xóa lịch sử chat từ localStorage
    document.getElementById("chatbox").innerHTML = ""; // Xóa nội dung chatbox trên giao diện
}

function saveChatHistory() {
    const chatbox = document.getElementById("chatbox");
    localStorage.setItem('chatHistory', chatbox.innerHTML);
}

function loadChatHistory() {
    const savedChatHistory = localStorage.getItem('chatHistory');
    const chatbox = document.getElementById("chatbox");

    if (savedChatHistory) {
        chatbox.innerHTML = savedChatHistory;
    }

    // Gọi hiển thị tin nhắn ban đầu nếu cần
    displayInitialMessages();

    // Cuộn xuống cuối sau khi tất cả nội dung đã được thêm
    setTimeout(() => {
        chatbox.scrollTop = chatbox.scrollHeight; // Đảm bảo cuộn sau khi render
    }, 0);
}


function displayInitialMessages() {
    const initialMessages = [
        "꧁Xin chào ✌, tôi là NHÀ TÌM KIẾM THÔNG THÁI tại Bình Phước. Tôi có thể giúp gì cho bạn?꧂",
        "Lưu ý khi đặt câu hỏi cho tôi cần đúng chính tả và theo mẫu sau: (địa điểm) nằm ở đâu?; (thông tin/đặc sản/..) của Bình Phước?; Kể tên các (thông tin muốn tìm) của/tại Bình Phước?",
        "Ví dụ: Kể tên các địa điểm di tích lịch sử của Bình Phước?, thông tin của Bình Phước?, Gợi ý cho tôi về một số câu hỏi?"
    ];

    initialMessages.forEach(message => {
        const botWrapper = document.createElement("div");
        botWrapper.className = "message-wrapper";
        botWrapper.innerHTML = `<img src="https://imgur.com/CVql8td.png" alt="Bot" class="bot-avatar"><div class="bot-message">${message}</div>`;
        document.getElementById("chatbox").appendChild(botWrapper);
    });

    const chatbox = document.getElementById("chatbox");
    chatbox.scrollTop = chatbox.scrollHeight;
}

function checkEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById("userInput").value;

    if (userInput.trim() === "") return;

    const chatbox = document.getElementById("chatbox");

    const userWrapper = document.createElement("div");
    userWrapper.className = "message-wrapper";
    userWrapper.innerHTML = `<div class="user-message">${userInput}</div><img src="https://imgur.com/dxdoP6j.png" alt="User" class="user-avatar">`;
    chatbox.appendChild(userWrapper);

    document.getElementById("userInput").value = "";

    const thinkingWrapper = document.createElement("div");
    thinkingWrapper.className = "message-wrapper";
    thinkingWrapper.innerHTML = `<img src="https://imgur.com/CVql8td.png" alt="Bot" class="bot-avatar"><div class="bot-message">✍Thinking...</div>`;
    chatbox.appendChild(thinkingWrapper);
    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
        thinkingWrapper.remove();

        const botWrapper = document.createElement("div");
        botWrapper.className = "message-wrapper";
        botWrapper.innerHTML = `<img src="https://imgur.com/CVql8td.png" alt="Bot" class="bot-avatar"><div class="bot-message">${getBotResponse(userInput)}</div>`;
        chatbox.appendChild(botWrapper);

        chatbox.scrollTop = chatbox.scrollHeight;
        saveChatHistory();
    }, 1000);
}
function toggleChat() {
    const chatContainer = document.getElementById("chatContainer");

    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'flex'; // Hiển thị chatbot
        setTimeout(() => {
            const chatbox = document.getElementById("chatbox");
            chatbox.scrollTop = chatbox.scrollHeight; // Cuộn xuống cuối
        }, 0);
    } else {
        chatContainer.style.display = 'none'; // Ẩn chatbot
    }
}


document.addEventListener("DOMContentLoaded", loadChatHistory);
