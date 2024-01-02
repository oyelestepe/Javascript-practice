const body = document.querySelector('.body');
const base = document.querySelector('#base');

function changeColor() {
    body.style.backgroundColor = `${base.value}`
};

base.addEventListener('change', changeColor);