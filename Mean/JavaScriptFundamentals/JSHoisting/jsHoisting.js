// Practice reading JavaScript the same way as the interpreter reads it.
// Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:

//GIVEN EXAMPLE
    // console.log(example);
    // var example;
    // example = "I'm the example!";

//PREDICTED OUTPUT FOR EXAMPLE
    // var example //This is hoisted by the interpreter 
    // logs undefined

//ANOTHER EXAMPLE
    // console.log(example);
    // let example = "I'm the example!";  

// PREDICTED OUTPUT FOR EXAMPLE
    // This throws an error saying the variable example is being used before being initialized. 

// PROBLEM NUMBER ONE
    // console.log(hello);                                   
    // var hello = 'world'; 

// PREDICTED OUTPUT FOR PROBLEM NUMBER ONE  
    // var hello - is hoisted by the interpreter 
    // logs undefined

// PROBLEM NUMBER TWO
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

// PREDICTED OUTPUT FOR PROBLEM NUMBER TWO  
    // var needle = 'haystack' - is hoisted by the interpreter 
    // function test - is hoisted by the interpreter 
    // logs magnet for the console log on line 33

// PROBLEM NUMBER THREE
    // var brendan = 'super cool';
    // function print(){
    //     brendan = 'only okay';
    //     console.log(brendan);
    // }
    // console.log(brendan);

// PREDICTED OUTPUT FOR PROBLEM NUMBER THREE  
    // var brendan = 'super cool' - is hoisted by the interpreter 
    // function print - is hoisted by the interpreter 
    // logs super cool

// PROBLEM NUMBER FOUR
    // var food = 'chicken';
    // console.log(food);
    // eat();
    // function eat(){
    //     food = 'half-chicken';
    //     console.log(food);
    //     var food = 'gone';
    // }

// PREDICTED OUTPUT FOR PROBLEM NUMBER FOUR  
    // var food on line 58 is hoisted by interpreter
    // function eat - is hoisted by the interpreter 
    // logs chicken from line 53
    // logs half-chicken from line 58

// PROBLEM NUMBER FIVE
    // mean();
    // console.log(food);
    // var mean = function() {
    //     food = "chicken";
    //     console.log(food);
    //     var food = "fish";
    //     console.log(food);
    // }
    // console.log(food);

// PREDICTED OUTPUT FOR PROBLEM NUMBER FIVE  
    // var mean is not a function

// PROBLEM NUMBER SIX
    // console.log(genre);
    // var genre = "disco";
    // rewind();
    // function rewind() {
    //     genre = "rock";
    //     console.log(genre);
    //     var genre = "r&b";
    //     console.log(genre);
    // }
    // console.log(genre);

// PREDICTED OUTPUT FOR PROBLEM NUMBER SEVEN  
    // logs undefine for line 82
    // logs rock for line 87
    // logs r&b for line 89
    // logs disco for line 91

// PROBLEM NUMBER SEVEN
    // dojo = "san jose";
    // console.log(dojo);
    // learn();
    // function learn() {
    //     dojo = "seattle";
    //     console.log(dojo);
    //     var dojo = "burbank";
    //     console.log(dojo);
    // }
    // console.log(dojo);

// PREDICTED OUTPUT FOR PROBLEM NUMBER SEVEN  
// logs san jose for line 101
// logs seattle for line 105
// logs burbank for line 108
// logs san jose for line 109

// BONUS PROBLEM
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
    function makeDojo(name, students){
            const dojo = {};
            dojo.name = name;
            dojo.students = students;
            if(dojo.students > 50){
                dojo.hiring = true;
            }
            else if(dojo.students <= 0){
                dojo = "closed for now";
            }
            return dojo;
    }

// PREDICTED OUTPUT FOR BONUS PROBLEM
    // function makeDojo is hoisted by the interpreter
    // logs closed for now for line 128 THIS IS A WRONG PREDICTION
