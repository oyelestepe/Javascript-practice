const input = document.getElementById('input');
const btn = document.getElementById('search-btn')
const container = document.querySelector('.container')
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
    let movieName = input.value
    let apiURL = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`
   
    
    if(movieName.length <= 0){
        container.innerHTML = "<h3>Please enter a movie name</h3>";
    } else {
        let data = await fetch(apiURL);
        let response = await data.json();
        if(response.Response == "True"){
            container.innerHTML = `
            <div class="img-container">
                <img src="${response.Poster}" id="poster-img">
            </div>
            <h1 id="title">${response.Title}</h1> 
            <h1 id="title">${response.Title}</h1>
            <h3 id="genre">${response.Genre}</h3>
            <h4 id="actors">${response.Actors}</h4>
            <h3 id="rating">${response.imdbRating}</h3>
            <h3 id="director">${response.Director}</h3>
            <p id="plot">${response.Plot}</p>
            <h5 id="runtime">${response.Runtime}</h5>
            <h4 id="type">${response.Type}</h4>
            <h5 id="rated">${response.Rated}</h5>
            `
        } else {
            container.innerHTML = `<h3>${response.Error} </h3>`
        }
    }
}
