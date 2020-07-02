from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following

# Create a server file that generates the specified responses for the following url requests:

# localhost:5000/ - have it say "Hello World!"

def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

@app.route('/<name>')
def helloPerson(name):
    print("*"* 20) # an indicator so you can see what is being printed
    print("this is the hello personFunction.")
    print(name)
    return f"Hello, {name}!" # now if you change it to any name in the url, it will change to it

# localhost:5000/dojo - have it say "Dojo!"

@app.route('/dojo')
def dojo():
    return "Dojo!"

# Create one url pattern and function that can handle the following examples:
# localhost:5000/say/flask - have it say "Hi Flask!"
# localhost:5000/say/michael - have it say "Hi Michael!"
# localhost:5000/say/john - have it say "Hi John!"

@app.route('/say/<name>')
def say(name):
    firstLetter = name[0]
    firstLetter.upper()
    name = name[1:]
    return f"Hi {firstLetter.upper()}{name}!"

# Create one url pattern and function that can handle the following examples (HINT: int() will come in handy! For example int("35") returns 35):
# localhost:5000/repeat/35/hello - have it say "hello" 35 times
# localhost:5000/repeat/80/bye - have it say "bye" 80 times
# localhost:5000/repeat/99/dogs - have it say "dogs" 99 times

@app.route('/repeat/<int:num>/<name>')
def repeat(num,name):
    return name*num

@app.errorhandler(404)
def pageNotFound(e):
    return ("Sorry! No response. Please try again.")

if __name__ == "__main__": # Ensure this file is being run directly and not from a different module. Always at the end with app.run   
    app.run(debug=True) # Run the app in debug mode.
