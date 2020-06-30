require "rails_helper"

feature "User creates an account" do
    before(:each) do
        visit "/users/new" #could also put new_user_path
    end
    
    scenario "User successfully creates an account" do
        fill_in "userFirstName", with: "Chioma"
        fill_in "userLastName", with: "Ubogagu"
        fill_in "userEmail", with: "CUbogagu@learningtocode.com"
        click_button "Create Account"
        expect(page).to have_content "Welcome, Chioma"
        #Because it is a form the link would be redirected to the show page when the user is succesfully created
        expect(page).to have_current_path("/users/#{User.last.id}") #could also put inside the () user_path(User.last)
    end

    scenario "User unsuccessfully creates an account(does not fill out any fields)" do 
        click_button "Create Account"
        expect(current_path).to eq("/users/new") # could also put new_user_path
    end

    scenario "User did not fill out first name field" do 
        fill_in "userLastName", with: "Ubogagu"
        fill_in "userEmail", with: "CUbogagu@learningtocode.com"
        click_button "Create Account"
        expect(page).to have_content "Firstname can't be blank"
    end

    scenario "User did not fill out lastt name field" do 
        fill_in "userFirstName", with: "Chioma"
        fill_in "userEmail", with: "CUbogagu@learningtocode.com"
        click_button "Create Account"
        expect(page).to have_content "Lastname can't be blank"
    end

    scenario "User did not fill out first name field" do
        fill_in "userFirstName", with: "Chioma"
        fill_in "userLastName", with: "Ubogagu"
        click_button "Create Account"
        expect(page).to have_content "Email can't be blank"
    end














end