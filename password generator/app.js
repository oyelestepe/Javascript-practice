const btn = document.getElementById('btn');
const word = document.getElementById('word');
const input = document.getElementById('input');
const lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const symbols = ["!","@","#","$","%","^","&","*","(",")", "_","+","="];
const upperLetters = ["A","B","C","D","E","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
const all = lowerLetters.concat(numbers).concat(symbols).concat(upperLetters)



btn.addEventListener('click', () => {
    passwordLength = input.value
    let password = ""
    if(passwordLength < 10 || passwordLength > 50){
        alert("Enter a number between 10-50")
    } else {
        for(let i = 0; i < passwordLength; i++){
            password += all[Math.floor(Math.random() * all.length)]
        }
    } 
    word.innerText = `Password : ${password}`
});





