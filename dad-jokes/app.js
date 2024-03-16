const apiURL = "https://icanhazdadjoke.com/";
const jokeEl = document.getElementById('joke')
const btn = document.getElementById('btn');



btn.addEventListener('click', getData)

 async function getData() {
    jokeEl.textContent = "Loading..."
    try{
        const response = await fetch(apiURL, {
            headers: {
                "accept": "application/json",
            }
        });

        const data = await response.json();

        jokeEl.textContent = data.joke

    } catch(err){
        console.log(err)
    }
    
} 

