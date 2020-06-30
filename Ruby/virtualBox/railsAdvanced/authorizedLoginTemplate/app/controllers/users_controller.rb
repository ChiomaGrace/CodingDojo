class UsersController < ApplicationController
  def new
    if flash[:errors]
      @errors = flash[:errors] 
    end
  end

  def create
    newUser = User.create(userParams)
    if newUser.errors.any?
      # p "*" *50
      # p newUser.errors.full_messages # this is how to see error messages in the terminal
      # p "*" *50
      flash[:errors] = newUser.errors.full_messages
      redirect_to "/users/new" and return #need return to return the value aka the error messages
    end
    session[:userId] = newUser.id #this stores the session/logs in the user immediately after a successful registration.
    redirect_to "/users"
    # redirect_to "/users/#{newUser.id}" #This redirects to the specific user page
  end

  def show
    @specificUser = User.find(params[:id])
  end

  def index
    # puts currentUser.firstName #the variable current user is available because of the method currentUser on the application controller
    @allUsers = User.all
  end
  
  def edit
    # puts "*"*50
    # p currentUser
    # puts "*"*50
  end
  
  def update
    currentUser.update_attributes(userParams) #need to use update_attributes feature to update something that requires a password. and ask for the password again on the views to have the update go through and not rollback.
    if currentUser.errors.any?
      flash[:errors] = currentUser.errors.full_messages
      redirect_to "/users/edit/#{currentUser.id}" and return
    end
    # puts "*"*50
    # puts "error messages below"
    # p updateUser.errors.full_messages # this is how to see error messages in the terminal
    # puts "*"*50
    # redirect_to "/users/#{currentUser.id}"
    redirect_to "/users"
  end

  def destroy 
    currentUser.destroy
    session[:userId] = nil #the logged in user is stored in session. So if they chose the feature to delete, you have to then remove them from session to be able to return back to the index. Otherwise the app will break/won't show you the index.
    redirect_to "/users/new"
    # redirect_to "/users"
  end

private
  def userParams
    params.require(:user).permit(:firstName, :lastName, :emailAddress, :password, :password_confirmation)
  end

end
