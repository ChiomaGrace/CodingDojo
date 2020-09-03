//work on this still. doesn't work. should sort through the array and sort numbers less than to the left and numbers greater than to the right with a "pivot" variable to distinguish the two sides

function Partition(arr) {
    for (var i = 0; i < arr.length; i++) { //This for loop acts as a counter
        pointer = arr[arr.length/2]
        console.log("first pointer",pointer)
        if(pointer > arr[(arr.length/2)-1]) {
            pointer = arr[(arr.length/2)-1]
            console.log("midpoint", arr[(arr.length/2)-1])
            console.log("new pointer", pointer)
            // pointer = arr[i+1]
            console.log(pointer)
        }
        // else if(pointer < arr[(arr.length/2)-1]){
        //     pointer = arr[(arr.length/2)-1]
        //     // pointer = arr[i+1]
        //     console.log(pointer)
        // }
            
    }
    return arr
}

// arr = [24,8,5,7,12,6]
arr = [0,10,20,4]
console.log(Partition(arr))