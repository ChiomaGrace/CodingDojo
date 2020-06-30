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
    redirect_to "/events"
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
    if flash[:errors]
      @errors = flash[:errors] 
    end
  end
  
  def update
    updateUser = currentUser #need a getter AND a setter. the currentUser in the application needs a setter to be updated. so we use the update user variable
    updateUser.update(:firstName => userParams[:firstName], :lastName => userParams[:lastName], :city => userParams[:city], :state => userParams[:state])

    # puts "*"*50
    # p updateUser
    if updateUser.errors.any?
      flash[:errors] = updateUser.errors.full_messages
      redirect_to "/users/edit/#{updateUser.id}" and return
    else
    # puts "error messages below"
    # p updateUser.errors.full_messages # this is how to see error messages in the terminal
    # puts "*"*50
    redirect_to "/users/#{updateUser.id}"
    end
  end

private
  def userParams
    params.require(:user).permit(:firstName, :lastName, :emailAddress, :city, :state, :password, :password_confirmation) #pass everything from the form you want in order for it to be in the database
  end

end
