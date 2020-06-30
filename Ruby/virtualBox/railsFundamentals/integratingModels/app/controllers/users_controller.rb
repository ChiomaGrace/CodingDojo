class UsersController < ApplicationController
  def index
    render json: User.all 
    #@Users = User. all #this is how you would do it without rendering json. @Users being an instance variable I created
  end

  def new
# This method contains the form.
    @User = User.new 
  end

  def create
# This method proccesses the form
    @User = User.create(firstName: params[:firstName], lastName: params[:lastName] )
    redirect_to "/users/#{@User.id}"
  end

  def show
#This method displays the recently proccessed form.
  @User = User.find(params[:id])
  render json: @User
  end

  def edit
      @User = User.find(params[:id])
    end

  def total
    @userCount = User.count
    render plain: "Number of users: #{@userCount} "
  end
end
