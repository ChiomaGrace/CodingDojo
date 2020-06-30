class UsersController < ApplicationController
  def new
    if flash[:errors]
      @errors = flash[:errors] 
    end
  end

  def create
    newUser = User.create(userParams)
    if newUser.errors.any?
      p "*" *50
      p newUser.errors.full_messages # this is how to see error messages in the terminal
      flash[:errors] = newUser.errors.full_messages
      p "*" *50
      redirect_to "/users/new" and return #need return to return the value aka the error messages
    end
    redirect_to "/users/#{newUser.id}"
  end

  def show
    @specificUser = User.find(params[:id])
  end

private
  def userParams
    params.require(:user).permit(:firstName, :lastName, :emailAddress, :password, :password_confirmation)
  end

end
