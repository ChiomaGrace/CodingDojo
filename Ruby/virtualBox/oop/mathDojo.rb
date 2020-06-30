class MathDojo
    attr_accessor :sum

    def initialize
        @sum = 0
    end

    def add(*number) #* is called splat operator. allows you to pass as many methods needed
        @sum = number.flatten.inject(@sum) { |sum, number| sum + number }
        self
    end

    def subtract(*number)
        @sum = number.flatten.inject(@sum) { |sum, number| sum - number }
        return self
    end
end

puts challenge1 = MathDojo.new.add(2).add(2,5).subtract(3,2).sum
puts challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).sum