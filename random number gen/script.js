const btn = document.querySelector('.btn');
const display = document.querySelector('.random');


btn.addEventListener('click', () => {
    let x = Math.floor((Math.random() * 100) + 1);
    display.innerHTML = x;
});