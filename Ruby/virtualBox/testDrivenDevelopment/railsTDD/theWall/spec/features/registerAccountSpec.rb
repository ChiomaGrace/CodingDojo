require 'rails_helper'

feature "A User creates an account" do
    scenario "succesfully creates an account" do
        visit "/users/new"
        fill_in "username", with: "Chioma Ubogagu"
        click_button "Sign In"
        expect(page).to have_current_path("/messages")
        expect(page).to have_content "Welcome, Chioma Ubogagu" #this is linked to the flash message on the controller/view
    end

    scenario "unsuccesfully creates an account" do
        visit "/users/new"
        fill_in "username", with: "" #must be required
        click_button "Sign In"
        expect(page).to have_content "Sign In"
    end

    scenario "unsuccesfully creates an account" do
        visit "/users/new"
        create(:user)
        fill_in "username", with: "Chioma Ubogagu" #must be unique
        click_button "Sign In"
        expect(page).to have_content "Sign In"
    end

    scenario "unsuccesfully creates an account" do
        visit "/users/new"
        fill_in "username", with: "12345" #must be longer than 5 characters
        click_button "Sign In"
        expect(page).to have_content "Sign In"
    end
end