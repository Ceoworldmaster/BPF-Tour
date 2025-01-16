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
        //Chào hỏi
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
            "Một số địa điểm du lịch sinh thái của Bình Phước",
            "Kể tên các địa điểm di tích lịch sử của Bình Phước",
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
        "mot so di tich lich su":[
            "Một số địa điểm di tích lịch sử:",
            "Điểm cuối đường ống dẫn xăng dầu VK96",
            "Bồn xăng kho nhiên liệu VK98",
            "Tà Thiết",
            "Mộ 3000 đồng bào An Lộc",
            "Trụ sở Chính phủ cách mạng Cộng Hòa Miền Nam Việt Nam",
            "Sân bay quân sự Lộc Ninh",
            "Cuộc nổi dậy của đồng bào S'tiêng",
            "Địa điểm thành lập Chi bộ Đông Dương Cộng sản Đảng ở Phú Riềng",
            "Địa điểm chiến thắng Tàu Ô",
            "Địa điểm chiến thắng Đồng Xoài",
            "Địa điểm thảm sát Bù Đốp",
            "Vườn cây lưu niệm của Nguyễn Thị Định",
            "Di tích Bãi Tiên",
            "Địa điểm chiến thắng dốc 31",
            "Đình thần Hưng Long",
            "Sóc Bom Bo",
            "Cụm công trình lưu niệm hành trình cứu nước của thủ tướng Hun-sen",
            "Di tích Thành đất hình tròn Lộc Tấn 2",
            "Bảo tàng Bình Phước",
            "Bảo tàng chiến dịch đường 14 - Phước Long",
            "Di tích trường Quốc Quang",
        ],
        "tru so chinh phu viet nam":[
            "Di tích Trụ sở Chính phủ cách mạng lâm thời Cộng hòa miền Nam Việt Nam còn gọi là di tích Nhà Giao Tế tại thị trấn Lộc Ninh, huyện Lộc Ninh, tỉnh Bình Phước, xây dựng từ thời Pháp thuộc, năm 1911 là văn phòng làm việc của Công ty cao su Viễn Đông của tư bản Pháp. Năm 1973, nơi đây đã diễn ra Hội nghị quân sự 4 bên, gồm đại diện phái đoàn quân sự Chính phủ Cách mạng Lâm thời Cộng hòa miền Nam Việt Nam, đại diện phái đoàn QĐND Việt Nam, đại diện phái đoàn quân sự Mỹ, đại diện phái đoàn quân sự Việt Nam Cộng hòa. Hội nghị bàn về việc thực thi các điều khoản đã được ký kết trong Hiệp định Pa-ri.",
            "Xem thêm tại: http://dulichbinhphuoc.vn/vi/detailtravelplace/?id=632. ",
        ],

        "san bay loc ninh":[
            "Sân bay quân sự Lộc Ninh do Mỹ ngụy xây dựng ở thị trấn Lộc Ninh vào năm 1965 để sử dụng cho việc tiếp tế lương thực, đạn dược và vận chuyển phương tiện chiến tranh tại các mặt trận Lộc Ninh - Campuchia",
            "Xem thêm tại: https://dangcongsan.vn/anh/loc-ninh-dia-chi-do-du-lich-ve-nguon-607527.html",
        ],

        "cuoc noi day dong bao stieng":[
            "Di tích Cuộc nổi dậy của đồng bào S’tiêng – xã Phú Riềng chống thực dân Pháp ngày 25/10/1933 (còn được gọi là Mả thằng Tây) tại ngã tư Phú Riềng, xã Phú Riềng, huyện Phú Riềng, tỉnh Bình Phước. Địa điểm này do thực dân Pháp xây dựng năm 1933 để tưởng nhớ Quận trưởng More – một trong những tên cầm quyền khét tiếng tàn ác của thực dân Pháp trên địa bàn quận Bà Rá thời bấy giờ.",
            "Xem thêm tại: https://baotangbinhphuoc.org.vn/di-tich-quoc-gia-cuoc-noi-day-cua-dong-bao-stieng-xa-phu-rieng-chong-thuc-dan-phap-ngay-25-10-1933/",
        ],

        "thanh lap chi bo dong duong":[
            "Di tích Địa điểm thành lập Chi bộ Đông Dương Cộng sản Đảng ở Phú Riềng tọa lạc tại xã Thuận Phú, huyện Đồng Phú, tỉnh Bình Phước. Nơi đây, vào ngày 28/10/1929, Chi bộ Đông Dương Cộng sản Đảng được thành lập làm nền móng sau này cho phong trào cách mạng của công nhân cao su tại khu vực Đông Nam bộ.",
            "Xem thêm tại: https://baotangbinhphuoc.org.vn/di-tich-quoc-gia-dia-diem-thanh-lap-chi-bo-dong-duong-cong-san-dang-o-phu-rieng/",
        ],

        "chien thang tau o":[
            "Tượng đài chiến thắng chốt chặn Tàu Ô tại thị trấn Tân Khai, huyện Hớn Quản. Tàu Ô là tên gọi xuất phát từ suối Tàu Ô chảy qua Quốc lộ 13. Tàu Ô trở thành khu vực trọng điểm giành giật giữa ta và địch trong chiến dịch Nguyễn Huệ năm 1972. Hơn nữa, giữ được Đường 13 thì chúng ta mới giữ được địa bàn Lộc Ninh, đảm bảo và đưa Chính phủ cách mạng lâm thời Cộng hòa miền Nam Việt Nam về căn cứ cách mạng.",
            "Xem thêm tại:https://dangcongsan.vn/tieu-diem/chien-thang-chot-chan-tau-o-150-ngay-dem-ruc-lua-618188.html ",
        ],

        "chien thang dong xoai":[
            "Di tích Địa điểm Chiến thắng Đồng Xoài tại phường Tân Phú, thành phố Đồng Xoài, tỉnh Bình Phước. Đây là nơi diễn ra trận đánh từ ngày 9 đến 12-6-1965 của Trung đoàn 2, thuộc Sư đoàn 9 cùng với bộ đội địa phương trong chiến dịch Đồng Xoài, góp phần làm phá sản chiến lược -Chiến tranh đặc biệt- của đế quốc Mỹ. Tượng đài được khởi công xây dựng ngày 9-6-2005. Di tích có diện tích 16.932,88m2, gồm các hạng mục công trình như tượng đài chiến thắng, tranh phù điêu, nhà trưng bày lưu niệm, các hạng mục phụ trợ như hệ thống cây xanh",
            "Xem thêm tại: https://baotangbinhphuoc.org.vn/di-tich-quoc-gia-dia-diem-chien-thang-dong-xoai. ",
        ],

        "tham sat bo dop":[
            "Địa điểm thảm sát ở Bù Đốp 16/3/1978', 'Địa điểm quân Pôn Pốt thảm sát nhân dân huyện Bù Đốp ngày 16/3/1978 là một trong những địa điểm ghi dấu tội ác dã man của chế độ diệt chủng Pôn Pốt trên lãnh thổ Việt Nam, là bản cáo trạng góp phần chứng minh chế độ Pôn Pốt là chế độ diệt chủng tàn bạo nhất trong lịch sử nhân loại",
            "Xem thêm tại:https://binhphuoc.gov.vn/vi/news/tin-tuc-su-kien-421/dia-diem-tham-sat-o-bu-dop-xep-hang-di-tich-lich-su-quoc-gia-26895.html ",
        ],

        "vuon cay nguyen thi dinh":[
            "Di tích Vườn cây lưu niệm bà Nguyễn Thị Định tại phường Sơn Giang, thị xã Phước Long, tỉnh Bình Phước. Bà tham gia cách mạng từ năm 16 tuổi, năm 1940, bà tham gia Khởi nghĩa Nam Kỳ nhưng cuộc khởi nghĩa thất bại, bà bị giặc Pháp bắt và giam cầm tại nhà tù Bà Rá. Trong những tháng ngày bị giam cầm và hoạt động cách mạng tại nhà tù Bà Rá, bà đã trồng một vườn cây ăn trái với nhiều loại cây như: khế, vú sữa, ổi… Ngày nay, vườn cây bà trồng còn hai cây vú sữa và hai cây khế xanh tốt, tán lá sum suê, hàng năm vẫn đơm hoa kết trái và đứng sừng sững như tinh thần bất khuất kiên trung của vị nữ tướng anh hùng Nguyễn Thị Định.",
            "Xem thêm tại: https://baotangbinhphuoc.org.vn/di-tich-cap-tinh-vuon-cay-luu-niem-ba-nguyen-thi-dinh/",
        ],

        "di chi bai tien":[
            "Di tích Bãi Tiên hiện nay thuộc ấp 2, xã Lộc An, huyện Lộc Ninh, tỉnh Bình Phước. Bãi Tiên là một di tích khảo cổ độc đáo và có giá trị.",
            "Xem thêm tại:https://binhphuoc.gov.vn/vi/news/van-hoa-van-nghe-the-thao/di-tich-bai-tien-21417.html ",
        ],

        "chien thang doc 31":[
            "Di tích Địa điểm chiến thắng Dốc 31 tại xã Lộc Thuận, huyện Lộc Ninh, tỉnh Bình Phước. Xây dựng năm 2010, gồm: Bia chiến thắng, phòng truyền thống và các công trình phụ trợ khác",
            "Xem thêm tại:https://baotangbinhphuoc.org.vn/di-tich-cap-tinh-dia-diem-chien-thang-doc-31/ "
        ],

        "dinh than hung long":[
            "Đình Thần Hưng Long tọa lạc tại khu phố 4, phường Hưng Long, thị xã Chơn Thành ngày nay có một ngôi đình rất nổi tiếng với lịch sử hình thành và phát triển gần 200 năm. Một trong những ngôi đình được đánh giá là cổ nhất ở Bình Phước. Đó là đình thần Hưng Long. Ngôi đình đánh dấu thời kỳ “khai sơn, phá thạch” và đóng vai trò vô cùng quan trọng trong đời sống tín ngưỡng của người Việt trên đất Bình Phước. ",
            "Xem thêm tại: https://baobinhphuoc.com.vn/news/505/137419/doc-dao-dinh-than-hung-long. Video: Truyền Hình Bình Phước"
        ],

        "soc bom bo":[
            "Sóc Bom Bo là điểm tham quan thuộc xã Bình Minh, huyện Bù Đăng, tỉnh Bình Phước. Địa điểm thuộc top điểm đến ở Bình Phước, nằm cách trung tâm Thành phố Đồng Xoài khoảng 50km và là địa điểm gắn liền với nhân dân ta trong công cuộc kháng chiến chống Mĩ cứu nước hào hùng. Sóc Bom Bo là nơi khơi nguồn cảm hứng của nhiều nhà thơ, lưu giữ những nét văn hóa của người S“Tiêng, mang đậm giá trị văn hóa lịch sử.",
            "Xem thêm tại:https://budang.binhphuoc.gov.vn/vi/news/van-hoa-the-thao/soc-bom-bo-net-van-hoa-dac-trung-4194.html "
        ],

        "cum cong trinh luu niem thu tuong hunsen":[
            "Cụm công trình lưu niệm hành trình cứu nước của Thủ tướng Campuchia Hun Sen tại ấp Thạnh Tây, xã Lộc Tấn, huyện Lộc Ninh.Theo UBND tỉnh Bình Phước, cách đây 44 năm, ngày 20/6/1977, Trung tá Hun Sen - Trung đoàn trưởng Vùng 21, khu Đông Campuchia, nay là Chủ tịch Đảng Nhân dân, Thủ tướng Chính phủ Campuchia và cộng sự sau khi vượt qua biên giới Campuchia - Việt Nam đã quyết định tìm kiếm sự giúp đỡ của Việt Nam để đánh đổ chế độ diệt chủng Pol Pot, mang lại hòa bình cho đất nước Campuchia. Với sự giúp đỡ của Đảng, Nhà nước và nhân dân Việt Nam, ông Hun Sen và cộng sự đã từng bước thành lập Mặt trận Đoàn kết cứu nước Campuchia, cùng quân tình nguyện Việt Nam đã đánh đổ hoàn toàn chế độ diệt chủng Pol Pot ngày 7/1/1979, cứu hàng triệu người dân Campuchia thoát khỏi thảm họa diệt chủng.",
            "Xem thêm tại: https://ttdn.vn/hoi-nhap-va-phat-trien/the-gioi-viet-nam/khanh-thanh-cum-cong-trinh-luu-niem-hanh-trinh-cuu-nuoc-cua-thu-tuong-campuchia-hun-sen-51133"
        ],

        "thanh dat hinh tron loc tan 2":[
            "Di tích Thành đất hình tròn Lộc Tấn 2 tọa lạc tại xã Lộc Tấn, huyện Lộc Ninh, tỉnh Bình Phước. Di tích Thành đất hình tròn Lộc Tấn 2 nói riêng và hệ thống di tích thành đất hình tròn ở Bình Phước nói chung là loại hình di tích khảo cổ độc đáo ở Việt Nam, là một mảng văn hoá cổ đặc biệt trong cả dòng chảy văn hóa ở khu vực Đông Nam Á thời tiền sử. Theo nghiên cứu của các nhà khoa học, thành đất hình tròn là loại hình cư trú phòng thủ rất độc đáo, là một công trình vĩ đại của cộng đồng cư dân sinh sống lâu đời, có quy mô và phạm vi ảnh hưởng rất lớn thời tiền sử. Ngày nay, di tích có ý nghĩa đặc biệt quan trọng trong công tác nghiên cứu khoa học về đời sống, sinh hoạt và văn hóa của người tiền sử.",
            "Xem thêm tại: https://baotangbinhphuoc.org.vn/di-tich-quoc-gia-thanh-dat-hinh-tron-loc-tan-2/"
        ],

        "bao tang duong 14 phuoc long":[
            "Bảo tàng chiến dịch Đường 14 – Phước Long tiền thân là Nhà truyền thống huyện Phước Long, được xây dựng từ năm 2002, đến năm 2014 được nâng cấp xây dựng với quy mô lớn hơn và năm 2018 được chuyển thành Bảo tàng Chiến dịch đường 14 – Phước Long. Từ đó đến nay, mỗi năm Bảo tàng đã đón hàng chục nghìn du khách trong và ngoài tỉnh đến tham quan, nghiên cứu. Bảo tàng được chia thành hai khu vực trưng bày, gồm trưng bày ngoài trời và trưng bày trong nhà. Khu vực ngoài trời trưng bày chiến lợi phẩm thu được của Mỹ – ngụy và vũ khí quân dụng của quân giải phóng. Khu vực trong nhà được chia làm 2 tầng, tầng trệt trưng bày hình ảnh, hiện vật và tài liệu về Chiến dịch đường 14 – Phước Long và một phòng riêng trưng bày cuộc đời hoạt động của Thiếu tướng Nguyễn Thị Định, tầng 1 trưng bày về văn hóa, vùng đất, con người Phước Long.",
            "Xem thêm tại:https://baotangbinhphuoc.org.vn/bao-tang-chien-dich-duong-14-phuoc-long-noi-bao-ton-va-phat-huy-gia-tri-van-hoa-cua-dia-phuong/ "
        ],

        "bao tang binh phuoc":[
            "Bảo tàng Bình Phước tọa lạc tại đường Hồ Xuân Hương, phường Tân Phú, thành phố Đồng Xoài, tỉnh Bình Phước. Bảo tàng Bình Phước là đơn vị sự nghiệp có thu trực thuộc Sở Văn Hóa, Thể thao và Du lịch tỉnh Bình Phước. Hiện nay, Bảo tàng Bình Phước bao gồm Ban Giám Đốc và 4 phòng chuyên nghiệp nghiệp vụ đang hoạt động là: phòng Hành chính - Tổng hợp; phòng Nghiệp vụ Bảo tồn; phòng Trưng bày và Khai thác di sản; phòng Nghiệp vụ Bảo tàng.",
            "Xem thêm tại: https://baotangbinhphuoc.org.vn/"
        ],

        "di tich truong quoc quang":[
            "Trường Quốc Quang tọa lạc tại An Lộc Bình Long được thành lập năm 1971. Đây là trường học của cộng đồng nhân dân Hoa kiều tại tỉnh Bình Long lúc bấy giờ. Trong chiến dịch Nguyễn Huệ năm 1972, sau khi giải phóng Lộc Ninh ngày 7-4-1972, quân và dân ta tiến công An Lộc, Bình Long. Trước sự tấn công của quân giải phóng, địch huy động lớn lực lượng chi viện, cùng sự hỗ trợ của các phương tiện chiến tranh như pháo binh, máy bay, kể cả máy bay ném bom chiến lược B.52 điên cuồng bắn phá, cày nát mặt đất An Lộc. Nhà cửa bị tàn phá, hàng ngàn đồng bào An Lộc bị sát hại. Trường Quốc Quang cũng bị tàn phá nặng nề nhưng là một trong những công trình của An Lộc còn đứng vững.",
            "Xem thêm tại: https://baobinhphuoc.com.vn/news/9/119190/truong-quoc-quang-duoc-cong-nhan-di-tich-cap-tinh"
        ],
        "ta thiet": [
            "Theo Địa chí Bình Phước, Căn cứ Tà Thiết là di tích lịch sử quốc gia thuộc xã Lộc Thành, huyện Lộc Ninh, có diện tích 3.500ha. Trong hai cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ, căn cứ Bộ Chỉ huy Miền đóng tại Tà Thiết là căn cứ cuối cùng được thành lập ở chiến trường miền Nam.",
            "Xem thêm tại: https://binhphuoc.gov.vn/vi/dukhach/di-tich-van-hoa-61/khu-di-tich-quoc-gia-dac-biet-bo-chi-huy-mien-ta-thiet-105.html",
            "https://youtu.be/oOMigIcaEaI"],
        "can cu bo chi huy mien": [
            "Theo Địa chí Bình Phước, Căn cứ Tà Thiết là di tích lịch sử quốc gia thuộc xã Lộc Thành, huyện Lộc Ninh, có diện tích 3.500ha. Trong hai cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ, căn cứ Bộ Chỉ huy Miền đóng tại Tà Thiết là căn cứ cuối cùng được thành lập ở chiến trường miền Nam.",
            "Xem thêm tại: https://binhphuoc.gov.vn/vi/dukhach/di-tich-van-hoa-61/khu-di-tich-quoc-gia-dac-biet-bo-chi-huy-mien-ta-thiet-105.html;",
            " https://youtu.be/oOMigIcaEaI"],
        "duong ong xang dau vk96": [
            "Di tích Điểm cuối đường ống dẫn xăng dầu VK96 tọa lạc tại xã Bù Gia Mập, huyện Bù Gia Mập, tỉnh Bình Phước. Di tích thuộc hệ thống di tích lịch sử quốc gia đặc biệt Đường Trường Sơn – Đường Hồ Chí Minh.",
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
        "mot so dia diem du lich sinh thai":[
            "Một số địa điểm du lịch sinh thái là",
            "Vườn quốc gia Cát Tuêb",
            "Núi Bà Rá- Thác Mơ",
            "Thác Đứng",
            "Thác Đăk Mai",
            "Thạc Voi",
            "Vườn quốc gia Bù Gia Mập",
            "Trảng cỏ Bù Lạch",
            "Hồ Suối Giai",
            "Rừng cao su",
            "Khu du lịch Đảo Yến",
            "Nông trại Phú Gia",
        ],

        "vuon quoc gia cat tien":[
            "Vườn quốc gia Cát Tiên thuộc Xã Đăng Hà, H. Bù Đăng, tỉnh Bình Phước, Vườn được mệnh danh là “ngôi nhà của muôn thú” với 96 loài thú, 94 loài bò sát, 903 côn trùng. Hiện vườn có hơn 20 cá thể voi sinh sống.",
            "Xem thêm tại:https://baobinhphuoc.com.vn/news/9/144089/kham-pha-thien-nhien-hoang-da-vuon-quoc-gia-cat-tien "
        ],

        "nui ba ra":[
            "Núi Bà Rá  thuộc P. Sơn Giang, TX. Phước Long, tỉnh Bình Phước. Với độ cao 732m, núi Bà Rá được xem là ngọn núi cao thứ 3 ở Nam Bộ. Đồng bào S’Tiêng gọi ngọn núi này với cái tên đầy thành kính “Bơnom Brah”, có nghĩa là “ngọn núi Thần”",
            "Xem thêm tại: https://binhphuoc.gov.vn/vi/news/van-hoa-van-nghe-the-thao/di-tich-nui-ba-ra-thac-mo-21393.html"
        ],

        "khu du lich dao yen":[
            "Khu du lịch Đảo Yến có diện tích hơn 10ha, trong đó có 3ha ốc đảo nằm giữa hồ đập Bà Mụ với mặt nước tự nhiên rộng mênh mông đến 110ha.",
        ],

        'vuon quoc gia bu gia map':[
            'Vườn quốc gia Bù Gia Mập có tổng diện tích là 25.601,18 ha, trong đó đó diện tích rừng tự nhiên là 25.505 ha, rừng gỗ lá rộng là 5.918 ha (4.134 ha rừng giàu, 1.310 ha rừng trung bình, 169 ha rừng nghèo, 304,8 rừng phục hồi, rừng hỗn giao 17.851 ha, và rừng tre nứa, lồ ô 1.776,5 ha). Đây là nơi lý tưởng phục vụ cho công tác nghiên cứu khoa học nhằm bảo tồn nguồn gene quý hiếm của các loài động, thực vật.',
            'Xem thêm tại: http://vuonquocgiabugiamap.vn/vi/news/Gioi-thieu/Gioi-thieu-ve-Vuon-quoc-gia-Bu-Gia-Map-274/'],
        'trang co bu lach':[
            'Cách trung tâm huyện Bù Đăng, tỉnh Bình Phước hơn 20km, ở xã Đồng Nai có một trảng cỏ xanh rờn đến mênh mông được bao bọc giữa những cánh rừng nguyên sinh bạt ngàn, như cách biệt với thế giới bên ngoài.',
            'Xem thêm tại: https://www.vntrip.vn/cam-nang/trang-co-bu-lach-58434'],
        'cao su bu dang':['Rừng cao su ở Bù Đăng nổi tiếng trồng nhiều cao su nhất của tỉnh Bình Phước, với những hàng cao su bạt ngàn. Vào khoảng thời gian cuối tháng 1 cho đến đầu tháng 4 là những cánh rừng phương Nam sẽ rực lên một màu đỏ. Đó chính là mùa của những cánh rừng cao su đang đồng loạt thay lá trong đó có những cánh rừng cao su tại Bình Phước.',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/lac-vao-rung-cao-su-bu-dang-bat-ngan-tai-binh-phuoc-7184'],
        'nong trai phu gia':[
            'Được công nhận là điểm du lịch nông thôn của tỉnh hơn 2 năm nay, trong không gian xinh đẹp, Điểm du lịch sinh thái Phú Gia ngày càng tạo nên nhiều hoạt động vui chơi, giải trí phù hợp dành cho gia đình, nhóm bạn bè hay cả những nhóm dã ngoại của học sinh ở các trường trong và ngoài tỉnh về cắm trại, vui chơi, giải trí cuối tuần hoặc dịp lễ, tết.',
            'Xem thêm tại: https://baobinhphuoc.com.vn/news/20/152231/an-tuong-diem-hen-sinh-thai-phu-gia'],
        'khu du lich sinh thai my le':[
            'Lâm Viên Mỹ Lệ (huyện Bù Gia Mập, tỉnh Bình Phước) địa điểm thu hút lượng lớn du khách tìm đến sau chuỗi ngày “ngủ đông” bởi dịch COVID -19. Tại đây du khách sẽ được thỏa sức vui chơi, tham quan sở thú, chơi đạp vịt, cắm trại, hoạt động teambuilding, hái trái cây hay thư giãn trong hồ bơi với nhiều trải nghiệm đáng nhớ.',
            'Xem thêm tại: https://dangcongsan.vn/thong-tin-kinh-te/lam-vien-my-le-diem-den-ly-tuong-tai-binh-phuoc-617539.html'],
        'thac dak mai':[
            'Thác Đắk Mai nằm ở vùng khá heo hút của Bình Phước nên vẫn giữ được cho mình vẻ đẹp hoang sơ, tĩnh lặng vốn có.',
            'Thác Đắk Mai Bình Phước có độ cao 12m và rộng 50m, nằm giữa núi rừng tĩnh lặng,  quanh năm tung bọt trắng xóa. Nơi đây tuy không có vẻ đẹp quá đỗi ngất ngây như những dòng thác ở đại ngàn Tây Nguyên nhưng vẫn sở hữu cảnh quan thiên nhiên vừa hoang sơ vừa huyền bí. Khi ghé đến Thác Đắk Mai, bạn sẽ được hòa mình vào thiên nhiên tươi đẹp, đắm mình trong bầu không khí trong lành, khám phá cuộc sống giản dị của các bản làng dân tộc thiểu số tại đây.',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/kham-pha-thac-dak-mai-voi-ve-dep-hung-vi-va-say-dam-long-nguoi-7101'],
        'soc bom bo':[
            'Sóc Bom Bo là điểm tham quan thuộc xã Bình Minh, huyện Bù Đăng, tỉnh Bình Phước. Địa điểm thuộc top điểm đến ở Bình Phước này nằm cách trung tâm thị xã Đồng Xoài khoảng 50km và là địa điểm gắn liền với nhân dân ta trong công cuộc kháng chiến chống Mĩ hào hùng. Khi ghé thăm Sóc Bom Bo bạn hoàn toàn không cần lo lắng về vấn đề tiền bạc bởi vì di tích lịch sử này hoàn toàn miễn phí vé vào cổng.',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/kham-pha-soc-bom-bo-binh-phuoc-qua-nhung-net-van-hoa-dac-trung-7183'],
        'ho suoi giai':[
            'Hồ Suối Giai Bình Phước là hồ nước đẹp với cảnh sắc thiên nhiên êm đềm, thư thái. Nơi đây rất lý tưởng cho các hoạt động dã ngoại, cắm trại, tận hưởng một ngày nghỉ thật vui vẻ và thoải mái.',
            'Xem thêm tại: https://dongxoai.binhphuoc.gov.vn/du-lich/khu-cam-trai-va-da-ngoai-ho-suoi-giai-tinh-binh-phuoc-247006'],
        'thac dung':[
            'Sở hữu cảnh sắc hoang sơ, Thác Đứng thu hút sự chú ý của đông đảo mọi người trong hành trình du lịch Bình Phước. Nếu có dịp đứng dưới chân con thác hùng vĩ, bạn mới hiểu lý do vì sao nơi đây lại trở thành thác nước đẹp nhất của vùng Bình Phước đặc sắc này.',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/ngo-ngang-thac-dung-voi-canh-sac-hoang-so-day-an-tuong-7089'],
        'thac mo':[
            'Thủy điện Thác Mơ là một công trình quan trọng tại tỉnh Bình Phước. Không những mang trong mình một nhiệm vụ cao cả là cung cấp nước và tạo ra dòng điện phục vụ đời sống nhân dân mà nơi đây còn sở hữu phong cảnh hữu tình.',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/ho-thuy-dien-thac-mo-diem-du-lich-tu-tuc-cho-nhung-kham-pha-tuyet-voi-6983'],
        'thac so 4':[
            'Thác số 4 – hồ Sóc Xiêm tọa lạc trên địa phận 2 xã Tân Lợi, An Khương của huyện Hớn Quản; cách thức thị trấn An Lộc, thị xã Bình Long khoảng 10 km. Quần thể Thác số 4 có cấu tạo vững bền, gồm nhiều tảng khối đá xanh chêm vào nhau, chắn ngang một khe suối nhỏ dại, uốn lượn theo một triền đồi và vắt ngang một cánh rừng hoang sơ, kỳ bí.',
            'Xem thêm tại: https://bietthungoctrai.vn/quan-the-thac-so-4-binh-phuoc/'],
        'thac voi':[
            'Thác Voi (hay còn được gọi là thác Nokrop) thuộc xã Đồng Nai, huyện Bù Đăng là một địa danh du lịch Bình Phước cực kỳ nổi tiếng. Con thác này được rất nhiều phượt thủ săn đón trong hành trình khám phá vẻ đẹp bí ẩn của núi rừng mà mẹ thiên nhiên đã ưu ái ban tặng cho con người nơi đây.',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/thac-voi-bu-dang-ve-dep-thien-nhien-ky-vi-giua-long-binh-phuoc-7029'],  
        'thuy dien thac mo':[
            'Thủy điện Thác Mơ là một công trình quan trọng tại tỉnh Bình Phước. Không những mang trong mình một nhiệm vụ cao cả là cung cấp nước và tạo ra dòng điện phục vụ đời sống nhân dân mà nơi đây còn sở hữu phong cảnh hữu tình.',
            'Xem thêm tại: https://mia.vn/cam-nang-du-lich/ho-thuy-dien-thac-mo-diem-du-lich-tu-tuc-cho-nhung-kham-pha-tuyet-voi-6983'],
    
        //Ẩm thực
        "mot so dac san binh phuoc":[
            "Một số đặc sản của Bình Phước:",
            "Hạt điều rang muối",
            "Gỏi trái điều",
            "Bánh hạt điều",
            "Thịt quay từ heo thả rông",
            "Lá nhíp xào",
            "Đọt mây nướng",
            "Canh thụt",
            "Rượu cần",
        ],

        "hat dieu":[
            "Là vùng đất chuyên trồng điều vì thế hạt điều rang muối Bình Phước luôn giữ được nguyên vỏ lụa, vị ngọt, hương thơm đậm đà. Khi ăn hạt điều giòn tan và giữ được hương vị lâu hơn hạt điều vùng khác.", "---",
            "Vỏ lụa là lớp vỏ mỏng màu loang lổ nâu đôi khi pha nhiều sắc trắng là lớp phân cách giữa nhân hạt điều ăn được và lớp vỏ cứng bảo vệ bên ngoài. Trong quy trình bóc tách hạt điều lấy nhân, khâu bóc tách lớp vỏ lụa này là một trong những khâu phức tạp nhất bởi rất dễ làm vỡ hạt gây giảm giá trị đáng kể cho sản phẩm. Tuy nhiên đối với hạt điều rang muối, việc bóc lớp vỏ này thực sự không khó, đặc biệt là với cách xử lý của đội ngũ rang mộc lành nghề của chúng tôi. Đây cũng là nguyên nhân người tiêu dùng dành nhiều thiện cảm cho loại hạt này.",
            "Xem thêm tại: https://dacsanvina.vn/10-mon-ngon-khong-the-nao-quen-o-vung-que-binh-phuoc-d106031/"],
        
        "goi trai dieu":[
            "Trái điều để làm gỏi rất ngon, vị chua chua ngọt ngọt được thêm một chút gì đó mặn mà của gia vị, rồi lại thêm miếng tôm, miếng thịt là được một món ăn lạ mắt, lại rẻ",
            "Xem thêm tại:https://dacsanvina.vn/10-mon-ngon-khong-the-nao-quen-o-vung-que-binh-phuoc-d106031/ "
        ],

        "banh hat dieu":[
            "Nguyên liệu chính để làm bánh hạt điều là hạt điều, bột nổi, bột quế, trứng gà, đường, bột mì, một chút dầu ăn.",
            "Xem thêm tại:https://dacsanvina.vn/10-mon-ngon-khong-the-nao-quen-o-vung-que-binh-phuoc-d106031/ "
        ],

        "thit quay tu heo tha rong":[
            "Là loại heo được người dân tộc thiểu số sinh sống quanh vùng Sóc Bom Bo nuôi, heo thả rông là loại bán hoang dã, ban ngày được thả rông đi tìm thức ăn và ban đêm trở về chuồng của gia đình. Bởi vì ăn các loại rau củ và đi khắp nơi tìm kiếm thức ăn nên thịt heo thả rông săn chắc, ít mỡ, khi ăn không bị ngấy. ",
            "Xem thêm tại: https://mia.vn/cam-nang-du-lich/heo-tha-rong-dac-san-hap-dan-cua-vung-soc-bom-bo-7136"
        ],

        "dot may nuong":[
            "Đọt mây là một món ăn không thể thiếu trong bữa cơm của người đồng bào S’Tiêng ở Bình Phước. Đọt mây nướng dưới than củi hồng, thơm thơm, ngầy ngậy.",
            "Xem thêm tại:https://vietnamnet.vn/dac-san-binh-phuoc-thom-ngon-doc-la-thu-hut-du-khach-gan-xa-2161605.html "
        ],

        "canh thut":[
            "Món Canh thụt độc đáo này được tạo nên từ nhiều loại rau rừng khác nhau như Lá nhíp, củ nén, ớt tươi cùng nhiều loại gia vị đặc trưng. Có tổng cộng khoảng 10 loại nguyên liệu được sử dụng để làm nên món ăn này và sự kết hợp của chúng tạo nên một hương vị riêng biệt cho Canh thụt.",
            "Xem thêm tại: https://youtu.be/n6SGQrTbcZI"
        ],
        "ruou can":[
            "Rượu cần theo tiếng S'Tiêng là thức uống độc đáo và cũng là một loại sản vật gắn chặt với đời sống văn hóa, tâm linh, tín ngưỡng của đồng bào dân tộc S’Tiêng ở Bình Phước. Rượu cần được chế biến theo một quy trình công phu, nghiêm ngặt, đòi hỏi người chế biến phải có kinh nghiệm, tay nghề cao.",
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
        "mot so dia diem luu tru":[
            "Một số địa điểm lưu trú lí tưởng:",
            "Khách sạn An Lộc",
            "Khách sạn Phương Lâm",
            "Khách sạn Trình Gia",
            "Khách sạn Bom Bo",
            "Khách sạn Ngọc Trâm",
            "Khách sạn Hương Sen",
            "Khách sạn Sao Mai",
            "Khách sạn Hoàng Gia",
            "Khách sạn Thảo Sơn",
            "Khách sạn Hùng Vương",
        ],

        "mot so dich vu lu hanh":[
            "Một số dịch vụ lữ hành:",
            "Buýt Bình Phước",
            "Nhà xe Thư Kì",
            "Nhà xe Thành Công",
            "Nhà xe Tú Nhi",
            "Nhà xe Hoàng Yến Logistics",
            "Grap Bình Phước",
            "Xanh SM Bình Phước",
            "Taxi Mai Linh Bình Phước",
            "Taxi Thắng Lợi",
            "Taxi Vinasun Bình Phước",
            "Nhà xe Lê Hoàng",
            "Nhà xe Thành Trung",
        ], 

        "mot so cong ty du lich":[
            "Một số công ty du lịch:",
            "Công ty TNHH MTV TM và DV Du lịch Thanh Bình",
            "Công ty TNHH Dịch Vụ du lịch Tín Việt",
            "Công ty TNHH Dịch Vụ Du Lịch Sông Bé",
            "Công ty TNHH Quốc tế Denver",
            "Công ty TNHH Dịch vụ Du lịch Nắng Việt",
        ], 
        
        //chính sách
        "Thong tin thu thap":[
            "Chúng tôi có thể thu thập thông tin cá nhân của bạn khi bạn truy cập trang web của chúng tôi, bao gồm nhưng không giới hạn ở:",
            "Tên",
            "Địa chỉ email",
            "Số điện thoại",
            "Thông tin liên hệ khác",
        ],
        "cach su dung thong tin":[
            "Chúng tôi sử dụng thông tin cá nhân của bạn cho các mục đích sau:",
            "Cung cấp và duy trì dịch vụ của chúng tôi.",
            "Thông báo cho bạn về thay đổi đối với dịch vụ của chúng tôi.",
            "Cho phép bạn tham gia vào các tính năng tương tác của dịch vụ khi bạn chọn làm như vậ",
            "Cung cấp hỗ trợ khách hàng.",
            "Phân tích và cải thiện dịch vụ của chúng tôi.",
        ],
        "thong tin duoc chia se nhu the nao":[
            "Chúng tôi không chia sẻ thông tin cá nhân của bạn với bất kỳ bên thứ ba nào, trừ khi:",
            "Được yêu cầu bởi pháp luật",
            "Bạn đồng ý trước.",
        ],
        "quyen cua nguoi dung":[
            "Bạn có quyền:",
            "Truy cập, chỉnh sửa hoặc xóa thông tin cá nhân.",
            "Từ chối nhận email tiếp thị",
        ],
        "cach thuc lien he":[
            "Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này hoặc cách chúng tôi xử lý thông tin cá nhân của bạn, vui lòng liên hệ với chúng tôi qua:",
            " Địa chỉ email",
            "Số điện thoại",
            "Địa chỉ công ty",
        ],
        "quyen quan li du lieu":[
            "Dưới đây là các quyền mà người dùng có thể yêu cầu để quản lý thông tin cá nhân của họ:",
            "Quyền truy cập: Bạn có quyền yêu cầu sao lưu thông tin cá nhân mà chúng tôi lưu trữ và sử dụng.",
            "Quyền sửa đổi: Bạn có quyền yêu cầu sửa đổi các thông tin không chính xác hoặc không đầy đủ mà chúng tôi lưu trữ.",
            "Quyền hạn chế xử lý: Bạn có thể yêu cầu chúng tôi ngừng sử dụng hoặc hạn chế việc sử dụng thông tin cá nhân của bạn trong một số trường hợp.",
            "Quyền chuyển nhượng dữ liệu: Bạn có thể yêu cầu chúng tôi chuyển giao thông tin cá nhân của bạn cho một tổ chức khác trong các trường hợp hợp lý.",
        ],
        //TOU
        "doi tuong ap dung la ai":[
            "Điều khoản sử dụng này áp dụng cho tất cả người dùng truy cập và sử dụng trang web, bao gồm cả khách truy cập không đăng ký tài khoản và người dùng đã đăng ký tài khoản.",
        ],
        "quyen va nghia vu cua nguoi dung":[
            "Khi sử dụng trang web, bạn đồng ý:",
            "Sử dụng trang web và các dịch vụ của chúng tôi theo đúng pháp luật và điều khoản quy định.",
            "Cung cấp thông tin chính xác, đầy đủ khi đăng ký hoặc thực hiện bất kỳ giao dịch nào trên trang web.",
            "Bảo mật thông tin tài khoản cá nhân, bao gồm tên đăng nhập và mật khẩu.",
            "Chịu trách nhiệm đối với mọi hoạt động diễn ra dưới tài khoản của bạn.",
        ],
        "cac hanh vi bi cam":[
            "Người dùng không được phép thực hiện các hành vi sau khi sử dụng trang web:",
            "Đăng tải hoặc chia sẻ nội dung phản cảm, vi phạm pháp luật, hoặc xâm phạm quyền lợi của bên thứ ba.",
            "Sử dụng công cụ, phần mềm độc hại (malware), virus, hoặc các phương pháp gây hại khác để xâm phạm trang web.",
            "Can thiệp vào hệ thống, dữ liệu hoặc mạng lưới của trang web.",
            "Thực hiện các thao tác phím hoặc tổ hợp phím bị cấm, bao gồm nhưng không giới hạn:",
            "Liên tục nhấn F5 hoặc các phím khác để làm chậm hệ thống",
            "Sử dụng tổ hợp Ctrl + U, F12 hoặc bất kỳ công cụ kiểm tra mã nguồn nào với mục đích không hợp lệ",
            "Sử dụng các công cụ tự động (bot, script) để thao tác trái phép.",
            "Giả mạo danh tính hoặc thông tin cá nhân của người khác.",
            "Thực hiện hành vi gian lận, lừa đảo hoặc gây thiệt hại cho hệ thống, người dùng khác, hoặc bên thứ ba.",          
        ],
        "quyen voi noi dung nguoi dung":[
            "Khi bạn đăng tải bất kỳ nội dung nào lên trang web (bao gồm bài viết, hình ảnh, bình luận), bạn đồng ý:",
            "Cho phép chúng tôi sử dụng, sao chép, chỉnh sửa, phân phối hoặc hiển thị nội dung đó trong khuôn khổ hợp pháp.",
            "Chịu trách nhiệm pháp lý về nội dung bạn đăng tải, đảm bảo không vi phạm bản quyền, thương hiệu hoặc quyền riêng tư của bên thứ ba.",
            "Chúng tôi có quyền xóa hoặc chỉnh sửa nội dung của bạn nếu nội dung đó vi phạm các điều khoản sử dụng hoặc quy định pháp luật.",
        ],
        "su dung dich vu ben thu ba":[
            "Trang web có thể tích hợp hoặc hiển thị nội dung/dịch vụ của bên thứ ba (ví dụ: quảng cáo, dịch vụ bản đồ, hoặc thanh toán trực tuyến). Chúng tôi không chịu trách nhiệm đối với nội dung, chính sách hoặc hành vi của các bên thứ ba này.",
        ],
        "xu ly vi pham":[
            "Nếu bạn vi phạm các điều khoản sử dụng, chúng tôi có quyền thực hiện các biện pháp sau:",
            "Chặn tài khoản của bạn mà không cần thông báo trước.",
            "Xóa nội dung bạn đã đăng tải.",
            "Thông báo cho cơ quan chức năng nếu vi phạm nghiêm trọng.",
            "Yêu cầu bồi thường nếu hành vi của bạn gây thiệt hại cho chúng tôi hoặc người dùng khác.",
        ],
        "quyen so huu tri tue":[
            "Tất cả nội dung trên trang web (bao gồm văn bản, hình ảnh, video, logo và mã nguồn) thuộc sở hữu của chúng tôi hoặc các bên liên quan và được bảo vệ bởi luật bản quyền. Người dùng không được phép sao chép, phân phối hoặc sử dụng nội dung này mà không có sự đồng ý bằng văn bản của chúng tôi.",
        ],
        "luat ap dung va giai quyet trnah chap":[
            "Các điều khoản sử dụng này được điều chỉnh bởi luật pháp Việt Nam. Mọi tranh chấp phát sinh sẽ được giải quyết tại tòa án có thẩm quyền ở Việt Nam.",
        ],
        "gioi han trach nhiem":[
            "Chúng tôi không chịu trách nhiệm với bất kỳ thiệt hại trực tiếp, gián tiếp hoặc hậu quả nào phát sinh từ việc sử dụng hoặc không thể sử dụng trang web, bao gồm nhưng không giới hạn ở lỗi kỹ thuật, mất dữ liệu, hoặc vi phạm bảo mật.",
        ],
        "thay doi va cham dut dich vu":[
            "Chúng tôi có quyền thay đổi, tạm ngừng hoặc chấm dứt một phần hoặc toàn bộ dịch vụ trên trang web mà không cần thông báo trước. Việc tiếp tục sử dụng trang web sau khi có thay đổi đồng nghĩa với việc bạn đồng ý với các thay đổi đó.",
        ],
        "thay doi dieu khoan su dung":[
            "Chúng tôi có quyền thay đổi các điều khoản sử dụng này bất kỳ lúc nào. Các thay đổi sẽ được thông báo trên trang web, và bạn có trách nhiệm kiểm tra thường xuyên để cập nhật. Việc tiếp tục sử dụng trang web sau khi điều khoản được thay đổi đồng nghĩa với việc bạn đồng ý với các điều khoản mới.",
        ],
        "lien he":[
            "Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về điều khoản sử dụng, vui lòng liên hệ với chúng tôi qua:",
            "Email: contact@dulichbinhphuoc.vn",
            "Hotline: 0123 456 789",
            "Địa chỉ: Số 1, Đường ABC, Thành phố Đồng Xoài, Tỉnh Bình Phước",
        ],
"le hoi mieu ba ra":[
            "Lễ hội miếu Bà Rá diễn ra trong 3 ngày (từ mùng 1 đến hết ngày mùng 3 tháng 3 âm lịch",
        ],
        "le hoi cau bong o dinh than hung long":[
            "Hàng năm vào ngày 16-7 âm lịch, lễ hội Cầu bông đình thần Hưng Long được tổ chức để phát huy những giá trị văn hóa truyền thống. Cầu cho cây cối đơm bông kết trái, sum xuê, tươi tốt, mùa màng bội thu, dân giàu nước mạnh.",
        ],
        "le hoi mung lua moi cua dong bao s tieng":[
            "Theo các già làng S’tiêng, lễ hội Mừng lúa mới đã có từ lâu đời, gắn liền với sản xuất nông nghiệp và thường có quy mô lớn nhất trong các lễ hội của người S’tiêng. Trước ngày diễn ra lễ hội, già làng phân công nhiệm vụ cho bà con chuẩn bị lễ vật, như:  Gạo nếp, các loại nguyên liệu để nấu canh, thịt gà, lợn... Còn các thanh niên sẽ chuẩn bị sân lễ hội, cây nêu và các vật phẩm cúng thần lúa. Các đội múa, đội cồng chiêng cũng tập luyện để biểu diễn trong suốt lễ hội.",
        ],
        "le hoi pha bau cua nguoi Khmer":[
            "Phá Bàu là lễ hội truyền thống, loại hình văn hóa dân gian tổng hợp, chứa đựng nhiều giá trị độc đáo riêng của đồng bào Khmer ở xã Lộc Khánh nói riêng và tỉnh Bình Phước nói chung. Lễ hội phản ánh rõ nét đời sống của cư dân nông nghiệp canh tác lúa nước và nương rẫy. Thông qua lễ hội, đồng bào Khmer cầu mong bình an, khỏe mạnh, mùa màng bội thu, cây cối tốt tươi, vạn vật sinh sôi nảy nở.",
        ],
        "le cua mua cua dong bao S tieng":[
            "Lễ hội cầu mưa tổ chức vào khoảng tháng 2, 3 âm lịch, để tri ân các vị thần như: Bra Ân - Bra Trốk (Thần trời), Bra ter (Thần đất), Bra va (Thần lúa)… và các vị thần khác đã cho mưa, cho nguồn nước giúp dân làng vượt qua hạn hán, gieo trồng đúng mùa vụ, có nguồn nước để sinh hoạt, cho con cá vẫy lội, cho cái chum, cái ché đầy nước, cho thóc gạo đầy bồ. Lễ hội có tầm quan trọng nhất đối với cuộc sống của người dân tộc S’Tiêng.",
        ],
        //test
        "li do chon du an":[
            "Chúng tôi nhận thấy rằng Bình Phước sở hữu nhiều tiềm năng phát triển du lịch với nhiều danh lam thắng cảnh, di tích lịch sử, du lịch sinh thái, những rừng cao su bạt ngàn,… cùng với nhiều giá trị văn hóa truyền thống lâu đời. Chính vì vậy, chúng tôi đã quyết định tạo ra sản phẩm “Bình Phước Fantastic Tour” nhằm quảng bá du lịch tỉnh nhà, đưa vẻ đẹp và giá trị của Bình Phước đến gần hơn với mọi người.",
        ],
        "van de nghien cuu":[
            "Mục tiêu:",
            "Quảng bá rộng rãi du lịch Bình Phước.",
            "Gìn giữ nét đẹp văn hóa truyền thống.",
            "Hỗ trợ học tập, rèn luyện tư duy logic.",
        
        "gia thuyet:",
            "Sản phẩm giúp du khách, người sử dụng:",
            "Khám phá các địa điểm du lịch tại địa phương một cách hiệu quả và thuận tiện hơn thông qua công nghệ AI.",
            "Tối ưu hóa chi phí di chuyển, lưu trú và các dịch vụ, nâng cao trải nghiệm du lịch.",
            "Sản phẩm gặp những khó khăn:",
            "Không đáp ứng đủ nhu cầu, thiếu thông tin hoặc không giải quyết được vấn đề mà du khách gặp phải.",
            " Hệ thống xử lí thông tin, hình ảnh chậm, gây khó chịu khi sử dụng.",
        ],
        "thiet ke va phuong phap nghien cuu":[
            "Tìm kiếm thông tin từ những nguồn đáng tin cậy (các trang chính thống của tỉnh Bình Phước, báo tỉnh Bình Phước, truyền hình tỉnh Bình Phước,…)",
            "Tóm tắt và thống kê thông tin.",
            "Kiểm tra thông tin",
        
            "cac buoc tien hanh:",
            "Lên ý tưởng",
            "Tìm kiếm thông tin",
            "Thiết kế giao diện",
            "Phát triển và tối ưu hóa trang wed",
            "Hoàn thiện trang wed",
            "Kiểm tra và bảo trì",
            "Đặc biệt các bước:",
            " Phát triển và tối ưu hóa trang wed",
            "Hoàn thiện trang wed",
            "Kiểm tra và bảo trì được tiến hành thường xuyên, đồng bộ để nâng cấp trang wed",
    ,
            "rui ro va an toan:",
            "Mạng yếu hệ thống xử lí thông tin, hình ảnh chậm.",
        
            "cau tao san pham:",
            "Lựa chọn ngôn ngữ, Giới thiệu, Kinh tế, Địa danh (Du lịch sinh thái, di tích lịch sử, làng nghề, khu vui chơi giải trí, Công trình tôn giáo), Văn hóa S'tiêng, Ẩm thực, Nghệ thuật (Âm nhạc, mĩ thuật, lễ hội), Phương tiện (Lưu trú, lữ hành, công ty du lịch), Tin Tức, Hỗ Trợ, Learn, Cookie, Policy_Privacy, Terms of Use.",
        
            "nguyen li hoat dong:",
            "Sản phẩm Bình Phước fantastic tour khởi động bằng cách vào link https://ceoworldmaster.github.io/BPF-Tour/ hoặc quét mã QR chọn ngôn ngữ vào các mục cần tìm.",
    
            "phuong huong phat trien:",
            "Tích hợp công nghệ thực tế ảo",
            "Hợp tác với doanh nghiệp địa phương",
            "Cập nhật thông tin thường xuyên",
            "Ứng dụng nhiều AI",
            "Hỗ trợ đa ngôn ngữ",
            "ket qua:",
            "Ứng dụng thành công trong dạy học, hỗ trợ tốt trong học tập môn Chương trình giáo dục địa phương, các môn học khác,… đồng thời thông qua dự án quảng bá du lịch tỉnh Bình Phước và tạo động lực thúc đẩy ngành du lịch tỉnh Bình Phước.",
            "Học sinh rèn luyện và phát triển được các phẩm chất, năng lực của người học.",
        ],
        "dac diem san pham":[
            "Tính mới:",
            "Giữ gìn và phát huy bản sắc văn hóa S’tiêng, làng nghề,.. ở tỉnh Bình Phước.",
            "Bình Phước AI là giải pháp công nghệ thông minh được thiết kế cho trang wed Bình Phước Frantastic Tour. Hệ thống này kết hợp sức mạnh của trí tuệ nhân tao (AI) với các tính năng hiện đại, giúp nâng cao trải nghiệm khi sử dụng trang wed du lịch của chúng tôi. Bình Phước AI có khả năng tìm kiếm và trả lời các câu hỏi về thông tin địa phương hoặc gợi ý dịch vụ một cách nhanh chóng và chính xác.",
            "Học tập thông minh: Với bộ câu hỏi hỗ trợ học tập và các trò chơi rèn luyện tư duy của trang wed sẽ giúp vận dụng tốt hơn trong học tập môn Chương trình giáo dục địa phương, các môn học và hoạt động giáo dục khác. Trang wed giúp các bạn tìm hiểu được lịch sử hình thành, các nét đẹp văn hóa, các địa điểm du lịch trên toàn tỉnh Bình Phước. BPF Tour còn là cơ hội để các bạn rèn luyện tư duy, phẩm chất năng lực, hỗ trợ học tập hiệu quả.",
            "Tính khoa học:",
            "Sản phẩm thiết kế khoa học lồng ghép yếu tố sáng tạo (dịch vụ, văn hóa, chuyên nghiệp, mới lạ) hình thành sản phẩm với hấp dẫn, chất lượng.",
            "Tính thực tiễn:",
            "Ứng dụng thành công trong dạy học, hỗ trợ tốt trong học tập môn Chương trình giáo dục địa phương, các môn học khác,… đồng thời thông qua dự án quảng bá du lịch tỉnh Bình Phước.",
            "Tính cộng đồng:",
            "Đông đảo mọi người tham gia, tạo động lực thúc đẩy ngành du lịch tỉnh Bình Phước.",
        ],
        "tai lieu tham khao":[
            "Sở Giáo dục và Đào tạo Bình Phước (2021). Tài liệu giáo dục địa phương tỉnh Bình Phước lớp 6, bản nghiệm thu.",
            "Sở Giáo dục và Đào tạo Bình Phước (2022). Tài liệu giáo dục địa phương tỉnh Bình Phước lớp 7, bản nghiệm thu.",
            "Sở Giáo dục và Đào tạo Bình Phước (2023). Tài liệu giáo dục địa phương tỉnh Bình Phước lớp 8, bản nghiệm thu.",
            "Cục Thống kê tỉnh Bình Phước, Niên giám Thống kê tỉnh Bình Phước 2023, Bình Phước, 2022",
            "Uỷ ban Nhân dân tỉnh Bình Phước, Sở Văn hoá, Thể thao và Du lịch tỉnh Bình Phước, Cẩm nang du lịch Bình Phước, Nhà xuất bản Thông Tấn, 2016.",
        ],
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
        "Ví dụ: Một số địa điểm du lịch của Bình Phước?, Đặc sản Bình Phước?"
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
