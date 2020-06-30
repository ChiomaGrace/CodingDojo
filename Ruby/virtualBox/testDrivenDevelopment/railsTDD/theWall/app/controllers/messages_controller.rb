class MessagesController < ApplicationController

  def index
    # @allUsers = User.all
    @loggedInUser = User.find(session[:id]) #now I can use what I saved in session (on the user controller) to get the logged in user
    flash[:success] = "Welcome, #{@loggedInUser.username}" #this is for the feature spec
    @messages = Message.where(user: @loggedInUser)
    @allMessages = Message.all
    puts "*" *50
    puts session[:id]
    puts @loggedInUser.username
    puts "*" *50
  end


  def create
    Message.create(message: messageParams[:message], user: User.find(session[:id]))
    # message = Message.new(messageParams)
    # message.user_id = session[:id]
    # message.save # lines through 17-19 are another way to do line 17
    # if message.errors.any? #lines 20-23 are how you check for errors
    #   puts message.errors.full_messages
    # end
    redirect_to "/messages"
  end

  def logout
    session[:id] = nil
    redirect_to "/users/new"
  end

private
  def messageParams
    params.require(:message).permit(:message, :user)
  end
end
