const print = {
    function1: function() {
        console.log('This is the Fucntion 1', this);
    },

    function2: () => {
        console.log('This is the Fucntion 2', this);
    }
}

print.function1();
print.function2();

//this keyword wont work with arrow function. 