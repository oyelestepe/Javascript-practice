const submitBtn = document.getElementById('submit');
const clearBtn = document.getElementById('clear');
let weight = document.getElementById('weight');
let height = document.getElementById('height');


submitBtn.addEventListener('click', () => {
    let bmi = (weight.value / (height.value * height.value)).toFixed(4)  ;
    document.getElementById('heading').innerHTML = 'Your BMI is :'
    document.getElementById('bmi-result').innerHTML = bmi

     if (bmi < 18.5) {
         document.getElementById('message').innerHTML = 'You are underweight'
     }  if (bmi >= 18.5 && bmi <= 24.9) {
         document.getElementById('message').innerHTML = 'You are a healthy weight'
     } if  (bmi > 25) {
         document.getElementById('message').innerHTML = 'You are a overweight'
     };
    
});


clearBtn.addEventListener('click', () => {
    window.location.reload()
})

