# Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big" Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]

testList = [-1,3,5,-5]
def biggerSize(list):
    for i in range(0,len(list),1):
        if(list[i] > 0):
            list[i] = ("big")
    return list
print(biggerSize(testList))

# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number). Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it. Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it

testList = [-1,1,1,1]
def countPositives(list):
    count = 0
    for i in range(0, len(list), 1):
        if list[i] > 0:
            count += 1
    list[len(list)-1] = count
    return list
print(countPositives(testList))

# # # Sum Total - Create a function that takes a list and returns the sum of all the values in the list. Example: sum_total([1,2,3,4]) should return 10 Example: sum_total([6,3,-2]) should return 7

testList = [1,2,3,4]
def sumTotal(list):
    sum = 0
    for i in range(0,len(list),1):
        sum += list[i]
    return sum
print(sumTotal(testList))

# # # Average - Create a function that takes a list and returns the average of all the values. Example: average([1,2,3,4]) should return 2.5

testList = [1,2,3,4]
def average(list):
    sum = 0
    numOfValues = len(list)
    avg = 0
    for i in range(0,len(list),1):
        sum += list[i]
        avg = sum/numOfValues
    return avg
print(average(testList))

# # Length - Create a function that takes a list and returns the length of the list. Example: length([37,2,1,-9]) should return 4 Example: length([]) should return 0

testList = [37,2,1,-9]
testListTwo = []
def giveLength(list):
    list = len(list)
    return list
print(giveLength(testListTwo)) 

# # Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False. Example: minimum([37,2,1,-9]) should return -9 Example: minimum([]) should return False

testList = [37,2,1,-9]
def minimum(list):
    if len(list) == 0:
        return False
    else:
        min = list[0]
        for i in range(0,len(list),1):
            if list[0] > list[i]:
                min = list[i]
        return min
print(minimum(testList))


# # Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False Example: maximum([37,2,1,-9]) should return 37 Example: maximum([]) should return False

testList = [37,2,-1,-9]
testListTwo = []
def maximum(list):
    max = list[0]
    for i in range(0,len(list),1):
        if max < list[i]:
            max = list[i]
    return max
print(maximum(testList))

# # Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list. Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }

testList = [37,2,1,-9]
def DictFunction(list):
    lengthOfList = len(list)
    sum = 0
    avg = 0
    min = list[0]
    temp = list[0]
    max =  temp
    for i in range(0,len(list), 1):
        ultimateAnalysis = []
        sum += list[i]
        if min > list[i]:
            min = list[i]
        if max < list[i]:
            max = list[i]
    avg = sum/lengthOfList
    ultimateAnalysis = {
        "sumTotal":sum,
        "average":avg,
        "minimum":min,
        "maximum":max,
        "length":lengthOfList
    }
    return ultimateAnalysis
print(DictFunction(testList))
        


# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.) Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]

import math
testList = [37,2,1,-9]
def reverseList(list):
    for i in range(0, math.floor(len(list)/2), 1):
        temp = list[i]
        list[i] = list[len(list)-1 -i]
        list[len(list)-1 -i] = temp
    return list
print(reverseList(testList))

# testList = [37,2,1,-9]
# def reverseList(list):
#     list = list[::-1]
#     # print(list[::-1])
#     return list
# print(reverseList(testList))