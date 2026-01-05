// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;

        // trata "a%b" como "(a/100)*b"
        expression = expression.replace(
            /(\d+\.?\d*)%(\d+\.?\d*)/g,
            "(($1/100)*$2)"
        );

        display.value = eval(expression);
    } catch {
        display.value = "Erro";
    }
}

function squareRoot() {
    const display = document.getElementById("display");
    if (display.value !== "") {
        display.value = Math.sqrt(display.value);
    }
}
