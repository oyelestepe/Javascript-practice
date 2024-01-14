const pcNumber = Math.floor(Math.random()* 100)+1;
let attempts = 0;
let guess;

let running = true

while(running) {
    guess = window.prompt('Guess a number between 1-100')

    if(isNaN(guess)){
        window.alert('Enter a valid number')
    } else if(pcNumber > guess) {
        attempts++
        window.alert('too low')
    } else if(pcNumber < guess) {
        attempts++
        window.alert('too high')
    } else  {
        attempts++
        pcNumber === guess
        window.alert(`True! It's ${pcNumber} it took ${attempts} attempts.`) 
    }
}


