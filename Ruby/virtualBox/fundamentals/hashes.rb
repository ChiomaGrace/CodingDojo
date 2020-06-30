# .delete(key) => deletes and returns a value associated with the key
# e.g.  ruby h = {:first_name => "Coding", :last_name => "Dojo"} h.delete(:last_name) print h # => {:first_name => "Coding"}
# .empty? => returns true if hash contains no key-value pairs
# .has_key?(key) => true or false
# .has_value?(value) => true or false

x = { :firstName => "Coding", :lastName => "Dojo"}
puts x
# x.delete(:firstName)
# puts x

puts x.empty?

puts x.has_key?(:firstName)

puts x.has_value?("Dojo")