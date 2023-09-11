// Diving into Classes:

// Exercise 1.1: Design a class named "Car" with properties: make, model, and year.
// Exercise 1.2: Add a method to the Car class called displayInfo which logs the car's make, model, and year.

class Car {
    constructor (make, model, year) {
        this.make= make;
        this.model= model;
        this. year = year
    }
    displayInfo() {
        console.log(Object.keys(this));
    }
}
new Car ("Toyota", "4Runner", 2023).displayInfo();

//Understanding 'this' in Depth:

// Exercise 2.1: Craft a regular function within an object, then invoke it. Observe the behavior of "this". --not sure i did this one corectly invoking in console log outside of it. using myObject


const myObject = {
    firstName: 'Paul',
    age: 37,
    agePlus: function () {
    return this.age + 100
    }
};
    
 
   
console.log(`hello, my name is ${myObject.firstName} and I will be ${myObject.agePlus()} in 100 years!`)

// Exercise 2.2: Create an arrow function within another object. Execute it and note the behavior of "this".

const objectTwo= {
    lastName: "Theby"
    sayHello: hello()=> {
        return console.log(`Hello! + ${this.lastName}`)
    }
   
};






// Exercise 2.3: Using the .bind() method, manually set the context of a function and observe the change in the behavior of "this".