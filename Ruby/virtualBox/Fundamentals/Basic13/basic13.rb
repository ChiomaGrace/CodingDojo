# Print 1-255
# Write a program that would print all the numbers from 1 to 255. 

def countTo255
    i = 0
    num = 266
    while i < num do
        puts i
        i += 1 
    end
end
# puts countTo255


# Print odd numbers between 1-255
# Write a program that would print all the odd numbers from 1 to 255.

def countTo255OnlyOddNums
    (1..255).each { |i| puts i if i.odd? }
end
# puts countTo255OnlyOddNums


# Print Sum
# Write a program that would print the numbers from 0 to 255 but this time, it would also print the sum of the numbers that have been printed so far. For example, your output should be something like this:
# New number: 0 Sum: 0
# New number: 1 Sum: 1
# New number: 2 Sum: 3
# New number: 3 Sum: 6
# ...
# New number: 255 Sum: __
# Do NOT use an array to do this exercise.

def newNumAndSum
    i = 0
    num = 256
    while i < 255 do
        puts "New number: #{i} Sum: #{i +i}"
        i +=1
    end
end
# puts newNumAndSum


# Iterating through an array
# Given an array X, say [1,3,5,7,9,13], write a program that would iterate through each member of the array and print each value on the screen. Being able to loop through each member of the array is extremely important.

def iterateAnArray
    array = [1,3,5,7,9,13]
    array.each { |a| }
end
# puts iterateAnArray


# Find Max
# Write a program (sets of instructions) that takes any array and prints the maximum value in the array. Your program should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]), or even a mix of positive numbers, negative numbers and zero.

def getMax
    testArrayOne = [3,5,7]
    testArrayTwo = [-3,-5, -7]
    testArrayThree = [3,5,7,-3,-5,-7]
    testArrayOne.max
    testArrayTwo.max
    testArrayThree.max
end
# puts getMax


# Get Average
# Write a program that takes an array, and prints the AVERAGE of the values in the array. For example for an array [2, 10, 3], your program should print an average of 5. Again, make sure you come up with a simple base case and write instructions to solve that base case first, then test your instructions for other complicated cases. You can use a length function with this assignment.

#ASK ABOUR THE BELOW !! ------------------------------------------
def getAverage
    array = [2,10,3]
    array.inject { |sum,x| sum + x } #another way to write it
    sumOfArray = array.inject(:+)
    # puts sumOfArray
    numOfValuesInArray = array.length
    # puts numOfValuesInArray
    puts average = sumOfArray/numOfValuesInArray
end
# puts getAverage


# Array with Odd Numbers
# Write a program that creates an array 'y' that contains all the odd numbers between 1 to 255. When the program is done, 'y' should have the value of [1, 3, 5, 7, ... 255].

def arrayWithOddNumbers
    arrayTo255 = (1...256).to_a
    # puts arrayTo255
    arrayTo255.select { |num| num.odd? }
end
# print arrayWithOddNumbers


# Greater Than Y
# Write a program that takes an array and returns the number of values in that array whose value is greater than a given value y. For example, if array = [1, 3, 5, 7] and y = 3, after your program is run it will print 2 (since there are two values in the array that are greater than 3).


def greaterThanY
    array = [1,3,5,7]
    y = 3
    array.count { |a| a > y }
end
puts greaterThanY


# Square the values
# Given any array x, say [1, 5, 10, -2], create an algorithm (sets of instructions) that multiplies each value in the array by itself. When the program is done, the array x should have values that have been squared, say [1, 25, 100, 4].

def squareTheValues
    array = [1,5,10,-2]
    array.map { |a| a*a }
end
# puts squareTheValues


# Eliminate Negative Numbers
# Given any array x, say [1, 5, 10, -2], create an algorithm that replaces any negative number with the value of 0. When the program is done, x should have no negative values, say [1, 5, 10, 0].

def eliminateNegNums
    array = [1,5,10,-2]
    puts array.each_index { |i| array[i] = 0 if array[i] < 0 }
end
# puts eliminateNegNums

# Max, Min, and Average
# Given any array x, say [1, 5, 10, -2], create an algorithm that returns a hash with the maximum number in the array, the minimum value in the array, and the average of the values in the array.

def maxMinAvg
    array = [1,5,10,-2]
    max = array.max
    min = array.min
    sumOfArray = array.inject(:+)
    numOfValuesInArray = array.length
    average = sumOfArray/numOfValuesInArray
    newArray = [max, min, average]
end
# print maxMinAvg

# Shifting the Values in the Array
# Given any array x, say [1, 5, 10, 7, -2], create an algorithm that shifts each number by one to the front. For example, when the program is done, an x of [1, 5, 10, 7, -2] should become [5, 10, 7, -2, 0].

def shiftingValuesInArray
    array = [1,5,10,7,-2]
    array.rotate!(1)[array.length-1] = 0
end
# print shiftingValuesInArray


# Number to String
# Write a program that takes an array of numbers and replaces any negative number with the string 'Dojo'. For example, if array x is initially [-1, -3, 2] after your program is done that array should be ['Dojo', 'Dojo', 2].

def numberToString
    array = [-1, -3, 2]
    array.each_index { |i| array[i] = "Dojo" if array[i] < 0 }
end
print numberToString
