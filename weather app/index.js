const apiKey= "82b76ecfae84a0ac5ea89b1b63280479";
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const weather_description = document.getElementById('weather-description');
const cityName = document.getElementById('cityName');
const img = document.getElementById('img');

async function fetchData() {
    try{
        const city = document.getElementById('cityInput').value;
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        const data = await response.json()
        cityName.innerText = data.name
        weather.innerText = data.weather[0].main
        weather_description.innerText = data.weather[0].description
        const celcius = data.main.temp - 273
        temp.innerText = Math.round(celcius) +"°c"
        const imgIcon = data.weather[0].icon;
        img.src = `https://openweathermap.org/img/wn/${imgIcon}@2x.png`
        img.style.display = "block"
    }
    catch (error) {
        console.error(error);
    }
    
}