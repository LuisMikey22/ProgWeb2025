import {addCardToContainer} from "./ui.js";
import {getCardContainer} from "./main.js";

import {currentCards, setCurrentCards} from "./cards.js";

const cardContainer = getCardContainer();

export function deleteCard(cardNameText) {
    console.log("antes de eliminar: " + currentCards);

    let cardsTransfer = [];
    
    /*currentCards.forEach(element => {
        if(element!==cardNameText) { //transferir todos los textos al arreglo excluyendo al texto de la tarjeta a eliminar
            cardsTransfer.push(element);
        }
    });*/

    cardsTransfer = currentCards.filter((text) => text!=cardNameText);
    setCurrentCards(cardsTransfer);
    
    localStorage.setItem('cards', JSON.stringify(currentCards));
    updateCurrentCards();

    console.log("después de eliminar: " + currentCards);
}

export function updateCurrentCards(){
    setCurrentCards(JSON.parse(localStorage.getItem('cards')));

    if(currentCards==null){
        setCurrentCards([]);
    }

    cardContainer.innerHTML = ''; //vaciar temporalmente el contenedor para no duplicar tarjetas
    currentCards.forEach(element => {
        addCardToContainer(element);
    });
}
