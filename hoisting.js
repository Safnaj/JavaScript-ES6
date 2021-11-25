/*
    Hoisiting of JavaScript mechanism where variables and function declarations are moved
    to the top of their scope before the execution.

    Functions and Variables declarations are hoisted but the main thing is functions are 
    hoiseted first and then variables.
*/

console.log(hello); //Undefined
var hello = "Hello World";

var hello;
console.log(hello); //Prints Hello World
hello = "Hello World";

car = "BMW";
var car;
console.log(car) //Prints BMW

/*
    Like variables, the JavaScript engine also hoists the function declarations. And it allows us to 
    call functions before even writing them in our code.
*/

carDetails(); //Prints AUDI

function carDetails() {
    var model = "AUDI";
    console.log(model);
}


/*
    Hoisting in function expressions are not allowed at all. If you doing this you will get an error.
*/

sayHello(); //Uncaught TypeError: sayHello is not a function.

var sayHello = function () {
    console.log('Hello');
}