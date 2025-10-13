const searchBarCont = document.getElementById("search-bar-container");
const searchButton = document.getElementById("search-button")

const closeButton = document.getElementById("close-button");

searchButton.addEventListener('click', () =>{
    searchBarCont.classList.replace("search-bar-container-hidden", "search-bar-container-visible")
});

closeButton.addEventListener('click', () =>{
    searchBarCont.classList.replace("search-bar-container-visible", "search-bar-container-hidden")
});

/*
window.addEventListener('load', () => {
    new Glider(document.querySelector('.new-art-item-container'), {
        slidesToScroll: 5,
        slidesToShow: 10,
        draggable: false,
        dots: '.carousel-indicator',
        arrows: {
            prev: '.previous-element-button',
            next: '.next-element-button'
        },
        responsive: [
            {
            // screens greater than >= 775px
            breakpoint: 480,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },{
            // screens greater than >= 1024px
            breakpoint: 1024,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 5,
                }
            }
        ]  
    });
});
*/