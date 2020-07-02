# Take a full name of something and make it an abbreviation  

testString = "united states of america"
testStringTwo = "thank god it's friday"

def abbreviation(string):
    abbrevString = ""
    firstLetter = string[0]
    abbrevString += firstLetter
    for i in range(0,len(string), 1):
        if string[i] == " ":
            i += 1
            nextCapLetter = string[i]
            abbrevString += nextCapLetter
    return abbrevString.upper()

print(abbreviation(testStringTwo))