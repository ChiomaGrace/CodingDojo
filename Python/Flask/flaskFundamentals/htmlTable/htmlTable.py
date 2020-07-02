from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def table():
    usersInfo = [
        {'firstName': 'Michael', 'lastName': 'Choi'},
        {'firstName': 'John', 'lastName': 'Supsupin',},
        {'firstName': 'Mark', 'lastName': 'Guillen', },
        {'firstName': 'KB', 'lastName': 'Tonel',}
    ]
    return render_template("htmlTable.html", users = usersInfo)

if __name__ == "__main__":
    app.run(debug=True)