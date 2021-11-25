/*
    Clousure where an inner function has access to the 
    outer (enclosing) function's variables.
*/


// Ex - 1

let a = 10;

function myFunc() {
    let b = 20;
    console.log(a + b); //Prints 30
}
myFunc();


// Ex - 2

var x = 10;

function first() {
    var y = 20;

    function second() {
        var z = x + y;

        console.log(z); //Prints 30
    }
    return second();
}

first();