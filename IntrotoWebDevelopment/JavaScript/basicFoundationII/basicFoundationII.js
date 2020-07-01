Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  
Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

var makeItBig = [-1,3,5,-5];
function BiggerSize(arr){
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = "big";
        }
    }
    console.log(arr);
    return arr;
}
console.log(BiggerSize(makeItBig));

Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, 
and return the highest value in the array.

var testArray = [4,1,2,0,3];
function lowHigh(arr){
    var low = arr[0];
    temp = arr[0];
    var high = temp;
    for( var i = 0; i < arr.length; i++) {
        if( low > arr[i] ) {
            low = arr[i];
        }
        if( high < arr[i]) {
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}
console.log(lowHigh(testArray));

Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in 
the array, and return the first odd value in the array.

var testArray = [5,1,2,3,7,9];
function lastOdd(arr){
    var secondToLast = 0;
    var firstOdd = 0;
    secondToLast = arr[arr.length - 2];
    for( var i = 0; i < arr.length; i++){
        if(arr[i] != 0) {
            firstOdd = arr[i];
            break;
        }
    }
    console.log(secondToLast);
    return firstOdd;
}
console.log(lastOdd(testArray));

Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the 
original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

var testArray = [1,2,3];
function doubleVision(arr) {
    var newArray = [];
    for( i = 0; i < arr.length; i++) {
        newArray.push(arr[i] * 2);
    }
    return newArray;
}
console.log(doubleVision(testArray));

Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the 
array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

var testArray = [-1,1,1,1];
function countPositives(arr){
    count = 0;
    for(var i =0; i < arr.length; i++){
        if(arr[i]> 0) {
            count+=1
        }
    }
    arr[arr.length-1] = count;
    return arr;
}
console.log(countPositives(testArray));

Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
Every time the array has three evens in a row, print "Even more so!".

var testArray = [1,2,3,4,6,8,9,9,9];
function evensOdds(arr){
    var oddCount = 0;
    var evenCount = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0) {
            oddCount++;
        }
        if(oddCount = 3){
            console.log("That's odd!");
        }
        else if (arr[i] % 2 == 0) {
            evenCount++;
        
        if(evenCount = 3){
            console.log("Even more so!");
            }
        } 
    }
    return arr;
}
console.log(evensOdds(testArray));

/*ask for help on the above*/

Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd 
(arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

var testArray = [1,2,3,4,5,6];
function incTheSecond(arr){
    for(var i = 0; i < arr.length; i++){
        if (i % 2 != 0) {
            arr[i]++;
            console.log(arr[i]);
        }
    }
    return arr;
}
console.log(incTheSecond(testArray));

Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  
Working within that same array, replace each string with a number - the length of the string at the previous array index - 
and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. 
Hint: Can for loops only go forward?

var testArray = ["hello", "dojo", "awesome"] 
function previousLengths(arr){
    for(var i = 1; i < arr.length; i++){
        arr[i] = arr.length[i-1];
    }
    return arr;
}
console.log(previousLengths(testArray));

/*ask for help on the above*/

Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. 
Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

var testArray = [1,2,3];
function addSeven(arr){
    var newArray = [];
    for(var i = 0; i < arr.length; i++) {
        newArray.push(arr[i] + 7);
    }
    return newArray;
}
console.log(addSeven(testArray));

Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same 
array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  
(Hint: you'll need to swap values).

var testArray = [3,1,6,4,2];
function reverseArray(arr){
    for(var i = 0; i < arr.length; i++){
        arr.pop();
        arr.push();
    }
return arr;
}
console.log(reverseArray(testArray));

/*ask for help on the above*/

Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative 
(not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

var testArray = [1,-3,5];
function negative(arr){
    var newArray = [];
    for( var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            newArray.push(-arr[i]);
        } else {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
console.log(negative(testArray));

Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  
If no array values are "food", then print "I'm hungry" once.

var testArray = ["food", "food", "fanta", "sprite", "tea"];
function alwaysHungry(arr){
    for(var i=0; i < arr.length; i++) {
        if(arr[i]= "food"){
            console.log("yummy");
        } else{
            console.log("I'm hungry...");
        }
    }
    return arr;
}
console.log(alwaysHungry(testArray));

/*ask for help on the above*/

