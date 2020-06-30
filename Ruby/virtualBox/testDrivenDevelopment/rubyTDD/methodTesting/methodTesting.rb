class Project
    attr_accessor :name, :description, :owner, :allTasks

    def initialize name, description, owner
        @name = name
        @description = description
        @owner = owner
        @allTasks = []
    end

    def allTasks
        @allTasks
    end 

    def addTask(task)
        @allTasks << task # << is the append operator
        return @allTasks
    end


end
