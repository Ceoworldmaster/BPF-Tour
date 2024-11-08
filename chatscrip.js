const apiKey = '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';  // Thay bằng API key của bạn

async function getOpenAIResponse(input) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-4o',  // Sử dụng mô hình "gpt-3.5-turbo"
                messages: [
                    {
                        role: 'system',
                        content: "You are a helpful assistant."  // Đặt bối cảnh cho chatbot
                    },
                    {
                        role: 'user',
                        content: input  // Yêu cầu người dùng, ví dụ: "viết đoạn văn về cảm xúc khi đọc sách"
                    }
                ],
                max_tokens: 300  // Giới hạn độ dài phản hồi đủ dài để có một đoạn văn
            })
        });

        // Kiểm tra nếu phản hồi không thành công
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;  // Trả về nội dung phản hồi từ OpenAI

    } catch (error) {
        console.error("Error fetching OpenAI API response:", error);
        return "Xin lỗi, đã có lỗi xảy ra khi truy vấn OpenAI API.";  // Trả về lỗi nếu có
    }
}

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

async function getBotResponse(input) {
    const responses = {
        "hello": "꧁Xin chào ✌! Tôi rất sẵn sàng giúp đỡ và giải đáp thắc mắc của bạn trong chuyến hành trình khám phá Bình Phước này꧂",
        "hi": "꧁Xin chào ✌! Tôi rất sẵn sàng giúp đỡ và giải đáp thắc mắc của bạn trong chuyến hành trình khám phá Bình Phước này꧂",
        "xin chào": "꧁Xin chào ✌! Tôi rất sẵn sàng giúp đỡ và giải đáp thắc mắc của bạn trong chuyến hành trình khám phá Bình Phước này꧂",
        "how are you": "Tôi rất sẵn lòng giúp đỡ bạn trong hành trình khám phá Bình Phước",
        "what's your name": "Tôi tên là Thái. Họ và tên đầy đủ là Chatbot Nhà Tìm Kiếm Thông Thái.",
        "bye": "Goodbye! Have a great day!, Rất trân thành cảm ơn bạn vì đã tin tưởng",
        "yes": "Cảm ơn bạn vì đã tưởng tưởng, tôi sẽ cố gắng hết sức",
        "no": "Tôi sẽ cố gắng học tập thêm để giúp đỡ bạn tốt hơn, cảm ơn bạn vì đã góp ý",
        "thời tiết hôm nay thế nào": "Tôi không thể kiểm tra thời tiết, bạn có thể tra cứu trên các trang web dự báo thời tiết.",
        "khu du lịch nào nổi tiếng ở bình phước?": "Khu du lịch Bù Gia Mập và hồ Suối Cam là những điểm nổi tiếng.",
        "bạn có thể làm gì": "Tôi có thể cung cấp thông tin về du lịch, văn hóa và các điểm đến tại Bình Phước. Bạn có thể hỏi tôi bất kỳ điều gì liên quan đến địa phương!",
        "tác giả của sản phẩm là ai": "Tác giả của sản phẩm là bạn Nguyễn Hồng Dương (Tổng chủ biên, người viết web), bạn Hồ Quốc Trung (Nội dung, đồ họa) và cô Nguyễn Thị Vương (Biên tập nội dung, hướng dẫn)",
        "gợi ý cho tôi một số câu hỏi": [
            "Thông tin về Bình Phước?",
            "Kể tên các địa điểm du lịch sinh thái của Bình Phước",
            "Kể tên các địa điểm di tích lịch sử của Bình Phước?",
            "Kể tên các làng nghề của Bình Phước?",
            "Kể tên các lễ hội của Bình Phước?",
            "Kể tên các đặc sản của Bình Phước?",
            "Kể tên các địa điểm lưu trú tại Bình Phước?"
        ],
        // Giới thiệu
        "thông tin về bình phước": "Bình Phước là tỉnh miền núi thuộc vùng Đông Nam Bộ, gồm 1 thành phố, 3 thị xã và 7 huyện, với diện tích tự nhiên 6 873,55 km² và dân số 1 034,667 người (năm 2022). Bình Phước nằm trong vùng kinh tế trọng điểm phía Nam và tiếp giáp khu vực Tây Nguyên, là khu vực có nhiều nét truyền thống văn hóa độc đáo, đồng thời có đường biên giới với Campuchia.", 
        "các đơn vị hành chính của bình phước": [
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
        "tà thiết": [
            "Theo Địa chí Bình Phước, Căn cứ Tà Thiết là di tích lịch sử quốc gia thuộc xã Lộc Thành, huyện Lộc Ninh, có diện tích 3.500ha. Trong hai cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ, căn cứ Bộ Chỉ huy Miền đóng tại Tà Thiết là căn cứ cuối cùng được thành lập ở chiến trường miền Nam.",
            "Xem thêm tại: https://binhphuoc.gov.vn/vi/dukhach/di-tich-van-hoa-61/khu-di-tich-quoc-gia-dac-biet-bo-chi-huy-mien-ta-thiet-105.html",
            "https://youtu.be/oOMigIcaEaI"],
        "căn cứ bộ chỉ huy quân giải phóng miền nam việt nam": [
            "Theo Địa chí Bình Phước, Căn cứ Tà Thiết là di tích lịch sử quốc gia thuộc xã Lộc Thành, huyện Lộc Ninh, có diện tích 3.500ha. Trong hai cuộc kháng chiến chống thực dân Pháp và đế quốc Mỹ, căn cứ Bộ Chỉ huy Miền đóng tại Tà Thiết là căn cứ cuối cùng được thành lập ở chiến trường miền Nam.",
            "Xem thêm tại: https://binhphuoc.gov.vn/vi/dukhach/di-tich-van-hoa-61/khu-di-tich-quoc-gia-dac-biet-bo-chi-huy-mien-ta-thiet-105.html;",
            " https://youtu.be/oOMigIcaEaI"],
        "điểm cuối đường ống dẫn xăng dầu vk96 nằm ở đâu": [
            "Di tích Điểm cuối đường ống dẫn xăng dầu VK96 tọa lạc tại xã Bù Gia Mập, huyện Bù Gia Mập, tỉnh Bình Phước. Di tích thuộc hệ thống di tích lịch sử quốc gia đặc biệt Đường Trường Sơn – Đường Hồ Chí Minh.",
            " Xem thêm tại: https://baotangbinhphuoc.org.vn/di-tich-quoc-gia-dac-biet-diem-cuoi-duong-ong-dan-xang-dau-vk96/"],
        "bồn xăng kho nhiên liệu vk98 ở đâu": [
            "Di tích Bồn xăng – Kho nhiên liệu VK98 tọa lạc tại xã Lộc Quang, huyện Lộc Ninh, tỉnh Bình Phước. Di tích thuộc hệ thống di tích lịch sử quốc gia đặc biệt Đường Trường Sơn – Đường Hồ Chí Minh. Tổng kho nhiên liệu VK98 được xây dựng năm 1974, tọa lạc quanh ngọn đồi 117 (tên một điểm cao trong bản đồ quân sự) thuộc xã Lộc Quang, huyện Lộc Ninh, với diện tích 10ha, gồm 7 bồn, mỗi bồn có sức chứa 250.000 lít, Tổng kho nhiên liệu VK98 có trữ lượng 1.750.000 lít.",
            " Xem thêm tại: https://baotangbinhphuoc.org.vn/di-tich-quoc-gia-dac-biet-bon-xang-kho-nhien-lieu-vk98/"],
        "điểm cuối đường mòn hồ chí minh 1973 nằm ở đâu": [
            "Di tích điểm cuối đường mòn Hồ Chí Minh - 1973 nằm ở ngã tư Chơn Thành, phường Hưng Long, thị xã Chơn Thành, tỉnh Bình Phước.",
            " Xem thêm tại: https://baobinhphuoc.com.vn/news/200/99817/mot-so-thong-tin-ve-doan-cuoi-duong-ho-chi-minh-o-binh-phuoc"],
        "mộ 3000 đồng bào an lộc bị đế quốc mỹ tàn sát": [
            "Di tích Mộ 3.000 đồng bào An Lộc bị đế quốc Mỹ tàn sát ngày 03/10/1972 (còn gọi là Mộ tập thể 3.000 người) tọa lạc tại phường An Lộc, thị xã Bình Long, tỉnh Bình Phước, là một trong những chứng tích ghi dấu tội ác chiến tranh mà Mỹ – ngụy đã gây ra cho nhân dân ta nói chung và nhân dân Bình Long nói riêng trong kháng chiến chống Mỹ.",
            " Xem thêm tại: "],
        "chùa quang minh ở đâu": "Chùa Quang Minh ở thành phố Đồng Xoài."
    };

    input = input.toLowerCase();

    // Tìm câu trả lời gần nhất trong responses
    let closestMatch = '';
    let minDistance = Infinity;

    for (const [key, value] of Object.entries(responses)) {
        const distance = levenshtein(input, key);
        if (distance < minDistance) {
            minDistance = distance;
            closestMatch = key;
        }
    }

    let response = responses[closestMatch] || null;

    // Nếu không tìm thấy câu trả lời phù hợp, gọi OpenAI API
    if (!response || minDistance > 5) {  // Nếu câu hỏi quá khác biệt hoặc yêu cầu tạo đoạn văn
        try {
            response = await getOpenAIResponse(input);  // Gọi OpenAI API để trả lời
        } catch (error) {
            response = "Xin lỗi, tôi không thể trả lời ngay bây giờ. Vui lòng thử lại sau.";
        }
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
    if (savedChatHistory) {
        document.getElementById("chatbox").innerHTML = savedChatHistory;
        const chatbox = document.getElementById("chatbox");
        chatbox.scrollTop = chatbox.scrollHeight;
    }
    displayInitialMessages();
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
        botWrapper.innerHTML = `<img src="chatbot.png" alt="Bot" class="bot-avatar"><div class="bot-message">${message}</div>`;
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

async function sendMessage() {
    const userInput = document.getElementById("userInput").value;

    if (userInput.trim() === "") return;

    const chatbox = document.getElementById("chatbox");

    const userWrapper = document.createElement("div");
    userWrapper.className = "message-wrapper";
    userWrapper.innerHTML = `<div class="user-message">${userInput}</div><img src="user.jpg" alt="User" class="user-avatar">`;
    chatbox.appendChild(userWrapper);

    document.getElementById("userInput").value = "";

    const thinkingWrapper = document.createElement("div");
    thinkingWrapper.className = "message-wrapper";
    thinkingWrapper.innerHTML = `<img src="chatbot.png" alt="Bot" class="bot-avatar"><div class="bot-message">✍Thinking...</div>`;
    chatbox.appendChild(thinkingWrapper);
    chatbox.scrollTop = chatbox.scrollHeight;

    // Delay for 2 seconds before chatbot responds (2000 milliseconds)
    setTimeout(async () => {
        try {
            const botResponse = await getBotResponse(userInput);
            thinkingWrapper.remove();

            const botWrapper = document.createElement("div");
            botWrapper.className = "message-wrapper";

            if (Array.isArray(botResponse)) {
                // Format array as HTML list
                const listItems = botResponse.map(item => `<li>${item}</li>`).join('');
                botWrapper.innerHTML = `<img src="chatbot.png" alt="Bot" class="bot-avatar"><div class="bot-message"><ul>${listItems}</ul></div>`;
            } else {
                // If it's not an array, display normal text response
                botWrapper.innerHTML = `<img src="chatbot.png" alt="Bot" class="bot-avatar"><div class="bot-message">${botResponse}</div>`;
            }

            chatbox.appendChild(botWrapper);
            chatbox.scrollTop = chatbox.scrollHeight;
            saveChatHistory();
        } catch (error) {
            console.error("Error generating response:", error);
            thinkingWrapper.remove();

            const errorWrapper = document.createElement("div");
            errorWrapper.className = "message-wrapper";
            errorWrapper.innerHTML = `<img src="chatbot.png" alt="Bot" class="bot-avatar"><div class="bot-message">Oops, có lỗi xảy ra. Xin vui lòng thử lại sau.</div>`;
            chatbox.appendChild(errorWrapper);

            chatbox.scrollTop = chatbox.scrollHeight;
        }
    }, 2000); // Delay for 2 seconds
}

function toggleChat() {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.style.display = (chatContainer.style.display === 'none' || chatContainer.style.display === '') ? 'flex' : 'none';
}

document.addEventListener("DOMContentLoaded", loadChatHistory);
