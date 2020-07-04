# Create an array with the following values: 3,5,1,2,7,9,8,13,25,32. Print the sum of all numbers in the array. Also have the function return an array that only include numbers that are greater than 10 (e.g. when you pass the array above, it should return an array with the values of 13,25,32 - hint: use reject or find_all method)

def twoPartFunction
    array = [3,5,1,2,7,9,8,13,25,32]
    puts sumOfArray = array.inject(:+)
    puts array.reject { |a| a < 10 }
end
# twoPartFunction

# Create an array with the following values: John, KB, Oliver, Cory, Matthew, Christopher. Shuffle the array and print the name of each person. Have the program also return an array with names that are longer than 5 characters.

def names
    array = ["John", "KB","Oliver", "Cory", "Matthew", "Christopher"]
    print array.shuffle
    puts array.select { |a| a.length > 5 }
end
# names

# Create an array that contains all 26 letters in the alphabet (this array must have 26 values). Shuffle the array and display the last letter of the array. Have it also display the first letter of the array. If the first letter in the array is a vowel, have it display a message.

def alphabet
    print alphabet = ("A".."Z").to_a
    alphabet.shuffle
    puts alphabet.last
    puts alphabet.first
    vowel = []
    if alphabet.first  == ("A" || "I" || "O" || "U") 
        puts "This letter is a vowel."
    end
end
# alphabet

# Generate an array with 10 random numbers between 55-100.

def randomNumbers
    array = (55..100).to_a.sample(10)
    print array.shuffle
end
# randomNumbers

# Generate an array with 10 random numbers between 55-100 and have it be sorted (showing the smallest number in the beginning). Display all the numbers in the array. Next, display the minimum value in the array as well as the maximum value

def sortedRandomNumbers
    array = (55..100).to_a.sample(10)
    print array.sort
end
# sortedRandomNumbers


# Create a random string that is 5 characters long (hint: (65+rand(26)).chr returns a random character)

def randomString
    # (0..5).map { |iterator| iterator }
    # puts (1..5).map { |e| ('a'..'z').to_a[rand(26)] }.join
    puts (1..5).map { |randomString| (65+rand(26)).chr }.join
end
# randomString

# Generate an array with 10 random strings that are each 5 characters long
def tenRandomStrings
    for i in 1..10
        puts (1..5).map { |e| (65+rand(26)).chr }.join
    end
end
tenRandomStrings