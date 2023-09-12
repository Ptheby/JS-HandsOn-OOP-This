// Diving into Classes:

// Exercise 1.1: Design a class named "Car" with properties: make, model, and year.
// Exercise 1.2: Add a method to the Car class called displayInfo which logs the car's make, model, and year.

// class Car {
//     constructor (make, model, year) {
//         this.make= make;
//         this.model= model;
//         this. year = year
//     }
//     displayInfo() {
//         console.log(` ${this.year} ${this.make} ${this.model}`);//2013 Toyota 4Runner
//     }
// }
// const newCar= new Car ("Toyota", "4Runner", 2013);
// newCar.displayInfo();

//Understanding 'this' in Depth:

// Exercise 2.1: Craft a regular function within an object, then invoke it. Observe the behavior of "this". --not sure i did this one corectly invoking in console log outside of it. using myObject


// const exObject = {
//     firstName: 'Paul',
//     age: 37,
//     agePlus: function () {
//     return this.age + 100
//     }
// };
    
//  console.log(`hello, my name is ${exObject.firstName} and I will be ${exObject.agePlus()} in 100 years!`)



 //Here i created an object called exObject with properties of a firstName, age, and the agePlus function
 //that takes this.age and adds 100 and returns that when run. Then outside the object i console log the object and the objects function


// // Exercise 2.2: Create an arrow function within another object. Execute it and note the behavior of "this"
//not sure how to do this one. 

// const objectTwo= {
//     lastName: "Theby",
//     sayHello: ()=> {
//         console.log(`Hello! + ${this.lastName}`)   //"this does not work here because of arrow functions not inheriting the object    
//     }
//     };
//    objectTwo.sayHello();   //RESULT: HELLO UNDEFINED. THIS IS UNDEFINED!

   
// const objectTwo= {
//     lastName: "Theby",
//     sayHello: ()=> {
//         console.log(`Hello!  ${objectTwo.lastName}`)   //"this does not work here because of arrow functions not inheriting the object    }
//     }
//     };
//    objectTwo.sayHello();
//    ////i had to not use the actual object name for it to log 






// Exercise 2.3: Using the .bind() method, manually set the context of a function and observe the change in the behavior of "this".

//copying function from above and then binding a new object to it?

// const objectTwo= {
//     lastName: "Theby",
//     sayHello() {
//         console.log(`Hello! + ${this.lastName}`)  
//     }
//     };
// const objectThree = {
//     lastName: "Smith",

// };
// objectTwo.sayHello();

// const sayHelloAgain= objectTwo.sayHello.bind(objectThree);
// sayHelloAgain(); //Hello + Smith

//here i take the original object that has a method in it and then create another object with a same parameter like "lastName". i then create another object that is labeled similiary to the method1 in object 1 but i 
// attached that object.method.bind(context)


// Exercise 3.1: Implement inheritance by creating a subclass "ElectricCar" derived from the "Car" class, adding properties like batteryLife.

class Car {
    constructor (make, model, year) {
        this.make= make;
        this.model= model;
        this. year = year
    }
    displayInfo() {
        console.log(` ${this.year} ${this.make} ${this.model}`);//2013 Toyota 4Runner
    }
}
const newCar= new Car ("Toyota", "4Runner", 2013);
newCar.displayInfo();

class ElectricCar extends Car {
    constructor(make,model,year,batteryLife) {
        super(make,model,year);
        this.batteryLife= batteryLife;

    }

    //3.2 Exercise 3.2: For the "ElectricCar" class, override the displayInfo method to also include battery life information.
    displayInfo() {
        // Override the parent class method if needed
        console.log(`${this.year} ${this.make} ${this.model} (Electric)`);
    }
    displayBatteryLife() {
        console.log(`Battery Life: ${this.batteryLife} kWh`);
    }

}
const electricCar = new ElectricCar("Tesla", "Model T", 2021, 75);
electricCar.displayBatteryLife();//Battery Life: 75 kWh




// //Challenges:

// Exercise 4.1: Design a class "Student". Create an instance method that uses "this" to access the student's properties. Observe how "this" behaves within the class context.

class Student {
    constructor(firstName, grade) {
        this.firstName= firstName;
        this.grade= grade;
    }
    displayInfo() {
        console.log(`Hello ${this.firstName}`);
    }
}
 const Student1= new Student("Mckenna", 7);
 Student1.displayInfo();



// Exercise 4.2: Construct a function that demonstrates the differences between using "this" in arrow functions and regular functions, especially when they are methods inside a class or object.