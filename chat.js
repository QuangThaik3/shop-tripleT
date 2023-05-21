
function firstBotMess(){
    const firstMess = "Chào bạn,bạn cần shop hỗ trợ gì ạ ?";
    document.getElementById("botStartMessage").innerHTML = `<span>${firstMess}</span>`;    
}

firstBotMess();

function getBotMessage(userText) {
    let botResponse = setBotMessage(userText);
    let botHtml = `<div class="chat-shop-you">
    <img src="https://tawk.link/6389ad54b0d6371309d23fb5/var/trigger-images/c0035ba16c93e1e9ec9e1cbfa2a3c39c2ec22bbb.jpg">
    <p id="botStartMessage" class="botText"><span>${botResponse}</span></p>
   </div>`;
    $(".shop-chat").append(botHtml);
    document.getElementById("chat-bar").scrollIntoView(true);
}


function getUserMessage() {
    let userText = $("#textInput").val();

    let userHtml = `<p class="userText"><span>${userText}</span></p>`;

    $("#textInput").val("");
    $(".shop-chat").append(userHtml);
    document.getElementById("chat-bar").scrollIntoView(true);

    setTimeout(() => {
        getBotMessage(userText);
    }, 1000)

}

function buttonSendText(sampleText) {
    let userHtml = `<p class="userText"><span>${sampleText}</span></p>`;

    $("#textInput").val("");
    $(".shop-chat").append(userHtml);
    document.getElementById("chat-bar").scrollIntoView(true);

    setTimeout(() => {
        getBotMessage(sampleText);
    }, 1000)
}

function sendButton() {
     if($("#textInput").val().length > 0)
    getUserMessage();
}

function heartButton() {
    buttonSendText("Tôi rất hài lòng với tư vấn và chia sẻ của shop!")
}


$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        e.preventDefault();
        if($("#textInput").val().length > 0)
        getUserMessage();
    }
});


function setBotMessage(input) {
    if (input == "hello") {
        return "Hello there!";
    } 
    else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if (input == "Tôi rất hài lòng với tư vấn và chia sẻ của shop!"){
        return "Cảm ơn bạn đã quan tâm và ủng hộ ShopDunk!"
    }
     else {
        return "Chúc bạn tìm được sản phẩm ưng ý";
    }
}


