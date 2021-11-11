// Xử lý validate require
function handleBlurRequired(event) {
    //Xử lý chuỗi fullname brithday, pass, confirmpass rổng
    if (event.target.name === 'fullName', 'birthday', 'password', 'confirmpassword') {
        if (event.target.value.trim().length === 0) {
            // Thêm class invalid khi data input emty
            event.target.parentElement.classList.add('invalid')
            event.target.nextElementSibling.innerHTML = 'Vui lòng nhập trường này'
        }
    }
}
// Xử lý validate Email 
function handleBlurEmail(event) {
    //Xử lý chuỗi email rổng và nhập sai email
    if (event.target.name === 'email') {
        var pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var email = event.target.value;
        if (email.match(pattern)) {
            event.target.parentElement.classList.remove('invalid')
            event.target.nextElementSibling.innerHTML = '';
        } else {
            event.target.parentElement.classList.add('invalid')
            event.target.nextElementSibling.innerHTML = 'Trường này phải là Email';
        }
        //Nếu giá input email có giá không có giá thị thì báo lỗi
        if (event.target.value.trim().length === 0) {
            event.target.parentElement.classList.add('invalid')
            event.target.nextElementSibling.innerHTML = 'Vui lòng nhập trường này'
        }
    }
}
// Xử lý validate Phone 
function handleBlurPhone(event) {
    //Xử lý phone rổng
    if (event.target.name === 'phone') {
        // số điện thoại quá 10 số
        if (event.target.value.trim().length === 10) {
        } else {
            event.target.parentElement.classList.add('invalid')
            event.target.nextElementSibling.innerHTML = 'Số điện thoại sai '
        }
        // số điện thoại bắt đầu bằng sô 0
        if (!event.target.value.startsWith(0)) {
            event.target.parentElement.classList.add('invalid')
            event.target.nextElementSibling.innerHTML = 'Số điện phải bắt đầu bằng số 0'
        } if (event.target.value.trim().length === 0) {
            event.target.parentElement.classList.add('invalid')
            event.target.nextElementSibling.innerHTML = 'Vui lòng nhập trường này'
        }
        //format số khi nhập đúng
        if (event.target.value.length === 10) {
            var numberFormat = event.target.value.toString();
            event.target.value = formatPhoneNumber(numberFormat);
        }
    }
}
//Xử lý xóa class khi input có giá trị
function handleInputRemove(event) {
    if (event.target.name === 'fullName', 'email', 'phone', 'birthday') {
        event.target.value = titleCase(event.target.value);
        event.target.parentElement.classList.remove('invalid');
        event.target.nextElementSibling.innerHTML = '';
    }
}
//Xử lý validate password
function handleInputPass(event) {
    if (event.target.name === 'password') {
        event.target.parentElement.classList.remove('invalid');
        event.target.nextElementSibling.innerHTML = '';
    }
    //Xử lý passwword
    if (event.target.name === 'password') {

        if (event.target.value.length < 8) {
            event.target.parentElement.classList.add("invalid");
            event.target.nextElementSibling.innerHTML = 'Mật khẩu phải trên 8 ký tự '
        }
        var special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (!event.target.value.match(special)) {
            event.target.parentElement.classList.add("invalid");
            event.target.nextElementSibling.innerHTML = 'Mật khẩu phải có một ký tự đặt biêt'
        }
        //Kiểm tra chữ thường
        var lowerCaseLetters = /[a-z]/g;
        if (!event.target.value.match(lowerCaseLetters)) {
            event.target.parentElement.classList.add("invalid");
            event.target.nextElementSibling.innerHTML = 'Mật khẩu phải có một chữ thường'
        }
        //Kiểm tra chữ hoa
        var upperCaseLetters = /[A-Z]/g;
        if (!event.target.value.match(upperCaseLetters)) {
            event.target.parentElement.classList.add("invalid");
            event.target.nextElementSibling.innerHTML = 'Mật khẩu phải có một chữ hoa'
        }
        var numbers = /[0-9]/g;
        if (!event.target.value.match(numbers)) {
            event.target.parentElement.classList.add("invalid");
            event.target.nextElementSibling.innerHTML = 'Mật khẩu phải có một số '
        }
    }
}
// Xử lý validate confirmPasss
function handleInputConfirmPass(event) {
    if (event.target.name === 'confirmpassword') {
        event.target.parentElement.classList.remove('invalid');
        event.target.nextElementSibling.innerHTML = '';
        var pw1 = document.getElementById('password').value;
        var pw2 = event.target.value
        if (pw1 != pw2) {
            event.target.parentElement.classList.add("invalid");
            event.target.nextElementSibling.innerHTML = 'Mật khẩu không giống nhau'
        } else {
            return true;
        }
    }
}
// Xử lý viết hoa chữ cái đầu
function titleCase(string) {
    //1. Tách các từ, cụm từ trong chuỗi ban đầu
    let sentence = string.toLowerCase().split(" ");
    //2. Tạo vòng lặp và viết hoa chữ cái đầu tiên của các từ, cụm từ trên
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    //3. Nối các từ, cụm từ đã xử lý ở trên và trả về kết quả
    return sentence.join(" ");
}
// Xử lý format sđt
function formatPhoneNumber(phoneNumberString) {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return match[1] + '-' + match[2] + '-' + match[3]
    };
    return null
}
//chỉ cho nhập số trong text sđt 
function isNumberKey(e) {
    var charCode = (e.which) ? e.which : e.keyCode; 
    //Các phím được nhấn nằm trong khoảng từ 31 đên 48 và không lớn 57
    //Có nghĩa la cái phím được nhấn phải nằm trong khoảng từ 48 đến 57 (key code)
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
// Render 
var textname = document.getElementById('text-fullname');
var textemail = document.getElementById('text-email');
var textphone = document.getElementById('text-phone');
var textbirthday = document.getElementById('text-birthday');
const img = document.querySelector('.img-ctl')
const imgEnd = document.querySelector('.img-ctl.end')
// Add dữ liệu xuống form phía dưới
function add() {
    var fullname = document.querySelector('#fullname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var birthday = document.getElementById('birthday').value;
    console.log(fullname, email, phone, birthday)
    //Show các dữ liệu ra form
    textname.innerHTML = fullname;
    textemail.innerHTML = email;
    textphone.innerHTML = phone;
    textbirthday.innerHTML = birthday;
    // show hình  ra form dưới
    imgEnd.src = img.src
}
//Reset
function reset() {
    textname.innerHTML = '';
    textemail.innerHTML = '';
    textphone.innerHTML = '';
    textbirthday.innerHTML = '';
    // Remove các class validate
    document.querySelector('.form-item').classList.remove('invalid');
    document.querySelector('.form-message').innerHTML = '';
    // Remove các giá trị trong input
    document.getElementById('fullname').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('birthday').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmpassword').value = '';
    // Xóa hình ảnh 
    img.src= 'https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg';
    imgEnd.src= 'https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg';
}
// Nhấn Shift để add
window.addEventListener('keydown', click)
function click(e) {
    if (e.keyCode == 16) {
        add();
    }
    // Nhấn delete để reset 
    if (e.keyCode == 46) {
        reset();
    }
}
// Xử lý upload hình ảnh
window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('.img-ctl');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img = URL.createObjectURL(this.files[0]);
        }
    });
});
//Chọn vào hình ảnh để up load hình
const inputimgElement = document.querySelector('#inputimg')
function uploadAvt() {
    inputimgElement.click()
}
