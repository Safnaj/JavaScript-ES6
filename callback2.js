//Sequence Control

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {  //do a calculation 
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);  //display the result
  myDisplayer(result);