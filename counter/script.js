let decrise = document.querySelector('.decrise')
let increase = document.querySelector('.increase')
const reset = document.querySelector('.reset')
let number = document.querySelector('.number')

let counter = 0

decrise.addEventListener('click', () => {
    counter--
    number.innerText = counter
})

increase.addEventListener('click', () => {
    counter++
    number.innerText = counter
})

reset.addEventListener('click', () => {
    counter = 0
    number.innerText = counter
})

