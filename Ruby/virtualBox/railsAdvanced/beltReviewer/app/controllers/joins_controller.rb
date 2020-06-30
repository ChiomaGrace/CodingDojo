class JoinsController < ApplicationController
    before_action :findEvent #only way to join an event is to have an event first.
    before_action :findJoin, only: [:destroy] #only way to cancel an event is to have joined it first.

    def create #this is like creating a normal feature with a form. Then pass through the two keys/values you need to link in order to create a like
        Join.create(event: findEvent, user: currentUser)
        redirect_to "/events"
    end

    def destroy
        cancel = Join.find_by(user_id: currentUser, event_id: params[:id])
        cancel.destroy
        redirect_to "/events"
    end

private
    def findEvent
        Event.find(params[:id])
    end

    def findJoin
        Join.where(user_id: currentUser, event_id: params[:event_id]).exists?
    end
end
