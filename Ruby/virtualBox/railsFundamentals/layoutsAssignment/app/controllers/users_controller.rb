class UsersController < ApplicationController

  layout "twoColumns"

  def index
    @users = User.all
  end
  
  def create 
    newUser = User.create(userParams)
    redirect_to "/users"
  end

  private
  def userParams
    params.require(:user).permit(:firstName, :lastName, :favoriteLanguage)
  end

end
