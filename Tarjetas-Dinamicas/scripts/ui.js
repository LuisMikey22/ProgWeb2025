import {getCardContainer} from "./main.js";
import {deleteCard} from "./storage.js";

const cardContainer = getCardContainer();

export function addCardToContainer(cardNameText, currentCards) {
    let cardText = document.createElement('h2');
    cardText.classList = "card-name";
    cardText.textContent = cardNameText;

    let cardCheckbox = document.createElement('input');
    cardCheckbox.classList = "card-checkbox";
    cardCheckbox.type = "checkbox";

    let cardButton = document.createElement('input'); 
    cardButton.type = "button";
    cardButton.value = "Delete";
    cardButton.classList = "delete-card-button";

    let cardActionContainer = document.createElement('div');
    cardActionContainer.classList = "card-action-container";
    cardActionContainer.appendChild(cardCheckbox);
    cardActionContainer.appendChild(cardButton);

    let card = document.createElement('div');
    card.classList = "card";
    card.appendChild(cardText);
    card.appendChild(cardActionContainer);

    cardCheckbox.addEventListener('change', function() {
        if(this.checked){
            cardText.classList.add('line-through-text');
        }else {
            cardText.classList.remove('line-through-text');
        }
    });

    cardButton.addEventListener('click', function(e) {
        deleteCard(cardNameText, currentCards);
    });
    
    cardContainer.prepend(card);
}