class Human

attr_accessor :strength, :inteligence, :stealth, :health

    def initialize(strength = 3, inteligence = 3, stealth = 3, health = 100)
        @strength = strength
        @inteligence = inteligence
        @stealth = stealth
        @health = health
    end

    def attack(otherObject)
        if otherObject.class.ancestors.include?(Human)
            otherObject.health -= 10
            true # not neccessary to write return in ruby. by saying true, it will automatically return the boolean true
        else
            false
        end
    end
end

class Bug < Human
    def initialize
        puts "This is a bug"
        super
    end
end

firstHuman = Human.new
p firstHuman
aBug = Bug.new
p aBug
p firstHuman.attack(aBug)
p aBug.health
