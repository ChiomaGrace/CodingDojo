class HelloController < ApplicationController
  def index
    render plain: "What do you want me to say?"
  end
  
  def hello
    render plain: "Hello, Coding Dojo"
  end

  def new
    render plain: "Saying hello !"
  end

  def show
    render plain: "Hello, Joe !"
  end

  def name
    redirect_to 'say/hello/joe'
  end

  # def name #if we did want to display the name that was entered it would be done like this
  #   render plain: "Hello, #{params[:name]}"
  # end

  def create
    if session[:visits] 
      session[:visits] += 1
    else
      session[:visits] = 1
    end
    render plain: "Number of profie visits: #{session[:visits]} "
  end

  def destroy
    session[:visits] = nil
    session[:visits] = 0
    render plain: " Destroyed the Session ! Number of profie visits: #{session[:visits]} "
  end

end
