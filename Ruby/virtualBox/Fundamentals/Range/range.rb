colors = ["red", "orange", "yellow", "green", "blue", "purple"]
numbers = (1..18)

#.include?(value) => true or false

puts "These colors include the color orange." if  colors.include? "orange"

#.last => returns the last object in range

puts colors.last
puts colors.last(2)

#.max => returns the maximum value in range

puts "The maximum number of this range is " + numbers.max.to_s

#.min => returns the minimum value in range

puts "The minimum number of this range is " + numbers.min.to_s
