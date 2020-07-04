# Integrating Models

This project practices using models with controllers.

This project performs the following tasks:

1. When a http GET request to '/users' is received, have your rails app display, in json format, all of the users that are in your database. Have your users table be composed of simply its id, name, created_at, and updated_at.

2. When a http GET request to '/users/new' is received, have it render: a view file with an empty form to create a new user.

3. When a http GET request to '/users/1' is received, have it show, in json format, user 1's information.

4. When a http GET request to '/users/1/edit' is received, have it render: a view file with a form with user 1's information in the appropriate input field.

5. When a http POST request to '/users' is received from the form rendered in '/users/new', have it create a user with the information from the input field. After creating the user, redirect to the '/users' route.

6. When a http GET request to '/users/total' is received, have it render the total number of users.

Start Date: June 8, 2020\
Pushed to Github: July 4, 2020