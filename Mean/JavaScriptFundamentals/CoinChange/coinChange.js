// Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) 
// of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.

var changeType = {} // This corrects a dictionary for the different types of change to be inserted (dollars, quarter, dimes, nickels) as objects.
cents = 0

function CoinChange(amount){
    cents = amount % 100; // Dividing by 100 to represent a dollar. If it isn't completely divisible, this means there is change.
    dollars = Math.floor(amount/100) //The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result
    changeType["Dollars"] = dollars //The stores the variable dollars (the divided amount on the above line) as the dollars object within the change type dictionary
    
    if(cents != 0) { // if this code is run it means there is change not a whole dollar amount is returned, and there is change. now we can try to see the specific amount of each change type that can be given in most optimal fashion. so to be most optimal, start with quarters.
        quarters = Math.floor(cents/25) // This variable is the number of quarters that can be made from the given amount
        changeType["Quarters"] = quarters // This stores the variable quarters as the quarters object within the change type dictionary.
        
        if(cents % 25 != 0) { //if this code is run it means the change left is less than a quarter, so next is the total of amount of dimes until it's not possible, then nickels, and then lastly pennies.

            lessThanAQuarterLeft =  cents % 25 // this is storing the remaining change in a variable.
            dimes = Math.floor(lessThanAQuarterLeft/10) //seeing how many total dimes can be given of remaining change
            changeType["Dimes"] = dimes // This stores the variable dimes as the dimes object within the change type dictionary.

            lessThanADimeLeft =  lessThanAQuarterLeft % 10 
            nickels = Math.floor(lessThanADimeLeft/5)
            changeType["Nickels"] = nickels

            lessThanANickelLeft =  lessThanADimeLeft % 5 
            pennies = Math.floor(lessThanANickelLeft)
            changeType["Pennies"] = pennies
        }
    }
    console.log(changeType)
    // return changeType also an option. Then should console.log the function call
}

CoinChange(20)
CoinChange(262)
CoinChange(242) //This is wrong not sure how to fix it