class Project
    def initialize(name, description)
        @name = name
        @description = description
    end

    def elevatorPitch
        puts "#{@name}, #{@description}"
    end
end

project1 = Project.new("Project 1", "Description 1")
# puts project1.name This gets a method error
puts project1.elevatorPitch
