from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def shop():
    print("This is where the quantity is chosen.")
    return render_template("dojoFruitStore.html")

@app.route('/checkout', methods = ['POST'])
def purchases():
    print("This is where the chosen quantity is viewed")
    print('*'*50)
    print(f"fruit submitted = {request.form ['appQuantity']} + {request.form ['blackBQuantity']} + {request.form ['raspBQuantity']} + {request.form ['strawBQuantity']}")
    apple = 0 
    apple = request.form['appQuantity']
    blackberry = 0 
    blackberry = request.form['blackBQuantity']
    raspberry = 0 
    raspberry = request.form['raspBQuantity']
    strawberry = 0 
    strawberry = request.form['strawBQuantity']
    print(apple)
    print(blackberry)
    print(strawberry)
    print(int(apple)+int(blackberry)+int(raspberry)+int(strawberry))
    fruitTotal = 0
    fruitTotal = int(apple)+int(blackberry)+int(raspberry)+int(strawberry)
    student = request.form['student']
    firstLetter = student[0]
    firstLetter.upper()
    # print(student = student[1:]) Uppercase doesn't work ask.
    return render_template("dojoFruitStoreResponse.html", appQuantity = request.form['appQuantity'], blackBQuantity = request.form['blackBQuantity'], raspBQuantity = request.form['raspBQuantity'], strawBQuantity = request.form['strawBQuantity'], student = request.form['student'], id = request.form['id'], count = fruitTotal)

if __name__ == "__main__":
    app.run(debug=True)