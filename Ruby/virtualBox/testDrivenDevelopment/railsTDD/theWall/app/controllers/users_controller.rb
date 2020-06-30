class UsersController < ApplicationController
  def new
    if flash[:error]
      @errors = flash[:error] 
    end
  end

  def create
    if @newUser = User.where(username: userParams[:username]).first
      #the above line of code finds the username in the database if it exists already. .first is needed because the "where" filter gets the entire list of instances (regardless if there's just one username due to the uniqueness validation)
      session[:id] = @newUser.id
      puts "*" *50
      puts session[:id]
      puts @newUser.username
      puts "*" *50
      flash[:success] = "Welcome, #{@newUser.username}" #this is for the feature spec
      redirect_to "/messages"
    else
      @newUser = User.create(userParams)
      if @newUser.errors.any?
        flash[:error] = @newUser.errors.full_messages
        redirect_to "/users/new" and return
      else
        session[:id] = @newUser.id
        flash[:success] = "Welcome, #{@newUser.username}"  #this is for the feature spec
        redirect_to "/messages"
      end
    end
  end

private
  def userParams
    params.require(:user).permit(:firstName, :lastName, :username)
  end
end
