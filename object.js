let SQRT2 = Math.SQRT2;
let status = "Car";

const vechicle = {
    make: 'Toyota',
    p1: 100,
    p2: 200,
    drive() { },
    stop: () => { },
    [status]: "Ready", //Dynamic Property -> Car:  Ready | Bike: Ready
    SQRT2
}

console.log(vechicle)