require 'rails_helper'

RSpec.describe User, type: :model do
  context "This is a test for valid attributes of the User class" do
    it "should save if every field is filled" do
      newUser = User.new(
        firstName: "Chioma",
        lastName: "Ubogagu",
        email: "cubogagu@learningToCode.com"
      )
      expect(newUser).to be_valid
    end

  context "This is a test for invalid attributes of the User class" do
    it "should not save if the firstName field is blank" do
      newUser = User.new(
        firstName: "",
        lastName: "Ubogagu",
        email: "cubogagu@learningToCode.com"
      )
      expect(newUser).to be_invalid
    end

    it "should not save if the lastName field is blank" do
      newUser = User.new(
        firstName: "Chioma",
        lastName: "",
        email: "cubogagu@learningToCode.com"
      )
      expect(newUser).to be_invalid
    end

    it "should not save if the email already exists" do
      User.create(firstName: "Chioma",
        lastName: "Ubogagu",
        email: "cubogagu@learningToCode.com")
#the above lines of code because we are comparing two users. We need to have created one first to do the comparison.
      newUser = User.new(
        firstName: "FakeChioma",
        lastName: "FakeUbogagu",
        email: "cubogagu@learningToCode.com"
      )
      expect(newUser).to be_invalid
    end

    it "should not save if the email is in invalid format" do
      newUser = User.new(
        firstName: "Chioma",
        lastName: "Ubogagu",
        email: "cubogagulearningToCode.com"
      )
      expect(newUser).to be_invalid
    end
  end

end
