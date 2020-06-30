class PostsController < ApplicationController
  
  layout "threeColumns"

  def index
    @posts = Post.all
    @users = User.all
  end

  def create 
    newPost = Post.create(title: postParams[:title], content: postParams[:content], user: User.find(postParams[:user]))
    redirect_to "/posts"
  end

  private
  def postParams
    params.require(:post).permit(:title, :content, :user)
  end

end
