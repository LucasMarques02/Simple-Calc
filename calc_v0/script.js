const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.getElementById("addButton");
const resultSpan = document.getElementById("result");
const substractbutton = document.getElementById("subtractButton");
const multiplybutton = document.getElementById("multiplyButton");
const dividebutton = document.getElementById("divideButton");
const result1 = document.getElementById("result1");
//função para somar

function somar() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 + num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

function subtrair() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 - num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

function dividir() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 / num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

function multiplicar() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 * num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

//adicionar listener de evento dos botões

addButton.addEventListener("click",somar);
substractbutton.addEventListener("click",subtrair);
dividebutton.addEventListener("click",dividir);
multiplybutton.addEventListener("click",multiplicar);

result1 = result;
