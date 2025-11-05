import {loadBreeds, prevPageButton, nextPageButton, setLimit} from './main.js';

const limitNumberInput = document.getElementById('number-input');
const addLimitNumberButton = document.getElementById('number-button');

const catGrid = document.getElementById('cat-grid');

export function showBreeds(breeds) {
    catGrid.innerHTML = ''; // Limpiar cuadrícula
    breeds.forEach(breed => {
        const catCard = document.createElement('div');
        catCard.classList.add('cat-card');
        catCard.innerHTML = `
            <img src="${breed.image?.url || 'https://via.placeholder.com/150'}" alt="${breed.name}">
            <h3>${breed.name}</h3>
            <p>${breed.temperament || 'Temperamento no disponible'}</p>
            <a class="see-details-button" href="details.html?id=${breed.reference_image_id}" target="_blank">Ver detalles 
        `;
        catGrid.appendChild(catCard);
    });
}

export function updateButtons(currentPage, pageCount) {
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = pageCount <= currentPage;
}

addLimitNumberButton.addEventListener('click', function() {
    if(!/[a-zA-Z]/.test(limitNumberInput.value) && !/[!@#$%^&*(),.?":{}|<>]/.test(limitNumberInput.value) && limitNumberInput.value!=="") { //si no contiene letras, símbolos o se encuentra vacío
        setLimit(limitNumberInput.value);
        prevPageButton.textContent = "1";
        nextPageButton.textContent = "2";
        loadBreeds(1); //volver a la página número 1
    }else {
        limitNumberInput.value = "";
    }
});
