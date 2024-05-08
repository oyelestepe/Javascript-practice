const rollBtn = document.getElementById('rollBtn');
const diceImgs = document.querySelectorAll('.dice');
const playerTotalScoreSpan = document.getElementById('playerTotalScore');
const pcTotalScoreSpan = document.getElementById('pcTotalScore');
const playerRoundScoreSpan = document.getElementById('playerRoundScore');
const pcRoundScoreSpan = document.getElementById('pcRoundScore');
const resultHeading = document.getElementById('result');


let playerTotalScore = 0;
let pcTotalScore = 0;
let playerRoundScore = null; 
let pcRoundScore = null; 


function rollDiceAndComputeScore() {

    const playerDice1Value = Math.floor(Math.random() * 6) + 1;
    const playerDice2Value = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice1').src = `images/Dice-${playerDice1Value}.png`;
    document.getElementById('dice2').src = `images/Dice-${playerDice2Value}.png`;

    const playerTotal = playerDice1Value + playerDice2Value;
    playerRoundScore = playerTotal;


    const pcDice1Value = Math.floor(Math.random() * 6) + 1;
    const pcDice2Value = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice3').src = `images/Dice-${pcDice1Value}.png`;
    document.getElementById('dice4').src = `images/Dice-${pcDice2Value}.png`;

    const pcTotal = pcDice1Value + pcDice2Value;
    pcRoundScore = pcTotal;


    if (playerTotal > pcTotal) {
        playerTotalScore++;
    } else if (pcTotal > playerTotal) {
        pcTotalScore++;
    }
    

    playerTotalScoreSpan.textContent = playerTotalScore;
    pcTotalScoreSpan.textContent = pcTotalScore;
    playerRoundScoreSpan.textContent = playerRoundScore; 
    pcRoundScoreSpan.textContent = pcRoundScore; 

    // Display result
    if (playerTotal > pcTotal) {
        resultHeading.textContent = "Player Wins!";
    } else if (pcTotal > playerTotal) {
        resultHeading.textContent = "PC Wins!";
    } else {
        resultHeading.textContent = "It's a Draw!";
    }
}


rollBtn.addEventListener('click', rollDiceAndComputeScore);
