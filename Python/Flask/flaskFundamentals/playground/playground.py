from flask import Flask, render_template
app = Flask(__name__)

@app.route('/play')
def play():
    # hideBoxes = ["This variable hides the boxes on the other routes."]
    return render_template("playground.html", numVar = 3)

@app.route('/play/<int:num>')
def addBoxes(num):
    print(num)
    return render_template("playground.html", numVar = num)

@app.route('/play/<int:num>/<color>')
def addBoxesAddColor(num,color):
    return render_template("playground.html", numVar = num, colorVar = color)


if __name__ == "__main__":
    app.run(debug=True)

