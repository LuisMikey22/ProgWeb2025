import {operationHistory} from "./validate.js";
import {calculate} from "./math.js";

export const inputContent = document.getElementById('input-content');
const calcButtons = document.querySelectorAll('input');
export const historyContent = document.getElementById('history-content');

calcButtons.forEach(button => {
    button.addEventListener('click', function() {
        if(inputContent.value.slice(-1).match(/^[A-Za-z]+$/)) { //eliminar texto de error o advertencia anterior
            inputContent.value = " ";
        }

        if(Number.isInteger(Number.parseInt(this.value))) {
            inputContent.value += this.value; 
        }

        if(this.value==='/' || this.value==='*' || this.value==='-' || this.value==='+') { 
            operationHistory(this.value);
        }

        if(this.value==='C') {
            inputContent.value = " ";
        }

        if(this.value==='Clear history') {
            historyContent.textContent = " ";
        } 
  
        if(this.value==='=') { 
            calculate();
        }
    })
});

document.addEventListener('keydown', function(e) { //se seleccionan ambos elementos con [] y forEach
    if(inputContent.value.slice(-1).match(/^[A-Za-z]+$/)) { //eliminar texto de error o advertencia anterior
        inputContent.value = " ";
    }

    let pressedKey = e.key;
    console.log(pressedKey)
    e.preventDefault(); //quitar acción por defecto al presionar una combinación de teclas

    switch(pressedKey) {
        case '9':case '8':case '7':
        case '6':case '5':case '4':
        case '3':case '2':case '1':
        case '1':case '0':
            inputContent.value += pressedKey;
        break;

        case '/':case '*':case '-':case '+':
            operationHistory(pressedKey);
        break;

        case 'C': case 'c':
            inputContent.value = " ";
        break;

        case '=':
            calculate();
        break;

        case 'Backspace':
            //eliminar último caracter
            let operation = inputContent.value.substring(0, inputContent.value.length-1); 
            inputContent.value = operation;
        break;
        
        case 'Enter':
            calculate();
        break;
    }
});

export function getNameInput() {
    const nameInput = document.getElementById('card-name-input');
    return nameInput;
}