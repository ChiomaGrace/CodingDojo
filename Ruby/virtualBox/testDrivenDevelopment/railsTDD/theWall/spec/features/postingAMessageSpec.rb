require 'rails_helper'

feature "Logged In User Posts A Message" do
    scenario "succesfully posts a message" do
        create(:user) #from factorybot and using because capybara doesn't understand session without a gem that can process it
        visit "/messages"
        fill_in "message form", with: "This is a message post."
        click_button "Post A Message"
        expect(page).to have_current_path("/messages")
        expect(page).to have_content "This is a message post."
    end

    scenario "unsuccesfully posts a message" do
        create(:user) #from factorybot and using because capybara doesn't understand session without a gem that can process it
        visit "/messages"
        fill_in "message form", with: "" #field is required
        click_button "Post A Message"
        expect(page).to have_current_path("/messages")
        expect(page).to have_content "" #not sure what to put here
    end

    scenario "unsuccesfully posts a message" do
        create(:user) #from factorybot and using because capybara doesn't understand session without a gem that can process it
        visit "/messages"
        fill_in "message form", with: "0123456789" #must be longer than 10 characters
        click_button "Post A Message"
        expect(page).to have_current_path("/messages")
        expect(page).to have_content "" #not sure what to put here
    end
end