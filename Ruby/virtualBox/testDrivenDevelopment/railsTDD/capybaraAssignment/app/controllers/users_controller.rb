class UsersController < ApplicationController
  def new #This is the the method that displays the form.
    if flash[:error]
      @errors = flash[:error] 
    end
    #the abovce code is here because if the form is filled incorrectly it will display on the form page (which this method is rendering)
  end

  def create #This is the method the form is routing to in order to be processed.
      @user = User.create(userParams)
      if @user.errors.any?
        flash[:error] = @user.errors.full_messages
        redirect_to "/users/new" and return
      else
        flash[:notice] = ['User successfully created']
        redirect_to "/users/#{@user.id}"
      end
  end

  def show #This is the method that displays all the users after the form is completed.
    @user = User.find(params[:id])
  end

  private 
    def userParams
      params.require(:user).permit(:firstName, :lastName, :email)
    end
end
