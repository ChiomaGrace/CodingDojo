class SessionsController < ApplicationController

  def create # this method checks to see if the user who is attempting to login exists in the database along with other error checks

#1. if the user left the fields blank show an error
    if params[:user][:emailAddress].empty? and params[:user][:password].empty?
      flash[:errors] = ["Email address field is blank", "Password field is blank"]
      redirect_to "/users/new" and return
    end 
    if params[:user][:emailAddress].empty?
      flash[:errors] = ["Email address field is blank"]
      redirect_to "/users/new" and return
    end
    if params[:user][:password].empty?
      flash[:errors] = ["Password field is blank"]
      redirect_to "/users/new" and return
    end


#2. to login the user we need to find some type of information they used on the form using where. which gets a list of objects. then .first should only present one object because of the vaildations
    loggingInUser = User.where(emailAddress: params[:user][:emailAddress]).first

#3. this if statement checks if the asked for params are actually in the database.
    if loggingInUser.nil?
      flash[:errors] = ["Account does not exist"]
      redirect_to "/users/new" and return
    else

#4. if email is in the database, then authenticate this user by confirming the password. this is where another if statement comes in place. if the authentication is true, then login that user and store the user in session. if not then display corresponding errors.
      if loggingInUser.authenticate(params[:user][:password])
        session[:userId] = loggingInUser.id
        # redirect_to '/sessions'
        # redirect_to "/users/#{loggingInUser.id}"
        redirect_to "/events"
      else
        flash[:errors] = ["Invalid login"]
        redirect_to "/users/new" and return       
      end
    end
  end

  def destroy
    session[:userId] = nil
    redirect_to "/users/new" 
  end

private
  def sessionParams
    params.require(:user).permit(:emailAddress, :password)
  end
end
