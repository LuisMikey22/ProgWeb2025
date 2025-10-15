let option = 0;

let numberInput1 = document.getElementById("num1");
let numberInput2 = document.getElementById("num2");

let addCalcButton = document.getElementById("add-calc-button");
let subCalcButton = document.getElementById("sub-calc-button");
let mulCalcButton = document.getElementById("mul-calc-button");
let divCalcButton = document.getElementById("div-calc-button");

let resultInput = document.getElementById("result-label")


addCalcButton.addEventListener('click', () =>{
    option = 1;
    calculate();
});

subCalcButton.addEventListener('click', () =>{
    option = 2;
    calculate();
});

mulCalcButton.addEventListener('click', () =>{
    option = 3;
    calculate();
});

divCalcButton.addEventListener('click', () =>{
    option = 4;
    calculate();
});


function calculate() {
    resultInput.textContent = "";

    let num1 = (numberInput1.value).replaceAll(/[^\d-]/g, ''); //remover toda la cadena si tiene letras además de números
    let num2 = (numberInput2.value).replaceAll(/[^\d-]/g, ''); //si es un número este queda intacto

    numberInput1.value = num1;
    numberInput2.value = num2;

    if(num1!=="" && num2!=="") {
        switch(option) {
            case 1:
                let sum = Number.parseInt(num1) + Number.parseInt(num2);

                console.log("Número 1: " + num1);
                console.log("Número 2: " + num2);

                resultInput.textContent = sum;
                console.log("Suma: " + sum);
            break;

            case 2:
                let sub = Number.parseInt(num1) - Number.parseInt(num2);

                console.log("Número 1: " + num1);
                console.log("Número 2: " + num2);

                resultInput.textContent = sub;
                console.log("Resta: " + sub);
            break;

            case 3:
                let mul = Number.parseInt(num1) * Number.parseInt(num2);

                console.log("Número 1: " + num1);
                console.log("Número 2: " + num2);

                resultInput.textContent = mul;
                console.log("Multiplicación: " + mul);
            break;

            case 4:
                if(num2!=='0') {
                    let div = Number.parseInt(num1) / Number.parseInt(num2);  

                    console.log("Número 1: " + num1);
                    console.log("Número 2: " + num2);

                    resultInput.textContent = div;
                    console.log("División: " + div);
                }
            break;
        }
    }   
}
