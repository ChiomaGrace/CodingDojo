function unionSort(arrayOne, arrayTwo) {
    var i = 0
    var j = 0
    var newArray = []
    while(true){
        if(arrayOne[i] < arrayTwo[j]) {
            newArray.push(arrayOne[i])
            i ++
        }
        else if(arrayTwo[j] < arrayOne[i]){ 
            newArray.push(arrayTwo[j])
            j++
        }
        if(arrayOne[i] == arrayTwo[j]){
            newArray.push(arrayOne[i]) //could be j doesn't matter. just want to keep the duplicates
            i++
            j++
        }
        if(i == arrayOne.length || j == arrayTwo.length){ //if you run out of numbers in one of the array break out
            break
        }
    }
    if(i == arrayOne.length){ //then if one on the arrays have more numbers than the other this if/else incorporates the remaining numbers
        for(j; j < arrayTwo.length; j++){
            newArray.push(arrayTwo[j])
        }
    }
    else{
        for(i; i < arrayOne.length; i++){ //then if one on the arrays have more numbers than the other this if/else incorporates the remaining numbers
            newArray.push(arrayOne[i])
        }
    }
    return newArray
}

arrayOne = [1,1,7]
arrayTwo = [1,1,2]
//Expected Outcome [1,1,2,7]
console.log(unionSort(arrayOne, arrayTwo))