var testArr = [6,3,5,1,2,4]
Print Values and Sum
Print each array value and the sum so far
The expected output will be: 
Num 6, Sum 6
Num 3, Sum 9
Num 5, Sum 14
Num 1, Sum 15
Num 2, Sum 17
Num 4, Sum 21

var testArr =[6,3,5,1,2,4];
var sum=0;
function print_sum_arr(arr){
    var i=0;
    while(i < arr.length){
        sum+=arr[i];
        console.log('Num', arr[i]);
        console.log('Sum', sum);
        i++;
    }
}
print_sum_arr(testArr);

Value * Position

Multiply each value in the array by its array position
The expected output will be:
[0,3,10,3,8,20]

var testArr = [6,3,5,1,2,4];
function multiplyArray(arr){
    var i = 0;
    var newArray=[];
    while(i < arr.length){
        newArray.push(arr[i]*i);
        i++;
    }
    console.log(newArray);
    return newArray;

}
/*just to show that you can put the function
as another variable. important use of a
function*/
var x = multiplyArray(testArr);


