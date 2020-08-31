// Array: Selection Sort
// Create a function that uses SelectionSort to sort an unsorted array in-place
// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and from unsorted part and putting it at the beginning. 

function SelectionSort(arr) {
    for (var i = 0; i < arr.length; i++) { //This for loop acts as a counter
        min = arr[i]
        for (var j = i+1; j < arr.length; j++){ //This inner loop is how we'll do the swapping
            if (arr[j] < arr[i]) {
                min = arr[j]
            }
            var temp= arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

arr = [24,8,5,7,12]
console.log(SelectionSort(arr))