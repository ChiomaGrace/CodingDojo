Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function GetArray() {
    var newArray= [];
    for(var i =0; i < 256; i++) {
        newArray.push(i);
    }
    console.log(newArray);
    return newArray;
}
console.log(GetArray());


Get even 1000 - Write a function that will get the sum of all even numbers from 1 to 1000.

function getSum(){
    var sum=0;
    for(var i = 1; i < 1001; i++) {
        if(i % 2 == 0) {
            sum+=i;
        }
    }
    console.log(sum);
    return sum;
}
console.log(getSum());


Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000

function getSum(){
    var sum=0;
    for(var i = 1; i < 50001; i++){
        if(i % 2 !== 0){
            sum+=i;
        }
    }
    console.log(sum);
    return sum;
}
console.log(getSum());


Iterate an array - Write a function that returns the sum of all the values with an array

var testArr = [1,2,5];
function getSum(arr){
    sum=0;
    for(var i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    console.log(sum);
    return sum;
}
console.log(getSum(testArr));



Find max - Given an array with multiple values write a function that returns the maximum number in the array for [-3,3,5,7]

var testArray = [-3,3,5,7];
function getMax(arr){
    max= arr[0];
    for(var i = 0; i < arr.length; i++) {
        if( arr[i] > max) {
        max = arr[i];
        }
    }
    console.log(max);
    return max;
}
console.log(getMax(testArray));



Find average - Given an array with multiple values, write a function that returns the average of the values in the array. 
Example [1,3,5,7,20] average is 7.2

var testArray = [1,3,5,7,20];
function getAvg(arr){
    total = arr.length;
    sum = 0;
    for(var i =0; i < arr.length; i++) {
        sum+=arr[i];
        avg = sum/total;
    }
    console.log(avg);
    return avg;
}
console.log(getAvg(testArray));


Array Odd - Write a function that would return an array of all the odd numbers between 1 to 50.

function arrayOdd() {
    var newArray = [];
    for(var i = 0; i < 51; i++) {
        if(i % 2 !==0) {
            newArray.push(i);
        }

    }
    console.log(newArray);
    return newArray;
}
console.log(arrayOdd());


Greater Than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
For example if arr[1,3,5,7] and Y = 3, your function will return 2.

var testArray = [1,3,5,7];
y = 3;
var count = 0;
function GreaterThanY(arr,y) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > y) {
            count+=1;
        }
    }
    console.log(count);
    return count;
}
console.log(GreaterThanY(testArray,y));

Squares - Given an array with multiple values, write a function that replaces any value in the array with the value squared by itself.
Example: [1,5,10,-2] will become [1,25,100,4]

var testArray = [1,5,10,-2];
function getSquared(arr){
    var newArray = [];
    for(var i = 0; i < arr.length; i++) {
        newArray.push((arr[i]) * (arr[i]));
    }
    console.log(newArray);
    return newArray;
}
console.log(getSquared(testArray));


Given an array with multiple values write a function that replaces any negative numbers within the array with the value of 0. 
Example [1, 5, 10, -2] should be [1,5,10,0]

var testArray = [1,5,10,-2];
function noNeg(arr){
    for(var i =0; i < arr.length; i++)
        if( arr[i] < 0) {
            arr[i] = 0;
        }
    console.log(arr);
    return arr;
}
console.log(noNeg(testArray));

Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and
average values of the orginial array. Example [1,5,10,-2]  will return [10,-2,3.5].


var testArray = [1,5,10,-2];
function max_min_avg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    var newArray = [];
    for(var i = 0; i < arr.length; i++){
        if(max < arr[i]) {
        max = arr[i];
        }
    if(min > arr[i]) {
        min = arr[i];
    }
    sum+= arr[i];
    avg = sum/arr.length;
    newArray=[max,min,avg];
    }
console.log(newArray);
return newArray;
}
console.log(max_min_avg(testArray));


Swap Values - Write a function that will swap the first and last values of any given array. The defalut minimum of the array is 2
Example  [1,5,10,-2] will become [-2,5,10,1];

var testArray = [1,5,10,-2];
function swap(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    console.log(arr);
    return arr; 
}    
console.log(swap(testArray));

Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the String
'Dojo'. For example if array = [-1,-3,2] your function will return [Dojo,Dojo,2].

var testArray = [-1,-3,2];
function NegToWords(arr){
    for(var i= 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
console.log(NegToWords(testArray));