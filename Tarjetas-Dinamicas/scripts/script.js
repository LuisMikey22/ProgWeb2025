const nameInput = document.getElementById('card-name-input');
const addCardButton = document.getElementById('add-button');

const cardContainer = document.getElementById('card-container');

let currentCards = []; //de tipo string
let cont = 0;

addCardButton.addEventListener('click', function() {
    addCardToArray();
});

function addCardToArray() {
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
    }else {
        nameInput.classList.add('error-outline');
    }
}

function deleteCard(cardNameText){
    let cardsTransfer = [];

    currentCards.forEach(element => {
        if(element!==cardNameText) { //transferir todos los textos al arreglo excluyendo al texto de la tarjeta a eliminar
            cardsTransfer.push(element);
        }
    });

    currentCards = cardsTransfer;
    localStorage.setItem('cards', JSON.stringify(currentCards));
    updateCurrentCards();
}

function addCardToContainer(cardNameText) {
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

    cardButton.addEventListener('click', function() {
        deleteCard(cardNameText);
    });
    
    cardContainer.prepend(card);
}

function updateCurrentCards(){
    currentCards = JSON.parse(localStorage.getItem('cards'));

    if(currentCards==null){
        currentCards = [];
    }

    cardContainer.innerHTML = ''; //vaciar temporalmente el contenedor para no duplicar tarjetas
    currentCards.forEach(element => {
        addCardToContainer(element);
    });
}

window.onload= function() {
    updateCurrentCards();
}

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