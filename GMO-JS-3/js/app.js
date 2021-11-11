
var render = document.querySelector('.content-message-2');
var render2 = document.querySelector('.content-message');
const input2 = document.getElementById('content-send-2');
const input = document.getElementById('content-send');
let checkBold = true;
let checkItalic = true;
function clickSend() {
    var text = document.getElementById('content-send').value;
    var node = document.createElement("LI");
    // Xử lý khi chọn đậm nhiên và send thì thêm css 
    if (input.name === 'bold') {
        node.className = 'bold'
    } else if (input.name === 'italic') {
        node.className = 'italic'
    }
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    render.appendChild(node);
    document.getElementById('content-send').value = '';
}

function clickSend2() {
    var text = document.getElementById('content-send-2').value;
    var node = document.createElement("LI");
    // Xử lý khi chọn đậm nhiên và send thì thêm css 
    if (input2.name === 'bold') {
        node.className = 'bold'
    } else if (input2.name === 'italic') {
        node.className = 'italic'
    }
    // xử lý giử nhiều tin nhắn 
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    render2.appendChild(node);
    document.getElementById('content-send-2').value = '';

}
// reset
function reset() {
    var list = document.querySelector('.content-message')
    var li = list.getElementsByTagName("LI");
    for (var i = 0, len = li.length; i != len; ++i) {
        li[0].parentNode.removeChild(li[0]);
    }
    // Xóa chữ đậm và nghien
    document.getElementById('dam').classList.remove('choose');
    document.getElementById('nghieng').classList.remove('choose');
    input.style = "font-weight:normal";
    //Xóa dữ liệu trong input khi bấm reset
    document.getElementById('content-send').value = "";
}
function reset2() {
    var list = document.querySelector('.content-message-2')
    var li = list.getElementsByTagName("LI");
    for (var i = 0, len = li.length; i != len; ++i) {
        li[0].parentNode.removeChild(li[0]);
    }
    // Xóa chữ đậm và nghiên
    document.getElementById('dam-2').classList.remove('choose');
    document.getElementById('nghieng-2').classList.remove('choose');
    input2.style = "font-weight:normal";
    //Xóa dữ liệu trong input khi bấm reset
    document.getElementById('content-send-2').value = "";
}

// Xử lý chữ đậm  cho khung bên phải
function dam2() {
    // xử lý chọn và bỏ chọn đậm
    if (checkBold) {
        document.getElementById('dam-2').classList.add('choose');
        input2.style = "font-weight:bold";
        input2.name = 'bold'
        checkBold = false
    } else {
        document.getElementById('dam-2').classList.remove('choose');
        // input2.style = "font-weight:100";
        input2.name = 'normal'
        checkBold = true
    }
    //Xóa chữ nghiên khi chọn đậm
    document.getElementById('nghieng-2').classList.remove('choose');
}
//Xử lý chữ nghiêng cho khung bên phải
function nghieng2() {
    //xử lý chọn và bỏ chọn chữ nghiên 
    if (checkItalic) {
        document.getElementById('nghieng-2').classList.add('choose');
        input2.style = "font-style:italic";
        input2.name = 'italic'
        checkItalic = false
    } else {
        document.getElementById('nghieng-2').classList.remove('choose');
        input2.name = 'normal'
        checkItalic = true;
    }
    // Xóa chữ nghiên khi đạm khi chọn nghiêng
    document.getElementById('dam-2').classList.remove('choose');
}

// Xử lý chữ đậm  cho khung bên Trái
function dam() {
    // xử lý chọn và bỏ chọn đậm
    if (checkBold) {
        document.getElementById('dam').classList.add('choose');
        input.style = "font-weight:bold";
        input.name = 'bold'
        checkBold = false
    } else {
        document.getElementById('dam').classList.remove('choose');
        // input.style = "font-weight:100";
        input.name = 'normal'
        checkBold = true
    }
    //Xóa chữ nghiên khi chọn đậm
    document.getElementById('nghieng').classList.remove('choose');
}
//Xử lý chữ nghiêng cho khung bên Trái
function nghieng() {
    //xử lý chọn và bỏ chọn chữ nghiên 
    if (checkItalic) {
        document.getElementById('nghieng').classList.add('choose');
        input.style = "font-style:italic";
        input.name = 'italic'
        checkItalic = false
    } else {
        document.getElementById('nghieng').classList.remove('choose');
        input.name = 'normal'
        checkItalic = true;
    }
    // Xóa chữ nghiên khi đạm khi chọn nghiêng
    document.getElementById('dam').classList.remove('choose');
}




