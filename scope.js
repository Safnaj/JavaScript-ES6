/************************************* EX 1 *************************************/

/*
    - VAR keyword are scoped to the immediate function body.
    - LET Variables are scoped to the immediate enclosing block {}.
*/

//let m = 0;
for (var i=0; i<10; i++) {
    var k = i;
    //let k = i;
    //m=i;
    console.log(">>> "+i);
}

console.log("last value :"+i);
console.log("inner value :"+k); //k is undefined if its let
console.log("last value :"+m); //m will print bcz we defined the variable & initialized


/************************************* EX 2 *************************************/


var tester = "hey hi";

function myFunction() {
    var hello = "hello";
}
console.log(hello); // Error : hello is not defined | hello is outside of a function.


/************************************* EX 2 *************************************/


function run() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar); // Foo Bar
  
    {
      var moo = "Mooo"
      let baz = "Bazz";
      console.log(moo, baz); // Mooo Bazz
    }
  
    console.log(moo); // Mooo - Inside the function.
    console.log(baz); // ReferenceError - Outside the scope.
  }
run();