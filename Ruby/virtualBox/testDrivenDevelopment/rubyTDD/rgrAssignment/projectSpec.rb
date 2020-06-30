require_relative "project"

RSpec.describe Project do
    before(:each) do
    @newProject = Project.new("NewlyCreatedProjectName", "This is the project description.")
    end

    context "This is a test for the name attribute." do
        it "has a getter and setter for name atribute" do
            expect(@newProject.projectName).to eq("NewlyCreatedProjectName")
        end
    end

    context "This is a test for the description attribute." do
        it "has a getter and setter for description atribute" do
            expect(@newProject.projectDescription).to eq("This is the project description.")
        end
    end

    context "This is a test for the elevatorPitch method." do
        it "passes if there is a project name and project description" do
            expect(@newProject.elevatorPitch("NewlyCreatedProjectName","This is the project description.")).to contain_exactly("NewlyCreatedProjectName","This is the project description.")
            # expect(@newProject.elevatorPitch(@projectName,@projectDescription)).to contain_exactly(@projectName,@projectDescription) #ask why this wouldn't work
        end
    end


end

