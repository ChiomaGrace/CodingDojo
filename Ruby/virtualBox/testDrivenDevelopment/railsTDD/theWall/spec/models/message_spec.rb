require 'rails_helper'

RSpec.describe Message do

  context "User posting a valid message" do
    it "should save and post the message" do
      expect(build(:message)).to be_valid
    end
  end

    context "User posting an invalid message" do
      it "has a blank message field" do
        expect(build(:message, message: "")).to be_invalid
      end
      it "should be longer than 10 characters (min: 11) " do
        expect(build(:message, message: "0123456789")).to be_invalid
      end
    end


end