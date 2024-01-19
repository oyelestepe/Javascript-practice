const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const dice4 = document.getElementById('dice4');
const rollBtn = document.getElementById('rollBtn');
const result = document.getElementById('result');
const humanScore = document.getElementById('humanScore');
const pcScore = document.getElementById('pcScore');

rollBtn.addEventListener('click', () => {
    dice1.src = `images/Dice-${Math.floor(Math.random()*6)+1}.png`
    dice2.src = `images/Dice-${Math.floor(Math.random()*6)+1}.png`
    dice3.src = `images/Dice-${Math.floor(Math.random()*6)+1}.png`
    dice4.src = `images/Dice-${Math.floor(Math.random()*6)+1}.png`

   let dice1V = parseInt(dice1.src.slice(46,47)) 
   let dice2V = parseInt(dice2.src.slice(46,47))
   let humantotal = dice1V + dice2V
   humanScore.innerText = humantotal

   let dice3V = parseInt(dice3.src.slice(46,47)) 
   let dice4V = parseInt(dice4.src.slice(46,47))
   let pctotal = dice3V + dice4V

    pcScore.innerText = pctotal
    if(humantotal > pctotal) {
       result.innerText =  "YOU WIN"
    }   else if (pctotal > humantotal) {
        result.innerText =  "PC WIN"
    } else if (humantotal = pctotal){
        result.innerText =  "DRAW"
    } 
    
}) 


    
