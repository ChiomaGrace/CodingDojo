require_relative "appleTree" #name of rb file

RSpec.describe AppleTree do #name of class in appleTree.rb file
    before(:each) do
        @plantedTree = AppleTree.new(27,150)
    end

    context "This is a test for the age attribute." do
        it "has a getter method" do
            expect(@plantedTree.age).to eq(27)
        end
        it "has a setter method" do
            @plantedTree.age = 28
            expect(@plantedTree.age).to eq(28)
        end
    end

    context "This is a test for the height attribute." do
        it "does not have a setter" do
            expect{ @plantedTree.height = 100 }.to raise_error(NoMethodError)
        end
    end

    context "This is a test for the appleCount method." do
        it "has a getter method" do
            expect(@plantedTree.appleCount).to eq(0)
        end
        it "does not have a setter" do
            expect{ @plantedTree.appleCount = 4 }.to raise_error(NoMethodError)
            # expect{ @plantedTree.appleCount(4) }.to raise_error(NoMethodError)
        end
    end

    context "This is a test for the YearGoneBy method in the apple tree's first three years of life." do
        it "should add one year to the age attribute" do
            expect(@plantedTree.yearGoneBy.age).to eq(28)
        end

        it "should increase the height by 10% of the tree's current height" do
            expect(@plantedTree.yearGoneBy.height).to eq(165) #10% of 150 is 15. Add this to the height(150) gets you 165.
        end

        it "too young to grow apples" do
            #ASK FOR HELP ON THIS ONE
            # 0.upto(3) {@yearGoneBy.age}
            expect(@plantedTree.yearGoneBy.appleCount).to eq(0)
        end
    end
    
    context "This is a test for the YearGoneBy method in the apple tree's fourth year to nineth year of life." do
        it "has the ability to grow apples" do

            #need something to determine the age here
            expect(@plantedTree.yearGoneBy.appleCount).to eq(2)
        end
    end

    context "This is a test for the YearGoneBy method in the apple tree's eleventh year and more." do
        it "too old to grow apples" do
            #need something to determine the age here
            expect(@plantedTree.yearGoneBy.appleCount).to eq(0)
        end
    end

    # context "This is a test for the pickApples method"
    #     it "takes the apple count to zero" do
    #         expect(@plantedTree.pickApples.appleCount).to eq(0)
    #     end

end