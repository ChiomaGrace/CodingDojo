// Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.
    // HINT: Keep in mind that you may use arrays and objects to keep your information organized!

function BracesValid(){
    if((partOfBrace == "(" || partOfBrace == "[" || partOfBrace == "{" )) {
        stack.push(partOfBrace) 
//Lines 5 and 6 are saying if (, [, or { is present push/accept the element into the array
    }
    else if((partOfBrace == ")" && (stack.isEmpty() || stack.pop != "(")) ||
            (partOfBrace == "]" && (stack.isEmpty() || stack.pop != "[")) ||
            (partOfBrace == "}" && (stack.isEmpty() || stack.pop != "{"))) {
//Lines 9-12 are independent/a new condition from the line 5 if statement (hence the else if). 
        return false;
    }
    return stack.isEmpty
}
