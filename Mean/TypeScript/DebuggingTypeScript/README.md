# Debugging TypeScript

This project performs the following tasks:

1. Fix the errors in the Playground so that all the red bars are gone and the code still runs as desired.
    * A file called app.js.  This is where you will build your node server.
    * A folder called views.  This is where you will keep your HTML files.
    * A folder called images for images.
    * A folder called stylesheets for CSS.

2. Make comments in the code to explain what each error was and how you fixed it.

3. For assignment submission, upload a ".ts" file with the contents of the TypeScript Playground.

4. The errors to fix are the following: 
    * Setting Types
    ```TypeScript
    var myString: string;
    // I can assign myString like this:
    myString = "Bee stinger";
    // Why is there a problem with this? What can I do to fix this?
    myString = 9;
    ```

    * Setting the types for function parameters
    ```TypeScript
    function sayHello(name: string){
    return `Hello, ${name}!`;
    }
    // This is working great:
    console.log(sayHello("Kermit"));
    // Why isn't this working? I want it to return "Hello, 9!"
    console.log(sayHello(9));
    ```

    * Optional parameters
    ```TypeScript
    function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
    }
    // This works:
    console.log(fullName("Mary", "Moore", "Tyler"));
    // What do I do if someone doesn't have a middle name?
    console.log(fullName("Jimbo", "Jones"));
    ```

    *  Interfaces and function parameters
    ```TypeScript
    interface Student {
    firstName: string;
    lastName: string;
    belts: number;
    }
    function graduate(ninja: Student){
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
    belt: 4
    }
    // This seems to work fine:
    console.log(graduate(christine));
    // This one has problems:
    console.log(graduate(jay));
    ```

    *  Classes and function parameters
    ```TypeScript
    class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string){
            this.fullName = `${firstName} ${lastName}`;
        }
    debug(){
        console.log("Console.log() is my friend.")
    }
    }
    // This is not making an instance of Ninja, for some reason:
    const shane = Ninja();
    // Since I'm having trouble making an instance of Ninja, I decided to do this:copy
    const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
    }
    // Now I'll make a study function, which is a lot like our graduate function from above:
    function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
    }
    // Now this has problems:
    console.log(study(turing));
    ```

    *  Arrow functions
    ```TypeScript
    var increment = x => x + 1;
    // This works great:
    console.log(increment(3));
    var square = x => {x * x};
    // This is not showing me what I want:
    console.log(square(4));
    // This is not working:
    var multiply = x,y => x * y;
    // Nor is this working:
    var math = (x, y) => let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
    ```

    *  Arrow functions and 'this
    ```TypeScript
    class Elephant {
    constructor(public age: number){}
    birthday = function(){
        this.age++;
    }
    }
    const babar = new Elephant(8);
    setTimeout(babar.birthday, 1000)
    setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
    // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
    ```

Created On: September 13, 2020\
Pushed to Github: September 13, 2020