const imgElement = document.getElementById("dogPhoto");
async function fetchDog() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
       
        const dogPhoto = data.message
        imgElement.src = dogPhoto;
        imgElement.style.display = "block";
    }

    catch(error){
        console.error(error);
    }
}

