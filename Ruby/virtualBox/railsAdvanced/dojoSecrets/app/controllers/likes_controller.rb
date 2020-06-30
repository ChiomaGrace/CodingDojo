class LikesController < ApplicationController
    before_action :findSecret #only way to like a secret is to have a secret to like.
    before_action :findLike, only: [:destroy] #only way to unlike a secret is to have liked it first.

    def create #this is like creating a normal feature with a form. Then pass through the two keys/values you need to link in order to create a like
        Like.create(secret: findSecret, user: currentUser)
        redirect_to "/secrets"
    end

    def destroy
        like = Like.find_by(user_id: currentUser, secret_id: params[:id])
        like.destroy
        redirect_to "/secrets"
    end

private
    def findSecret
        Secret.find(params[:id])
    end

    def findLike
        Like.where(user_id: currentUser, secret_id: params[:secret_id]).exists?
    end
end
