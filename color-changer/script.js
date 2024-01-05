const container = document.querySelector('.container');
const btn = document.querySelector('.change');

const colors = [
    'AntiqueWhite', 
    'Aquamarine', 
    'BlueViolet', 
    'CadetBlue', 
    'CornflowerBlue', 
    'DarkOliveGreen', 
    'DarkOrchid',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'PaleVioletRed',
    'Olive',
    'OliveDrab',
    'PaleTurquoise',
    'PeachPuff',
    'PowderBlue',
    'SaddleBrown',
    'SandyBrown',
    'SkyBlue',
    'SteelBlue',
    'Tomato'
];

 btn.addEventListener('click', changeColor);

 function changeColor (){

    let random = Math.floor(Math.random()*colors.length);
    container.style.backgroundColor = colors[random];
}





