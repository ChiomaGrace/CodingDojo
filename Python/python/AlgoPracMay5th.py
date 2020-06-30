#Write a function that prints a Palindrome

testWord = "racecar"
def palindrome(str):
    for i in range(0,len(str)-1,-1):
        endLetters = len(str-1)
        if (str[i] == str[endLetters-i]):
            return str
        else:
            return False
print(palindrome(testWord))