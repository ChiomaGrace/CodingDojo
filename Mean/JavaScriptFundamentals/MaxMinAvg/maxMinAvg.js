// Iterate over an array
// Construct a string
// Use the return statement
// Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.

// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

function MaxMinAvg(arr) {
    var min = arr[0]
    var temp = arr[0]
    var max = temp
    var sum = 0
    var totalOfNumbersInArray = arr.length
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            min = arr[i]
        }
        if (arr[i] > arr[0]){
            max = arr[i]
        }
        sum += arr[i]
    }
    var avg = sum/totalOfNumbersInArray
    var threeValues = "The minimum is " + min + ", the maximum is " + max + ", and the average is " + avg + "."
    return threeValues
}

arr = [1,-2,9,4]
console.log(MaxMinAvg(arr))