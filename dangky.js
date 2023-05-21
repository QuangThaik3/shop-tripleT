const Email = document.querySelector('#text-email');
const Tel = document.querySelector('#text-tel');
const Pass = document.querySelector('#text-pass');
const Password = document.querySelector('#text-password');
const Ten = document.querySelector('#text-ten');
const User = document.querySelector('#text-user');
const checkEmail = document.querySelector('#check-email');
const checkTel = document.querySelector('#check-tel');
const checkPass = document.querySelector('#check-pass');
const checkPassword = document.querySelector('#check-password');
const checkPass_s = document.querySelector('#check-pass-s');
const checkTen = document.querySelector('#check-ten');
const checkUser = document.querySelector('#check-user');
const Btn = document.querySelector('#login-btn');
const modal = document.querySelector('#my-modal')
let count = 0

function index() {
    window.location.href = "index.html";
}

Email.addEventListener('blur',() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Valid = regex.test(Email.value);
    if(!Valid){
        Email.style.marginBottom = "0px";
        checkEmail.style.display = 'block';
    }else{
        Email.style.marginBottom = "15px";
        checkEmail.style.display = 'none';
        count++;
    }
    console.log(count);
})

Tel.addEventListener('blur',() => {
    const regex = /^0\d{9}$/;
    const Valid = regex.test(Tel.value);
    if(!Valid){
        Tel.style.marginBottom = "0px";
        checkTel.style.display = 'block';
    }else{
        Tel.style.marginBottom = "15px";
        checkTel.style.display = 'none';
        count++;
    }
    console.log(count);
})

Pass.addEventListener('blur', () => {
    const regex = /^(?=.*[#?!@$%^&*-]).{8,}$/;
    const Valid = regex.test(Pass.value);
    if (!Valid) {
        Pass.style.marginBottom = "0px";
        checkPass.style.display = 'block';
        checkPass_s.style.display = 'block';
    } else {
        Pass.style.marginBottom = "15px";
        checkPass.style.display = 'none';
        checkPass_s.style.display = 'none';
        count++;
    }
    console.log(count);
});

Password.addEventListener('blur', () => {
    const regex = Pass.value;
    if(Password.value.length == 0){
        count--;
    }
    if(regex != Password.value){
        Password.style.marginBottom = "0px";
        checkPassword.style.display = 'block';
    }else{
        Password.style.marginBottom = "15px";
        checkPassword.style.display = 'none';
        count++;
    }
    console.log(count);
})

Ten.addEventListener('blur',() => {
    if(Ten.value.length == 0){
        Ten.style.marginBottom = "0px";
        checkTen.style.display = 'block';
    }else{
        Ten.style.marginBottom = "15px";
        checkTen.style.display = 'none';
        count++;
    }
    console.log(count);
})

User.addEventListener('blur',() => {
    if(User.value.length == 0){
        User.style.marginBottom = "0px";
        checkUser.style.display = 'block';
    }else{
        User.style.marginBottom = "15px";
        checkUser.style.display = 'none';
        count++;
    }
    console.log(count);
})


Btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(count);
    var username = User.value;
    var password = Pass.value;
    var ten = Ten.value;
    var sdt = Tel.value;
    var email = Email.value;
    if(count >= 6){
        modal.style.display = 'block';
        localStorage.setItem("username",username);
        localStorage.setItem("password",password);
        localStorage.setItem("ten",ten);
        localStorage.setItem("sdt",sdt);
        localStorage.setItem("email",email);
        setTimeout(index,3000);
    }
})

window.onload = function() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("ten");
    localStorage.removeItem("sdt");
    localStorage.removeItem("email");
}

