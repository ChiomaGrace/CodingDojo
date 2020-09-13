// QUESTION ONE

// var myString: string;
// // I can assign myString like this:
// myString = "Bee stinger";
// // Why is there a problem with this? What can I do to fix this?
// myString = 9;

//The error in the above example is an invalid basic type. It is attempting to cast a number to a variable that is already declared as a string data type.

//CORRECT WAY:
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = 'nine';

// QUESTION TWO 

// function sayHello(name: string){
//    return `Hello, ${name}!`;
// }
// // This is working great:
// console.log(sayHello("Kermit"));
// // Why isn't this working? I want it to return "Hello, 9!"
// console.log(sayHello(9));

// The error in the above example is similar to question one. The paramater pased is a number, but it needs to be a string because that is what is declared in the function.
// CORRECT WAY
function sayHello(name: string) {
    return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
console.log(sayHello("nine"));

// QUESTION THREE

// function fullName(firstName: string, lastName: string, middleName: string){
//    let fullName = `${firstName} ${middleName} ${lastName}`;
//    return fullName;
// }
// // This works:
// console.log(fullName("Mary", "Moore", "Tyler"));
// // What do I do if someone doesn't have a middle name?
// console.log(fullName("Jimbo", "Jones"));

// The error in the above example is because all three parameters are required rather than making one optional. Do this functionality by adding a ? to the parameter that you want optional
// CORRECT WAY
function fullName(firstName: string, lastName: string, middleName?: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));

// QUESTION FOUR

// interface Student {
//    firstName: string;
//    lastName: string;
//    belts: number;
// }
// function graduate(ninja: Student){
//    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
// }
// const christine = {
//    firstName: "Christine",
//    lastName: "Yang",
//    belts: 2
// }
// const jay = {
//    firstName: "Jay",
//    lastName: "Patel",
//    belt: 4
// }
// // This seems to work fine:
// console.log(graduate(christine));
// // This one has problems:
// console.log(graduate(jay));

// The error in the above example is because the key for the const object jay (belt) does not match the key used in the interface(belts) 
// CORRECT WAY

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));


// QUESTION FIVE

// class Ninja {
//    fullName: string;
//    constructor(
//       public firstName: string,
//       public lastName: string){
//          this.fullName = `${firstName} ${lastName}`;
//       }
//    debug(){
//       console.log("Console.log() is my friend.")
//    }
// }
// // This is not making an instance of Ninja, for some reason:
// const shane = Ninja();
// // Since I'm having trouble making an instance of Ninja, I decided to do this:
// const turing = {
//    fullName: "Alan Turing",
//    firstName: "Alan",
//    lastName: "Turing"
// }
// // Now I'll make a study function, which is a lot like our graduate function from above:
// function study(programmer: Ninja){
//    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
// }
// // Now this has problems:
// console.log(study(turing));

// The first error is creating the Shane instance of Ninja without passing any of the required parameters. The second error is creating a Turing instance, but without creating all the same objects as the Ninja class.
// CORRECT WAY

class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug() {
        console.log("Console.log() is my friend.")
    }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja("Shane", "Carter");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing",
    debug() {
        console.log("Console.log() is my friend.")
    }
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja) {
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));

// QUESTION SIX
// var increment = x => x + 1;
// // This works great:
// console.log(increment(3));
// var square = x => {x * x};
// // This is not showing me what I want:copy
// console.log(square(4));
// // This is not working:
// var multiply = x,y => x * y;
// // Nor is this working:
// var math = (x, y) => let sum = x + y;
//    let product = x * y;
//    let difference = Math.abs(x-y);
//    return [sum, product, difference];


//The first error is x is any type because it is not defined. The second error is the brackets around the multiplication; they're not needed.
// CORRECT WAY
var increment = (x: number) => x + 1;
// // // This works great:
console.log(increment(3));
var square = (x: number) => x * x;
// // This is not showing me what I want:
console.log(square(4));
// // This is not working:
var multiply = (x: number, y: number) => x * y;
// // Nor is this working:
var math = (x: number, y: number) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

//QUESTION SEVEN

// class Elephant {
//    constructor(public age: number){}
//    birthday = function(){
//       this.age++;
//    }
// }
// const babar = new Elephant(8);
// setTimeout(babar.birthday, 1000)
// setTimeout(function(){
//    console.log(`Babar's age is ${babar.age}.`)
//    }, 2000)
// // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.

//The error is missing brackets for the function.
// CORRECT WAY
class Elephant {
    constructor(public age: number) { }
    birthday = () => {
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function () {
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
