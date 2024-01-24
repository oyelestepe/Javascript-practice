const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const btn = document.getElementById('btn');
const info = document.getElementById('info');

btn.addEventListener('click', () => {
    if(usernameInput.value == 'user' && passwordInput.value == 'admin'){
       info.innerText = 'Logged in successfully'
    } else {
        info.innerText = 'Access denied'
    }
    
})

