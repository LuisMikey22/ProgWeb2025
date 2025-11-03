import {getNameInput} from "./main.js";
import {addCardToContainer} from "./ui.js";

const nameInput = getNameInput();
export let currentCards = JSON.parse(localStorage.getItem('cards') || []);

export function addCardToArray() {
    let duplicatedCard = false;

    currentCards.forEach(element => {
        if(element===nameInput.value) { //cambiar valor si ya existe una tarjeta con el mismo nombre
            duplicatedCard = true;
        }
    });

    if(nameInput.value!=="" && !duplicatedCard) { //no permitir ingresar el mismo nombre en dos tarjetas para evitar eliminaciones erróneas
        nameInput.classList.remove('error-outline');

        let cardNameText = nameInput.value;

        currentCards.push(cardNameText);
        addCardToContainer(cardNameText);
        localStorage.setItem('cards', JSON.stringify(currentCards)); 

        nameInput.value = "";
    }else {
        nameInput.classList.add('error-outline');
    }
}

export function setCurrentCards(newCards) {
  currentCards = newCards;
}

