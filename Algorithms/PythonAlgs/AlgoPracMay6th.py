
#Create a function that, given an input string str, returns a boolean whether parenthesis in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3)(p)p(3)r)s," return true. Given "N(0(p)3" return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined")" is premature: there is nothing open for it to close

testString = "Y(3)(p)p(3)r)s"
testStringTwo = "N(0(p)3"
testStringThree = "N(0)t )0(k"
def parenthesis(string):
    openCount = 0
    closeCount = 0
    for i in range(len(string)):
        if (string[i]== '('):
            openCount += 1
        elif (string[i]== ')'):
            closeCount += 1
        if(closeCount > openCount):
            return False
    if(openCount == closeCount):

        return True
    else:
        return False
print(parenthesis(testStringThree))


