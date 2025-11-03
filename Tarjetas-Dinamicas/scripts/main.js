import {addCardToArray} from "./cards.js";
import {updateCurrentCards} from "./storage.js";

const addCardButton = document.getElementById('add-button');

addCardButton.addEventListener('click', function() {
    addCardToArray();
});

window.onload = function() {
    updateCurrentCards();
}

document.addEventListener('keydown', function(e) {
    let pressedKey = e.key;
    console.log(pressedKey)
    e.preventDefault();

    switch(pressedKey) {
        default:
            getNameInput().value += pressedKey;
        break;

        case 'Backspace':
            //eliminar último caracter
            let operation = getNameInput().value.substring(0, getNameInput().value.length-1); 
            getNameInput().value = operation;
        break;
        
        case 'Enter':
            addCardToArray();
        break;
    }
});

export function getCardContainer() {
    const cardContainer = document.getElementById('card-container');
    return cardContainer;
}

export function getNameInput() {
    const nameInput = document.getElementById('card-name-input');
    return nameInput;
}