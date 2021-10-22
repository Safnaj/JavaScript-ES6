/*
    If its a const we can not change
*/
let newCity = "Maruthamunai";
newCity = "Kalmunai" // This can be changed 

var newCity1 = "Kandy";
newCity1 = "Dambull" // This can be changed 

const city = "Colombo";
city = 'Galle'; //Error
console.log(city);


/*
    If its a const array or object we can change the values inside that.
*/

const city = ['Galle', 'Kandy'];
city.push('Colombo');
city.push('Maruthamunai');

console.log(city);

