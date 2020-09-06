# MongoDB

This project performs the following tasks:

1. Create a database called 'my_first_db'.

2. Create students collection.

3. Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})

4. Create 5 students with the appropriate info.

5. Get all students.

6. Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
7. Get all students whose lucky number is:
    * greater than 3
    * less than or equal to 10
    * between 1 and 9 (inclusive)

8. Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.

9. Add some unique interests for each particular student into each of their interest arrays.

10. Add the interest 'taxes' into someone's interest array.

11. Remove the 'taxes' interest you just added.

12. Remove all students who are from California.

13. Remove a student by name. 

14. Remove a student whose lucky number is greater than 5 (JUST ONE)

15. Add a field to each student collection called 'number_of_belts' and set it to 0.

16. Increment this field by 1 for all students in Washington (Seattle Dojo).

17. Rename the 'number_of_belts' field to 'belts_earned'

18. Remove the 'lucky_number' field.

19. Add a 'updated_on' field, and set the value as the current date.

Start Date: September 6, 2020\
Pushed to Github: September 6, 2020