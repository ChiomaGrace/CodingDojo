// Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.
    // HINT: Keep in mind that you may use arrays and objects to keep your information organized!

function BracesValid(bracesTest){
    stack = [] // This will be the array where the pushing and/or popping of the parts of the brace will occur
    for(i = 0; i < bracesTest.length; i++) { //This will loop through each character in the bracesTest
        
        partOfBrace = bracesTest[i] //This defines partOfBrace/marks the beginning
        
        if(partOfBrace == "("){ // This creates our first acceptable match/pair
            stack.push(")") 
        }
        
        else if(partOfBrace == "[") { // This creates our second acceptable match/pair
            stack.push("]")
        }
        
        else if(partOfBrace == "{" ){ // This creates our third acceptable match/pair
            stack.push("}")
        }
        
        else{ //If the above conditions are not true, we have been given an unwanted character, resulting in a mismatch or non-pair, so it needs to be removed.
            remove = stack.pop()
            if(remove != partOfBrace)
            return false
        }

}
    return stack.length == 0
}

bracesTest = '['
console.log(BracesValid(bracesTest))
