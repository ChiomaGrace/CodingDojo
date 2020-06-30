class EventsController < ApplicationController
  def index
    @allInStateEvents = Event.where(state: currentUser.state)
    @allOutOfStateEvents = Event.where.not(state: currentUser.state)
    p "*" * 100
    p "THIS IS A QUERY FOR ALL THE IN STATE EVENTS"
    p @allInStateEvents
    p "*" * 100
    if flash[:errors]
      @errors = flash[:errors] 
    end
  end

  def create
    newEvent = Event.create(name: eventParams[:name], date: eventParams[:date], city: eventParams[:city], state: eventParams[:state], user: currentUser)
    if newEvent.errors.any?
      # p "*" *50
      # p newEvent.errors.full_messages # this is how to see error messages in the terminal
      # p "*" *50
      flash[:errors] = newEvent.errors.full_messages
      redirect_to "/events" and return #need return to return the value aka the error messages
    end
    redirect_to "/events"
  end

  def show
    @specificEvent = Event.find(params[:id])
    @allJoins = @specificEvent.users #this query is posssible because of the relationship you added in the event controller that has many users through joins. Could do a query in the console like Event.find(3).users which would display all th users that joined that event.
    # Event.find(params[:id]).users would have also worked on line 26. same thing
    @commentsByUsersOnSpecificEvent = @specificEvent.comments
    # p @commentsByUsersOnSpecificEvent

    
  end

  def edit
    @specificEvent = Event.find(params[:id])
    if flash[:errors]
      @errors = flash[:errors] 
    end
  end

  def update
    @specificEvent = Event.find(params[:id])
    @specificEvent.update(name: eventParams[:name], date: eventParams[:date], city: eventParams[:city], state: eventParams[:state], user: currentUser)
    if @specificEvent.errors.any?
      flash[:errors] = @specificEvent.errors.full_messages
      redirect_to "/events/#{params[:id]}/edit" and return
    end
    # puts "*"*50
    # puts "error messages below"
    # p @specificEvent.errors.full_messages # this is how to see error messages in the terminal
    # puts "*"*50
    # redirect_to "/users/#{currentUser.id}"
    redirect_to "/events"
  end

  def destroy 
    Event.destroy(params[:id])
    redirect_to "/events"
  end

private
  def eventParams
    params.require(:event).permit(:name, :date, :city, :state) #pass everything from the form you want in order for it to be in the database
  end
end
