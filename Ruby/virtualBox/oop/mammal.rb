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

newMammal = Mammal.new
newMammal.displayHealth
newDog = Dog.new
newDog.walk.walk.walk.run.run.pet.displayHealth
