const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const btn = document.querySelector('.btn');
const info = document.getElementById('info');

btn.addEventListener('click', () => {
    if(usernameInput.value == 'user' && passwordInput.value == 'admin'){
       info.innerText = 'Logged in successfully'
    } else {
        addClass()
        setTimeout(() => {
            removeClass()
        },10000)       
    }
    
})

function addClass(){
    info.innerText = 'Access denied, try again in 10 seconds'
    btn.classList.add("disabled")
}

function removeClass(){
    info.innerText = 'Try again'
    btn.classList.remove("disabled")
}