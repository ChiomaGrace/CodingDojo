class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  def currentUser # putting this function here in the application controller it can now  be used throughout the application to identify the logged in user
    if session[:userId] #this if statement finds the user only if the user is in session.
      User.find(session[:userId])
    end
  end

  #using a helper makes the above method available in the controller and views
  helper_method :currentUser

  #this prohibits access to certain pages unless the user is logged in
  def requireLogin
    unless currentUser
      redirect_to "/users/new"
    end
  end

  def previousRoute #this is called on the secrets controller destroy. it is how one method is able to delete a secret in the secret index and user index because it directs back to the previous route
    request.referrer
  end

  helper_method :previousRoute

end
