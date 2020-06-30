# Create a ruby method that goes over each name in the names array and prints something like below.

# You have 5 names in the 'names' array
# The name is 'Michael Choi'
# The name is 'John Doe'
# The name is 'Jane Doe'
# The name is 'James Smith'
# The name is 'Jennifer Smith'

a = {firstName: "Michael", lastName: "Choi"}
b = {firstName: "John", lastName: "Doe"}
c = {firstName: "Jane", lastName: "Doe"}
d = {firstName: "James", lastName: "Smith"}
e = {firstName: "Jennifer", lastName:"Smith"}

names = [a, b, c, d, e]

# names = { "name" => "Michael Choi", "name" => "John Doe", "name" => "Jane Doe", "name" => "James Smith", "name" => "Jennifer Smith" }
puts "You have #{names.length} names in the name array."
names.each do |name|
    # puts names.length
    puts  "The name is '#{name[:firstName]} #{name[:lastName]}'."
end

# def fullNameFunction
#     names.each do |key, value|
#     puts key
#     puts value
#     end
# end
# fullNameFunction
