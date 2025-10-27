const nameInput = document.getElementById('card-name-input');
const addCardButton = document.getElementById('add-button');

const cardContainer = document.getElementById('card-container');

let currentCards = JSON.parse(localStorage.getItem('currentCards')) || [];
let cont = 0;

function deleteCard(cardId) {
    let cardToRemove = document.getElementById(cardId);
    if(cardToRemove && cardContainer.contains(cardToRemove)) {
        cardContainer.removeChild(cardToRemove);
    }
    
    const index = currentCards.findIndex(el => el.id == cardId);
    if(index!==-1) {
        currentCards.splice(index, 1)
        cont--;

        updateCurrentCards();
    }
}

function addCard() {
    if(nameInput.value!=="") {
        nameInput.classList.remove('error-outline');

        const cardObject = {};

        cardObject.cardNameText = nameInput.value;
        cardObject.cardId = "card"+(cont++);
        cardObject.cardIsChecked = false;

        storageCard(cardObject);
    }else {
        nameInput.classList.add('error-outline');
    }
}

function storageCard(cardObject) {
    currentCards.push(cardObject);
    addStoragedCard(cardObject);
    localStorage.setItem('history', JSON.stringify(currentCards));
}

function addStoragedCard(cardObject) {
    let cardText = document.createElement('h2');
    cardText.classList = "card-name";
    cardText.textContent = cardObject.cardNameText;

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
    card.id = cardObject.cardId;

    cardCheckbox.addEventListener('change', function() {
        if(this.checked){
            cardObject.cardIsChecked = true;
            cardText.classList.add('line-through-text');
        }else {
            cardObject.cardIsChecked = false;
            cardText.classList.remove('line-through-text');
        }
    });

    cardButton.addEventListener('click', function() {
        deleteCard(cardObject.cardId);
    });

    cardContainer.prepend(card);
}

function updateCurrentCards() {
    currentCards = JSON.parse(localStorage.getItem('history'));
    console.log(currentCards);

    if(currentCards == null) {
        currentCards = [];
    }

    cardContainer.innerHTML = '';

    currentCards.forEach(element => {
        addStoragedCard(element);
    });
}

function removeHistoryItem(cardId) {
    localStorage.removeItem(cardId);
    updateCurrentCards();
}

window.onload = function() {
    updateCurrentCards();
}

addCardButton.addEventListener('click', function() {
    addCard();
});

document.addEventListener('keydown', function(e) {
    let pressedKey = e.key;
    console.log(pressedKey)
    e.preventDefault();

    switch(pressedKey) {
        default:
            nameInput.value += pressedKey;
        break;

        case 'Backspace':
            //eliminar último caracter
            let operation = nameInput.value.substring(0, nameInput.value.length-1); 
            nameInput.value = operation;
        break;
        
        case 'Enter':
            addCard();
        break;
    }
});