// #Create the below with an algorithm

//     1  
//    1 1 
//   1 2 1 
//  1 3 3 1 
//  1 4 6 4 1 
// 1 5 10 10 5 1


// Create the above with an algorithm

function pascal(row, crow = [1, 1]) {
    if (row == 0) {
        return [1]
    }

    if (row == 1) {
        return crow
    }

    nrow = [1] // the above can be an empty Array, but we know every row starts with one, so we will put 1 in there
    for (i = 1; i < crow.length; i++) {
        nrow.push(crow[i] + crow[i - 1]) //this is the math that pushes the numbers in between the ones.
    }

    nrow.push(1)
    return pascal(row - 1, nrow)
}

console.log(pascal(5))