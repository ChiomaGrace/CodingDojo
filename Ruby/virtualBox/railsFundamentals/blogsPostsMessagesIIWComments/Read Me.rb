Create 5 users
Create 5 blogs
Have the first 3 blogs be owned by the first user
Have the 4th blog you create be owned by the second user
Have the 5th blog you create be owned by the last user
Have the third user own all of the blogs that were created.
Have the first user create 3 posts for the blog with an id of 2. Remember that you shouldn't do Post.create(user: User.first, blog_id: 2) but more like Post.create(user: User.first, blog: Blog.find(2)). Again, you should never reference the foreign key in Rails.
Have the second user create 5 posts for the last Blog.
Have the 3rd user create several posts for different blogs.
Have the 3rd user create 2 messages for the first post created and 3 messages for the second post created
Have the 4th user create 3 messages for the last post you created.
Change the owner of the 2nd post to the last user.
Change the 2nd post's content to be something else.
Retrieve all blogs owned by the 3rd user (make this work by simply doing: User.find(3).blogs).
Retrieve all posts that were created by the 3rd user
Retrieve all messages left by the 3rd user
Retrieve all posts associated with the blog id 5 as well as who left these posts.
Retrieve all messages associated with the blog id 5 along with all the user information of those who left the messages
Grab all user information of those that own the first blog (make this work by allowing Blog.first.owners to work).
Change it so that the first blog is no longer owned by the first user.
   Blog.first.owners
   change = Owner.find(1)
   change.update(user: User.second)
