class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  def currentUser # putting this function here in the application controller it can now  be used throughout the application to identify the logged in user
    if session[:userId] #this if statement finds the user only if the user is in session.
      User.find(session[:userId])
    end
  end

  #using a helper makes the above method available in the views
  helper_method :currentUser
end
