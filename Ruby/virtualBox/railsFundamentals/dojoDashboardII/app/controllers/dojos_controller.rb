class DojosController < ApplicationController
  def index
    @dojos = Dojo.all
  end

  def new
    if flash[:error]
      @errors = flash[:error]
    end
  end

  def create
    @dojo = Dojo.create(dojoParams)
    if @dojo.errors.any?
      flash[:error] = @dojo.errors.full_messages
      redirect_to '/dojos/new' and return
    else 
      redirect_to '/dojos'
    end
  end

private
  def dojoParams
    params.require(:dojo).permit(:branch, :street, :city, :state)
  end

end
