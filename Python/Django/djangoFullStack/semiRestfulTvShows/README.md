# Semi-Restful TV Shows

This project practices setting up a Django project, passing data to a template, using forms, and using Django session.

This project completes the following routes:

1. /shows/new- GET - method should return a template containing the form for adding a new TV show

2. /shows/create - POST - method should add the show to the database, then redirect to /shows/<id>

3. /shows/<id> - GET - method should return a template that displays the specific show's information

4. /shows - GET - method should return a template that displays all the shows in a table

5. /shows/<id>/edit - GET - method should return a template that displays a form for editing the TV show with the id specified in the url

6. /shows/<id>/update - POST - method should update the specific show in the database, then redirect to /shows/<id>

7. /shows/<id>/destroy - POST - method should delete the show with the specified id from the database, then redirect to /shows

8. Have your root route redirect to /shows

Created On: May 20, 2020\
Pushed to Github: July 3, 2020

