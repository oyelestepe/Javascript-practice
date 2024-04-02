const input = document.getElementById('input');
const btn = document.getElementById('search-btn')
const container = document.getElementsByClassName('container')

const title = document.getElementById('title');
const genre = document.getElementById('genre');
const actors = document.getElementById('actors');
const rating = document.getElementById('rating');
const director = document.getElementById('director');
const plot = document.getElementById('plot');
const runtime = document.getElementById('runtime');
const type = document.getElementById('type');
const rated = document.getElementById('rated');
const poster = document.getElementById('poster-img');

const key = "c4f635ac"
btn.addEventListener('click', getData)


async function getData(){
    let apiURL = `http://www.omdbapi.com/?t=${input.value}&apikey=${key}`
    let data = await fetch(apiURL);
    let response = await data.json();
    
    title.innerText = response.Title
    genre.innerText = response.Genre
    actors.innerText = response.Actors
    rating.innerText = response.imdbRating
    director.innerText = response.Director
    plot.innerText = response.Plot 
    runtime.innerText = response.Runtime
    type.innerText = response.Type 
    rated.innerText = response.Rated 
    poster.src = response.Poster
    /* <h1 id="title">${response.Title}</h1> 
    <h1 id="title">${response.Title}</h1>
    <h3 id="genre">${response.Genre}</h3>
    <h4 id="actors">${response.Actors}</h4>
    <h3 id="rating">${response.imdbRating}</h3>
    <h3 id="director">${response.Director}</h3>
    <p id="plot">${response.Plot}</p>
    <h5 id="runtime">${response.Runtime}</h5>
    <h4 id="type">${response.Type}</h4>
    <h5 id="rated">${response.Rated}</h5>*/

}

getData()

