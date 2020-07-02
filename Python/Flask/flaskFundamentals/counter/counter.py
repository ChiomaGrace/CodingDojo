from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "Keep it secret"

@app.route("/")
def mainPage():
    print("This is the main page being displayed.")
    if 'count' in session:
        session['count']+=1
    else:
        session['count'] = 1
    return render_template("counter.html")

@app.route("/counter", methods=["POST"])
def countPage():
    print("*"*50)
    # session['addTwo'] = int(request.form['addTwo'])
    # print(session['addTwo'])
    # session['addTwo'] = int(request.form['addTwo'])
    # print(f"This should print count: {request.form['count']}")
    # session["count"].int(request.form['count'])
    return redirect("/counterResults")

@app.route("/counterResults")
def showResultsPage():
    print("This is where the counting is displayed.")
    return render_template("counterResponse.html")

@app.route('/destroySession')
def destroyPage():
    print("This should reset the counter.")
    # session.clear()
    return render_template('counter.html')

if __name__ == "__main__":
    app.run(debug=True)