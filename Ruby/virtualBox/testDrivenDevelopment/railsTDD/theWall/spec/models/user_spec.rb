require 'rails_helper'

RSpec.describe User do
  context "User with valid username" do
    it "should save and allow the login" do
      expect(build(:user)).to be_valid
    end
  end

  context "User with invalid username" do
    it "does not have a username" do
      expect(build(:user, username: "")).to be_invalid
    end
    it "does not have a unique username" do
      create(:user)
      expect(build(:user)).to be_invalid
    end
    it "is not longer than 5 characters" do
      create(:user)
      expect(build(:user, username: "12345")).to be_invalid
    end
  end









end
