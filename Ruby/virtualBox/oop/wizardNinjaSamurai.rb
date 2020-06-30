class Human

attr_accessor :strength, :inteligence, :stealth, :health

    def initialize(options = {})
        defaults = {:health => 100, :inteligence => 3, :strength => 3, :stealth => 3}
        updated = defaults.merge(options)
        @strength = updated[:strength]
        @inteligence = updated[:inteligence]
        @stealth = updated[:stealth]
        @health = updated[:health]
    end

    def attack(otherObject)
        if otherObject.class.ancestors.include?(Human)
            otherObject.health -= 10
            true # not neccessary to write return in ruby. by saying true, it will automatically return the boolean true
        else
            false
        end
    end

    def displayHealth
        puts @health
        self
    end
end

class Wizard < Human
    def initialize
        puts "This is a wizard."
        super(:health => 50, :inteligence => 25)
    end

    def heal
        self.health += 10
        self
    end

    def fireball(otherObject)
        if otherObject.class.ancestors.include?(Human)
            puts "The wizard just attacked !"
            otherObject.health -= 20
        end
        self
    end

end

class Ninja < Human
    def initialize
        puts "This is a ninja."
        super(:stealth => 175)
        self
    end

    def steal(otherObject)
        if otherObject.class.ancestors.include?(Human)
            self.health += 20
        end
        self
    end

    def getAway
            self.health -= 15
            self
    end
end

class Samurai < Human
    @@howMany = 0
    def initialize
        puts "This is a samurai."
        super(:health => 200)
        @@howMany += 1
        self
    end

    def deathBlow(otherObject)
        if otherObject.class.ancestors.include?(Human)
            puts "The samurai just used death blow !"
            otherObject.health = 0
        end
    self
    end

    def meditate
        self.health = 250
    self
    end

    def howMany
       p "There are #{@@howMany} samurais !"
    self
    end

end

Eve = Human.new
# p Eve
HarryPotter = Wizard.new
# p HarryPotter
JackieChan = Ninja.new
# p JackieChan
Goku = Samurai.new
# p Goku
# p HarryPotter.fireball(JackieChan).heal
# p JackieChan.displayHealth
# p JackieChan.getAway.displayHealth
# Goku.deathBlow(HarryPotter)
# p HarryPotter.displayHealth
Gohan = Samurai.new
p HarryPotter.fireball(Gohan)
p Gohan.displayHealth
p Gohan.meditate.displayHealth
Gohan.howMany