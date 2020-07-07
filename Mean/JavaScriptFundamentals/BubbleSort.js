// Array: Bubble Sort
// Create a function that uses BubbleSort to sort an unsorted array in-place
    // It's called Bubble Sort because we can imagine we are sliding a bubble along the array. 
        // The bubble encompasses two neighboring values. 
        // If the larger number is to the left, we swap those values. 
        // Then we slide the bubble over one position. 
        // Once the bubble reaches the end of the array, we know that the largest value is in its proper position. 
        // We can then repeat the process for all the values except for the last value, since we know that it is already in place. 
        // And then we'll do it again, and again, and again, until we know all values are in their proper positions.

function BubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++){
            if (arr[i] > arr[j]) {
                var temp= arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}

arr = [8,5,7,12]
console.log(BubbleSort(arr))

