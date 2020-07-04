# Dojo and Ninjas 

This project practices familiarity with tables/models.

This project performs the following tasks:

1. Start a new project (the name of the project should be 'dojo_ninjas')
2. Create appropriate tables/models.
3. Using Ruby console:
* Create 3 dojos (insert some blank entries just to make sure it's allowing you to insert empty entries)
* Change your models so that it does the following validations:
For the dojo, require the presence of the name, city, and state; also require the state to be two characters long
For the ninja, require the presence of the first name and last name
Make sure that your ninja model belongs to the dojo (specify this in the model for both the dojo and the ninja)
4. Using ruby console
* Delete the three dojos you created (e.g. Dojo.find(1).destroy; also look up destroy_all method)
* Create 3 additional dojos by using Dojo.new.
* Try to create a few more dojos but without specifying some of the required fields. Make sure that the validation works and generates the errors.
* Create 3 ninjas that belong to the first dojo you created.
* Create 3 more ninjas and have them belong to the second dojo you created.
* Create 3 more ninjas and have them belong to the third dojo you created.
* Make sure you understand how to get all of the ninjas for any dojo (e.g. get all the ninjas for the first dojo, second dojo, etc).
* How would you only retrieve the first_name of the ninjas that belong to the second dojo and order the result by created_at DESC order?
* Delete the second dojo. 
* How could you adjust your model so that it automatically removes all of the ninjas associated with that dojo

Start Date: June 6, 2020\
Pushed to Github: July 4, 2020