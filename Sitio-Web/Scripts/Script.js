const searchBarCont = document.getElementById("search-bar-container");
const searchButton = document.getElementById("search-button")

const closeButton = document.getElementById("close-button");

searchButton.addEventListener('click', () =>{
    searchBarCont.classList.replace("search-bar-container-hidden", "search-bar-container-visible")
});

closeButton.addEventListener('click', () =>{
    searchBarCont.classList.replace("search-bar-container-visible", "search-bar-container-hidden")
});