function balancePoint(arr) {
    for (i = 0; i < arr.length; i++) {
        leftSide = 0
        rightSide = 0
        for (x = 0; x <= i; x++) {
            leftSide += arr[x]
        }
        for (y = i+1; y < arr.length; y++) {
            rightSide += arr[y]
        }
    }
    if (leftSide == rightSide) {
        return True
    }
    else {
        return False
    }
}