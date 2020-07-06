# Blogs, Posts, and Messages II

This project practices familiarity with tables/models and expands on the Blogs, Posts, and Messages project.

This project performs the following tasks:

1. Based on the new diagram:
* Create appropriate models
* Create appropriate validations (think about what fields you would need to require, what other validation rules you would need)

2. Using the console...
* Create 5 users
* Create 5 blogs
* Have the first 3 blogs be owned by the first user
* Have the 4th blog you create be owned by the second user
* Have the 5th blog you create be owned by the last user
* Have the third user own all of the blogs that were created.
* Have the first user create 3 posts for the blog with an id of 2. Remember that you shouldn't do Post.create(user: User.first, blog_id: 2) but more like Post.create(user: User.first, blog: Blog.find(2)). Again, you should never reference the foreign key in Rails.
* Have the second user create 5 posts for the last Blog.
* Have the 3rd user create several posts for different blogs.
* Have the 3rd user create 2 messages for the first post created and 3 messages for the second post created
* Have the 4th user create 3 messages for the last post you created.
* Change the owner of the 2nd post to the last user.
* Change the 2nd post's content to be something else.
* Retrieve all blogs owned by the 3rd user (make this work by simply doing: User.find(3).blogs).
* Retrieve all posts that were created by the 3rd user
* Retrieve all messages left by the 3rd user
* Retrieve all posts associated with the blog id 5 as well as who left these posts.
* Retrieve all messages associated with the blog id 5 along with all the user information of those who left the messages
* Grab all user information of those that own the first blog (make this work by allowing Blog.first.owners to work).
* Change it so that the first blog is no longer owned by the first user.

Start Date: June 7, 2020\
Pushed to Github: July 4, 2020

![blogsPostsMessagesII](https://user-images.githubusercontent.com/62450912/86511445-ee706280-bdbe-11ea-8ccd-af4708fc6a10.png)
