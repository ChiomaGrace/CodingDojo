//Efficiently combine two sorted arrays into an array containing the sorted multi-set intersection of the two.
//Example given [1,2,2,2,7] and [2,2,6,6,7], return [2,2,7].

function intersectedSortedArray(arrayOne, arrayTwo) {
    emptyArray = []
    lastIndex = 0
    for(var i = 0; i < arrayOne.length; i++){
        for(var j = lastIndex; j < arrayTwo.length; j++){
            if(arrayOne[i] == arrayTwo[j]){
                emptyArray.push(arrayOne[i])
                // emptyArray.push(arrayTwo[j])
                lastIndex = j + 1
                break
            }
        }
    }
    return emptyArray
}

arrayOne = [1,2,2,2,7]
arrayTwo = [2,2,6,6,7]

console.log(intersectedSortedArray(arrayOne, arrayTwo))
