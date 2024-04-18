const apiKey= "82b76ecfae84a0ac5ea89b1b63280479";
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const weather_description = document.getElementById('weather-description');
const cityName = document.getElementById('cityName');
const img = document.getElementById('img');
const container = document.querySelector('.info')
async function fetchData() {
    try{
        const city = document.getElementById('cityInput').value;
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        const data = await response.json()
        const celcius = data.main.temp - 273
        const imgIcon = data.weather[0].icon;
        const imgLink = `https://openweathermap.org/img/wn/${imgIcon}@2x.png`

        container.innerHTML = `
        <h1 id="cityName">${data.name}</h1>
        <img src="${imgLink}" id="img">
        <h1 id="temp">${Math.round(celcius) +"°c"}</h1>
        <h1 id="weather">${data.weather[0].main}</h1>
        <h2 id="weather-description">${data.weather[0].description}</h2>
        `
    }
    catch (error) {
        console.error(error);
    }
    
}