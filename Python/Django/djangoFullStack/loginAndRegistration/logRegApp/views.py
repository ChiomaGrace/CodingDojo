from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
import bcrypt

def index(request):
    return render(request, "index.html")

def processRegistration(request):
    print("This function processes the form for registering.")
    print("*"*50)
    print(request.POST)
    errors = User.objects.registrationValidator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request,value)
    #When an error occurs on one field input, the below code keeps the fields that are filled out correctly instead of removing all inputs.
            request.session['rememberFirstName'] = request.POST['userFirstName']
            print("*"*50)
            print(request.session['rememberFirstName'])
            request.session['rememberLastName'] = request.POST['userLastName']
            request.session['rememberEmail'] = request.POST['userEmail']
            request.session['rememberBirthday'] = request.POST['userBirthday']
        return redirect("/")
    else:
        hashedPassword = bcrypt.hashpw(request.POST['userPassword'].encode(), bcrypt.gensalt()).decode()
        newUser = User.objects.create(firstName = request.POST['userFirstName'], lastName = request.POST['userLastName'], birthday = request.POST['userBirthday'], emailAddress = request.POST['userEmail'], password = hashedPassword, confirmPassword = hashedPassword)
        request.session['loginInfo'] = newUser.id
    return redirect("/success")

def processLogin(request):
    print("This function processes the form for logining in")
    print("*"*50)
    loginErrors = User.objects.loginValidator(request.POST)
    print(loginErrors)
    if len(loginErrors) > 0:
        for key, value in loginErrors.items():
            messages.error(request,value)
        return redirect('/')
    loginUser = User.objects.filter(emailAddress= request.POST['userEmail'])[0] #if no errors hit and the user did successfully register, this filters to get that correctly submitted email and password
    request.session['loginInfo'] = loginUser.id #now store that info in session into a new variable
    return redirect("/success")

def success(request):
    #if they are not logged in( if loginInfo is not in session), then direct the user back to the index page
    if 'loginInfo' not in request.session:
        return redirect('/')
    userLoginInfo = User.objects.get(id=request.session['loginInfo'])
    context = {
        'loggedInUser': userLoginInfo
    }
    return render(request, "success.html", context)

def logout(request):
    request.session.clear()
    return redirect('/')