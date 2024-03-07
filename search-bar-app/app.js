const accessKey = "PXUWf8u25Laf8lK9F3ukCqnAWhN5CTtm6oUfg1PqVVQ";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn")
const clearBtn = document.getElementById("clear-btn");
const showLessBtn = document.getElementById("show-less-btn")
showMoreBtn.style.display = "none";
let keyword = "";
let page = 0;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json()

    if(page === 1) {
        searchResult.innerHTML = "";
    }
    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.className = "img"
        image.src = result.urls.small

        searchResult.appendChild(image);
    })
   

    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
    
})

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
    
})

clearBtn.addEventListener("click", () => {
    searchBox.value = "";
    page = 0;
   
})



