require_relative 'methodTesting'

RSpec.describe Project do
    before(:each) do
    @project = Project.new("ProjectOne", "This is a description for Project One", "OwnerOne")
    end

    context "has an owner" do
        it "creates a project" do 
            expect(@project.owner).to eq("OwnerOne")
        end
    end

    context "has a list of tasks" do
        it "creates a list" do 
            expect(@project.allTasks).to eq([])
        end
    end

    context "a single task" do
        it "has a method to add a single task" do 
            expect(@project.addTask("This is a test task.")[0]).to eq("This is a test task.")
        end
    end

end