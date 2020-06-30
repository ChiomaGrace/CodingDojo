arr = ["I", "code", "therefore", "I", "am"]
for i in 0...arr.count
    puts arr[i]
end

3.times { puts "Wow"}

puts 24.class
puts true.class
puts nil.class

puts "string".reverse
puts 23.odd?
puts "abc".upcase

#Many different ways to invoke the same method
puts 24.send(:+,8)
puts 24.+ (8)
puts 24+8

puts "24 plus 8 is {24 + 8}"
puts '24 plus 8 is {24 + 8}'
puts "24 plus 8 is" + (24 + 8).to_s

puts "hello".empty?

puts "hello".length

print "hello".split("")

print "chi@gmail.com".split("@")

def say_hello name1="oscar", name2="shane"
    puts "hello, #{name1} and #{name2}"
end
say_hello "oscar"    # => "hello, oscar and shane"


puts "hello" if nil

puts "goodbye" if false
puts "goodbye" if nil
puts "goodbye" if []

puts "ruby" unless 0
puts "ruby" unless ""
puts "ruby" unless nil

puts "matz" unless false
puts "matz" unless nil
puts "matz" unless []

puts "Chunky" << "Bacon"

puts "ruBy".capitalize