# Users

This project practices familiarity with models.

This project performs the following tasks:

1. Create a new project, using rails new user_login_project

2. Create a new model called 'User' with the information above.

3. Rails will automatically create the automatic increment of the primary field called ID as well as created_at and updated_at time stamps.

4. Create a few records in the users table using the Rails console.

5. Now add validations to the model so that...
* it requires the presence of all four fields.
* it requires the age to be numeric.
* it requires the first_name and the last_name to be at least 2 characters each.
* it requires the age to be at least 10 and below 150 (look into http://apidock.com/rails/ActiveModel/Validations/HelperMethods/validates_numericality_of for some help).
* Get familiar with .save, .valid?
* use .errors and .errors.full_messages so that you can see/display the error messages when the validations are failing

6. Using the Rails console...
* See if it allows you to insert some records when the fields are not meeting the validation rules we set (e.g. try to create a record where age is 5 or above 150, or where the first name is just one character, etc).
* Make sure your console returns appropriate error messages when you try to save something that's not meeting the validation rules.
* Know how to retrieve all users.
* Know how to get the first user.
* Know how to get the last user.
* Know how to get the users sorted by their first name (order by first_name DESC). See ordering rules and more here: http://guides.rubyonrails.org/active_record_querying.html#ordering

7. Get the record of the user whose id is 3 and UPDATE the person's last_name to something else. Know how to do this directly in the console using .find and .save.

8. Know how to delete a record of a user whose id is 4 (use something like User.find(2).destroy...).

Start Date: June 6, 2020\
Pushed to Github: July 4, 2020