import {getBreedImage} from './api.js';

const imageId = new URLSearchParams(window.location.search).get('id');
const cardContainer = document.getElementById('cat-details');

if(imageId && cardContainer) {
    (async() => {
        try {
            const imageData = await getBreedImage(imageId);
            const breed = imageData.breeds[0];
            if(breed) {
                cardContainer.innerHTML = 
                    `<div class="card-image-container"><img src="${imageData.url}" alt="${breed.name}" class="card-image"></div> 
                    <div class="card-info-container">
                        <h2>${breed.name}</h2>
                        <p><b>Temperamento:</b> ${breed.temperament}</p>
                        <p><b>Origen:</b> ${breed.origin}</p>
                        <p><b>Esperanza de vida:</b> ${breed.life_span} años</p>
                        <p><b>Descripción:</b></p>
                        <p>${breed.description}</p>
                    </div>`;
            }else {
                cardContainer.innerHTML = '<p>Detalles no disponibles</p>';
            }
        }catch(error) {
            console.error('Error: ', error);
        }
    })();
}else {
    cardContainer.innerHTML = '<p>Detalles no disponibles</p>';
}