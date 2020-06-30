class AppleTree
    attr_accessor :age #atrr_accessor is attr_reader/attr_writer in one. aka getter AND setter (a ruby method)
    attr_reader :height, :appleCount #cannot adjust (set) these attributes
    #constructor
    def initialize years = 0, feet= 150, total=0 #creates the new object with these being the arguments that are passed
        @age = years #putting them as instance variables saves these arguments that were passed in the line above(line 5)
        @height = feet
        @appleCount = total
    end


    #Example of a GETTER METHOD
    def height #Tree.height can now be called. Assignment calls to throw a NoMethodError if the user tries to set the height
        @height
    end
    
    # Example of a SETTER METHOD
    # def height(feet) #This is a setter method because a user can pass in a a value for the height. Unlike age, the assignment asks to prohibit the use of the height setter method by raising a NoMethodError.
    #     # if feet != 150
    #     raise NoMethodError.new "You cannot adjust the height of the tree."
    #     # end
    #     return @height
    # end

    #GETTER METHOD
    def appleCount
        @appleCount
    end

    def yearGoneBy
        @age += 1
        @height = (@height + (@height * 0.10))
        if @age > 3 && @age < 10
            @appleCount += 2
        end
        self # so you can chain each individual instance.
    end

    # def pickApples
    #     @appleCount = 0
    # end


end