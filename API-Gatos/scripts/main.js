import {getBreeds} from './api.js';
import {showBreeds, updateButtons} from './ui.js';

export let currentPage = 1;
export let limit = 5;

export const prevPageButton = document.getElementById('prevPage');
export const nextPageButton = document.getElementById('nextPage');

export async function loadBreeds(page) {
    const breeds = await getBreeds(page, limit);
    showBreeds(breeds.breeds);
    updateButtons(currentPage, breeds.pageCount);
}

prevPageButton.addEventListener('click', () => {
    if(currentPage>1){
        currentPage--;
        prevPageButton.textContent = currentPage;
        nextPageButton.textContent = currentPage+1;
        loadBreeds(currentPage);
    }
})

nextPageButton.addEventListener('click', () => {
    currentPage++;
    prevPageButton.textContent = currentPage-1;
    nextPageButton.textContent = currentPage;
    loadBreeds(currentPage);
})

export function setLimit(newLimit) {
    limit = newLimit;
}

window.addEventListener('DOMContentLoaded', () => loadBreeds(currentPage, limit));