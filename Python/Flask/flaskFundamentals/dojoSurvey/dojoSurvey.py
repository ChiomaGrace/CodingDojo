from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("dojoSurvey.html")

@app.route('/result', methods= ["POST"])
def submittedForm():
    # print("*" *50) An indicator to help see what you are printing in the terminal
    # print(request.form) How to check if it is running correctly
    # print(f"username submitted: {request.form ['username']}") How to refer to the dictionary
    return render_template("dojoSurveyResponse.html", username = request.form['username'], location = request.form['location'], language = request.form['language'], comment = request.form['comment'])


if __name__ == "__main__":
    app.run(debug=True)