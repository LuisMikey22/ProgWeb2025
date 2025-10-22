const inputContent = document.getElementById('input-content');
const calcButtons = document.querySelectorAll('input');
const historyContent = document.getElementById('history-content');

function calculate() {
    if(inputContent.textContent!==" ") { //no colocar en historial si el campo de texto se encuentra vacío
        if(Number.isInteger(Number.parseInt(inputContent.textContent.slice(-1)))) { //si el último caracter es número
            let calcResult = document.createElement('h2');
            calcResult.textContent = inputContent.textContent + "=" + eval(inputContent.textContent);
            historyContent.appendChild(calcResult);

            inputContent.textContent = eval(inputContent.textContent); //resultado en campo de texto
        }   
    }
}

//obtener el último caracter para no colocar doble símbolo de operación
function operationHistory(pressedKey) {
    if(Number.isInteger(Number.parseInt(inputContent.textContent.slice(-1)))) { //último caracter
        inputContent.textContent += pressedKey;  
    }
}

calcButtons.forEach(button => {
    button.addEventListener('click', function() {
        if(Number.isInteger(Number.parseInt(this.value))) {
            inputContent.textContent += this.value; 
        }

        if(this.value==='/' || this.value==='*' || this.value==='-' || this.value==='+'){ 
            operationHistory(this.value);
        }

        if(this.value==='C' || this.value==='c') { 
            inputContent.textContent = " ";
        }
  
        if(this.value==='=') { 
            calculate();
        }
    })
});

document.addEventListener('keydown', function(e){
    let pressedKey = e.key;
    e.preventDefault(); //quitar acción por defecto al presionar una combinación de teclas

    switch(pressedKey) {
        case '9':case '8':case '7':
        case '6':case '5':case '4':
        case '3':case '2':case '1':
        case '1':
            inputContent.textContent += pressedKey;
        break;

        case '/':case '*':case '-':case '+':
            operationHistory(pressedKey);
        break;

        case 'C': case 'c':
            pressedKey
        break;

        case '=':
            calculate();
        break;
    }
});