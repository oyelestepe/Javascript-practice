const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const restartBtn = document.getElementById('restart');
const op = document.querySelectorAll('.op')
let humanChoseDisplay = document.getElementById('humansc')
let humanChose
let resultDisplay = document.querySelector('#result')


op.forEach(option => option.addEventListener('click', (e) => {
        removeActive()
        option.classList.add('active')
        humanChose = e.target.id  
        humanChoseDisplay.innerHTML = humanChose  
       setTimeout(generateComputerChoice,800) 
       setTimeout(getResult,1500) 
    })
);


function removeActive() {
    op.forEach(option => {
            option.classList.remove('active')
        })
};

    // PC'S PİCK 

const pcRock = document.querySelector('#pc_rock');
const pcPaper = document.querySelector('#pc_paper');
const pcScissors = document.querySelector('#pc_scissors');
const pcOp = document.querySelectorAll('.pc_op');
const pcChoseDisplay = document.getElementById('pcsc')


let pcChose
let result

function generateComputerChoice() {
    const pcMove =  pcOp[(Math.floor(Math.random() * pcOp.length))];
    pcMove.classList.add('active');
    pcChose = pcMove.id 
    pcChoseDisplay.innerHTML = pcChose  
}

function getResult() {
    if(pcChose === humanChose) {
        result = 'its a draw!'
    }
    if(pcChose === 'rock' && humanChose === 'paper') {
        result = 'You win!'
    }
    if(pcChose === 'rock' && humanChose === 'scissors') {
        result = 'You lost!'
    }
    if(pcChose === 'paper' && humanChose === 'scissors') {
        result = 'You win!'
    }
    if(pcChose === 'paper' && humanChose === 'rock') {
        result = 'You lost!'
    }
    if(pcChose === 'scissors' && humanChose === 'rock') {
        result = 'You win!'
    }
    if(pcChose === 'scissors' && humanChose === 'paper') {
        result = 'You lost!'
    }
    resultDisplay.innerHTML = result
}

restartBtn.addEventListener('click', () => {
    window.location.reload()
})