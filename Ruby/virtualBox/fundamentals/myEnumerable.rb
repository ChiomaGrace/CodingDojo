module MyEnumerable
    def my_each
        for i in 0...self.length
            yield self[i]
        end
    end
    def my_any?
        for i in 0...self.length
            if yield self[i]
                return true
            end
        end
    return false
    end
end    

class Array
    include MyEnumerable
end

[1,2,3,4].my_each { |i| puts i } # => 1 2 3 4
[1,2,3,4].my_each { |i| puts i * 10 } # => 10 20 30 40
puts ["ant", "bear", "cat"].my_any? { |word| word.length >= 3 } # => true