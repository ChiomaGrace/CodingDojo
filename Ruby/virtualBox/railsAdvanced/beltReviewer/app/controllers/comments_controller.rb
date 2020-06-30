class CommentsController < ApplicationController

    def create
        Comment.create(comment: commentParams[:comment], event_id: commentParams[:event_id], user: currentUser)
        redirect_to "/events/#{commentParams[:event_id]}"
    end

private
    def commentParams
        params.require(:comment).permit(:comment, :event_id)
    end
end
