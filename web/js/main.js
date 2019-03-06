var num1 = [];
console.log(num1);
var operator1 = "";

function myFunction(x) {
    document.getElementById('calculator-display').innerHTML += x;

    num1.push(x);
    console.log(num1);
}

function mySwitch(y) {
    //turn array into number
    number1 = Number(num1.join(''));
    console.log(number1);

    //show if it is addition, subtraction...
    operator1 = y;
    console.log(operator1);

    num1 = [];
    document.getElementById('calculator-display').innerHTML = "";
    console.log(num1);
}

function myEqual() {
    //turn array into number
    number2 = Number(num1.join(''));
    console.log(number2);
    console.log(number1);

    document.getElementById('calculator-display').innerHTML = "";

    switch (operator1) {
        case 'add':
            var sum = number1 + number2;
            break;
        case 'subtract':
            var sum = number1 - number2;
            break;
        case 'multiply':
            var sum = number1 * number2;
            break;     
        case 'divide':
            var sum = number1 / number2;
            break;                     
        default:
    }

    document.getElementById('calculator-display').innerHTML = sum;
}

function myClear(){
    num1 = [];
    document.getElementById('calculator-display').innerHTML = "";
}