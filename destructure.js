// Ex - 1

const [jan, feb, mar, ,may] = [10, 20, 20, 40, 50];
console.log(jan); // 10
console.log(may); // 50


// Ex - 2 = Rest Operator
const [month1, ...otherMonths] = [10, 20, 30, 40, 50];
console.log(month1); //10 - Assign 10 for month1
console.log(otherMonths); // 20, 30, 40, 50


// Ex - 3
const data = {
    name : "Safnaj",
    city : "MRM",
    country : "Sri Lanka",
    age : 25,
    vehicle : "Swift",
}

let { name, city, ...person } = data;
console.log(person); //Prints country, age, vehicle

let person2 = {
    ...data,    //copying object
    email : "safnaj99@live.com"
}
console.log(person2);