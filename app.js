const URL = "https://hp-api.onrender.com/api/characters";

const containerCard = document.getElementById('containerCard');
let año = 2022;
window.addEventListener("DOMContentLoaded", getApi);

function getApi() {
    fetch(URL)
    .then(response => response.json())
    .then(data => data.map(result =>{

        const divImage = document.createElement("div")
        divImage.classList.add("cardImge")

        const divDescription = document.createElement("div")
        divDescription.classList.add("cardDescription")

        const div = document.createElement("div");
        div.classList.add("card")

        const img = document.createElement("img")
        img.setAttribute("src",result["image"]);
        img.classList.add("image")

        const name = document.createElement("h2");
        name.textContent = result["name"]
        name.classList.add("name")

        const gender = document.createElement("h2");
        gender.textContent = result["gender"]
        gender.classList.add("name")

        const age = document.createElement("h2")
        age.textContent = result["yearOfBirth"]
        age.classList.add("name")


        divImage.appendChild(img)
        divDescription.appendChild(name)
        divDescription.appendChild(gender)
        divDescription.appendChild(age)
        div.appendChild(divImage)
        div.appendChild(divDescription)
        containerCard.appendChild(div)


    }))
}