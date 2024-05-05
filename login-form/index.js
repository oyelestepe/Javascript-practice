const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const btn = document.querySelector('.btn');
const info = document.getElementById('info');
const togglePassword = document.querySelector('.toggle-password');
const passwordIcon = document.getElementById('passwordIcon');

btn.addEventListener('click', () => {
    if(usernameInput.value === 'user' && passwordInput.value === 'admin') {
        info.style.color = 'green'
       info.innerText = 'Logged in successfully';
    } else {
        addClass();
        let countdown = 10;
        let timer = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                info.innerText = `Access denied, try again in ${countdown} seconds`;
            } else {
                clearInterval(timer);
                removeClass();
                countdown = 10;
            }
        }, 1000);
    }  
});

function addClass() {
    info.style.color = 'red'
    info.innerText = `Access denied, try again in 10 seconds`;
    btn.classList.add("disabled");
}

function removeClass() {
    info.innerText = 'Try again';
    btn.classList.remove("disabled");
}

function togglePasswordVisibility() {
    const passwordField = document.getElementById("passwordInput");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordIcon.classList.remove("fa-eye-slash");
        passwordIcon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        passwordIcon.classList.remove("fa-eye");
        passwordIcon.classList.add("fa-eye-slash");
    }
}
