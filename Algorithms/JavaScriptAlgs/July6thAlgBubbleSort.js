// Array: Bubble Sort
// Create a function that uses BubbleSort to sort an unsorted array in-place
// A bubble sort goes through an array index by index to get the value of the index. If the value is greater than the value it is next to, it gets pushed 

for (var i = 0; i < arr.length; i++) {

function BubbleSort(arr) {
    for (var i = i; i < arr.length; i++) {
        for(var j = i; i < arr.length; j++){
            if(arr[i] > arr[j]) {
                var temp= arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }

        }
    }
    return arr
}
arr = [8,5,7,12]
console.log(BubbleSort((arr))

// Array: Selection Sort
// #Create a function that uses SelectionSort to sort an unsorted array in-place
