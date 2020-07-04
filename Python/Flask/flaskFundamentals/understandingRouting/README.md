# Understanding Routing

This project practices building a server with Flask from scratch and increases comfort with routes and passing information to the routes.

This project creates a server file that generates the specified responses for the following url requests:

1. localhost:5000/ - have it say "Hello World!"

2. localhost:5000/dojo - have it say "Dojo!"

3. Create one url pattern and function that can handle the following examples:
    * localhost:5000/say/flask - have it say "Hi Flask!"
    * localhost:5000/say/michael - have it say "Hi Michael!"
    * localhost:5000/say/john - have it say "Hi John!"

4. Create one url pattern and function that can handle the following examples (HINT: int() will come in handy! For example int("35") returns 35):
    * localhost:5000/repeat/35/hello - have it say "hello" 35 times
    * localhost:5000/repeat/80/bye - have it say "bye" 80 times
    * localhost:5000/repeat/99/dogs - have it say "dogs" 99 times

5. NINJA BONUS: For the 4th task, ensure the 2nd element in the URL is an integer (hint: http://exploreflask.com/en/latest/views.html#url-converters)

6. SENSEI BONUS: Ensure that if the user types in any route other than the ones specified, they receive an error message saying "Sorry! No response. Try again."

Created On: May 7, 2020\
Pushed to Github: July 2, 2020

