class Project 
    attr_accessor :projectName, :projectDescription 

    def initialize name, description 
        @projectName = name #name is the value of the projectName
        @projectDescription = description
        # @projectPitch = [@projectName, @projectDescription] #ask why this wouldn't work
        @projectPitch = []
    end

    def elevatorPitch(name, description) #parameters for this method
        @projectPitch = [@projectName, @projectDescription]
    end
    

end
