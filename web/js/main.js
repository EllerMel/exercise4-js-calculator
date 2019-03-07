var num1 = [];
console.log(num1);
var operator1 = "";
var calDisplay = document.getElementById('calculator-display'); 
calDisplay.innerHTML = "";

function myClear(){
    num1 = [];
    calDisplay.innerHTML = "";
}

function myFunction(x) {
    //collect numbers from buttons pressed and push them ito an array
    calDisplay.innerHTML += x;

    num1.push(x);
    console.log(num1);
}

function mySwitch(y) {
    //turn first array into number
    number1 = Number(num1.join(''));
    console.log(number1);

    //show if it is addition, subtraction...
    operator1 = y;
    console.log(operator1);

    myClear();
    console.log(num1);
}

function myEqual() {
    //turn second array into number
    number2 = Number(num1.join(''));
    console.log(number2);
    console.log(number1);

    calDisplay.innerHTML = "";

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
    console.log(sum);
    calDisplay.innerHTML = sum;
}