class UsersController < ApplicationController
  before_action :requireLogin, except: [:new]
  before_action :personalAccess, except: [:new]


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
    redirect_to "/secrets"
  end

  def show
    @currentUsersSecrets = Secret.where(user_id: params[:id])    
    # allUsersLikes = Like.all
    @currentUsersLikes = Like.where(user_id: currentUser)
    # @currentUsersLikesCount = Like.where(user_id: currentUser)
    p "*" *100
    p @currentUsersSecrets
    p "LOOK HERE FOR ALL THE USERS' LIKES"
    # p allUsersLikes
    p "LOOK HERE FOR THE USER'S LIKES"
    p @currentUsersLikes
    # displayUnlike = Like.where(user_id: currentUser, secret_id: params[:secret_id].exists?)
    p "*" *100
  end

  def destroy #this is the delete for the specifc user's page
    deleteUsersSecret = Secret.where(user_id: currentUser, secret_id: params[:id]).first
    deleteUsersSecret.destroy
    # Secret.destroy(params[:id])
    redirect_to "/users/#{currentUser.id}"
  end

private
  def userParams
    params.require(:user).permit(:firstName, :lastName, :emailAddress, :password, :password_confirmation)
  end

  def personalAccess #prohibits a user from seeing another user's personal page
    # p params, currentUser # this print message helped a lot with an important detail
    unless params[:id].to_i == currentUser.id # params id is a string and current user id is in an integer. must change one to the other. to change to an integer .to_i, to change to a string .to_s
      redirect_to "/users/#{currentUser.id}"
    end
  end

end
