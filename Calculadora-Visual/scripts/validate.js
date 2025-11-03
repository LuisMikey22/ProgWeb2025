import {inputContent} from "./main.js";

//obtener el último caracter para no colocar doble símbolo de operación
export function operationHistory(pressedKey) {
    if(Number.isInteger(Number.parseInt(inputContent.value.slice(-1)))) { //último caracter
        inputContent.value += pressedKey;  
    }else {
        inputContent.value = "Ingrese un número antes";
    }
}