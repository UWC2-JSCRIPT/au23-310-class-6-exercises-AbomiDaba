/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class Car {
    constructor(model) {
        this.model = model;
        this.currentSpeed = 0;
    }

    accelerate() {
        this.currentSpeed++;
    }

    brake() {
        this.currentSpeed--;
    }

    toString() {
        return `Model is ${this.model} and current Speed is ${this.currentSpeed}`
    }
}

const myCar = new Car('Suburban');
myCar.accelerate();
myCar.accelerate();
myCar.brake()
console.log(myCar.toString());
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car {
    constructor(model) {
        super(model);
        this.motor = 'electric';
    }

    accelerate() {
        super.accelerate();
        super.accelerate();
    }

    toString() {
    return `Car Motor is ${this.motor} and ${super.toString()}`;
    }
}

const electricCar = new ElectricCar('Fiat');

electricCar.accelerate();
electricCar.accelerate();
electricCar.brake();
console.log(electricCar.toString());