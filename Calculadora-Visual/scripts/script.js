const inputContent = document.getElementById('input-content');
const calcButtons = document.querySelectorAll('input');
const historyContent = document.getElementById('history-content');

function calculate() {
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

//obtener el último caracter para no colocar doble símbolo de operación
function operationHistory(pressedKey) {
    if(Number.isInteger(Number.parseInt(inputContent.value.slice(-1)))) { //último caracter
        inputContent.value += pressedKey;  
    }else {
        inputContent.value = "Ingrese un número antes";
    }
}

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