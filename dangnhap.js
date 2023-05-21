const User = document.getElementById('signin-user');
const Pass = document.getElementById('signin-pass');
const Sub = document.getElementById('signin-sub');
const modal = document.querySelector('#my-modal')

Sub.addEventListener('click',(e) => {
    e.preventDefault();

    var signinUser = User.value;
    var signinPass = Pass.value;

    var user = localStorage.getItem("username");
    var pass = localStorage.getItem("password");

    if(signinUser === user && signinPass === pass){
        modal.style.display = 'block';
        setTimeout(index,2000);
    }
})

function index() {
    window.location.href = "index.html";
}
