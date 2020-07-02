from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def originalBoard():
    return render_template("checkerboard.html", numRow = 8, numColumn = 8)

@app.route('/<int:num>')
def changeRows(num):
    return render_template("checkerboard.html", numRow = num)

@app.route('/<int:num>/<int:num2>')
def changeColumns(num,num2):
    return render_template("checkerboard.html", numRow = num, numColumn = num2)

@app.route('/<int:num>/<int:num2>/<color1>/<color2>')
def changeColors(num,num2,color1,color2):
    return render_template("checkerboard.html", numRow = num, numColumn = num2, colorOne = color1, colorTwo = color2)

if __name__ == "__main__":
    app.run(debug=True)