class Mammal
    attr_accessor :health

    def initialize(health = 150)
        @health = health
    end

    def displayHealth
        puts @health
        self
    end
end

class Dog < Mammal
    def pet
        self.health += 5
        self
    end

    def walk
        self.health -= 1
        self
    end

    def run
        self.health -= 10
        self
    end
end

class Lion < Mammal
    def initialize
        puts "This is a lion"
        super(170) # super allows you to change instance variables defaults of their parent function
    end
    def fly
        self.health -= 10
        self
    end
    def attackTown
        self.health -= 50
        self
    end
    def eatHumans
        self.health += 20
        self
    end
end

newMammal = Mammal.new
newMammal.displayHealth
newDog = Dog.new
newDog.walk.walk.walk.run.run.pet.displayHealth
newLion = Lion.new
newLion.attackTown.attackTown.attackTown.eatHumans.eatHumans.fly.fly.displayHealth

