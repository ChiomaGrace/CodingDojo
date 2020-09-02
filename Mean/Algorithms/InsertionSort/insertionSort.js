// Array: Selection Sort
// Create a function that uses InsertionSort to sort an unsorted array in-place


function InsertionSort(arr) {
    for (var i = 0; i < arr.length; i++) { //This for loop acts as a counter
        selectedNum = arr[i];
        comparingNum = arr[i + 1];
        while(comparingNum < selectedNum) {
            comparingNum = arr[i - 1];
            selectedNum = arr[i + 1];
            console.log(comparingNum)
            console.log(selectedNum)
        }

    }
    return arr
}

arr = [24,8,5,7,12]
console.log(InsertionSort(arr))

//Correct Equation
function sort(arr){
    for (i=0; i < arr.length; i++){
        temp = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j+1] = temp;
    }
    return arr
}
// arr = [24,8,5,7,12]
// console.log(sort(arr))
