// Array: Bubble Sort
// Create a function that uses BubbleSort to sort an unsorted array in-place
// A bubble sort goes through an array index by index to get the value of the index. If the value is greater than the value it is next to, it gets pushed 

// console.log("Hello World");
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

