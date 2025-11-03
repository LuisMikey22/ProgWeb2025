import {inputContent, historyContent} from "./main.js";

export function calculate() {
    if(inputContent.value!==" ") { //no colocar en historial si el campo de texto se encuentra vacío
        if(Number.isInteger(Number.parseInt(inputContent.value.slice(-1)))) { //si el último caracter es número
            let calcResult = document.createElement('h2');
            calcResult.textContent = inputContent.value + "=" + eval(inputContent.value);
            historyContent.appendChild(calcResult);

            inputContent.value = eval(inputContent.value); //resultado en campo de texto
        }else {
            inputContent.value = "Error";
        }
    }
}