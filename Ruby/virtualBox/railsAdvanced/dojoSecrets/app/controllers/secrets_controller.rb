class SecretsController < ApplicationController
  before_action :requireLogin

  def index
  @allSecrets = Secret.all
  @allUsersLikes = Like.where(params[:id])
  # p "*" *100
  # p @allSecrets
  # p "LOOK HERE FOR ALL THE USERS' SECRETS"
  # p allUsersLikes
  # p "LOOK HERE FOR ALL THE LIKES BY ALL THE USERS"
  # p @allUsersLikes
  # p "*" *100
  end

  def create
    newSecret = Secret.create(secret: secretParams[:secret], user: currentUser)
    redirect_to "/users/#{currentUser.id}"
  end

  def destroy #this is the delete for the secrets index
    Secret.destroy(params[:id])
    redirect_to previousRoute #this method is on the application controller
  end

private 
  def secretParams
    params.require(:secret).permit(:secret, :user)
  end

end
