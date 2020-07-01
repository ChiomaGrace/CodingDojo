from django.shortcuts import render, redirect, HttpResponse
from .models import *
from django.contrib import messages
import bcrypt
from django.db.models import Q


def index(request):
    return redirect("/login")

def login(request):
    return render(request, "login.html")

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
        return redirect("/login")
    else:
        hashedPassword = bcrypt.hashpw(request.POST['userPassword'].encode(), bcrypt.gensalt()).decode()
        newUser = User.objects.create(firstName = request.POST['userFirstName'], lastName = request.POST['userLastName'], email = request.POST['userEmail'], birthday = request.POST['userBirthday'], password = hashedPassword, confirmPassword = hashedPassword)
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
    loginUser = User.objects.filter(email= request.POST['userEmail'])[0] #if no errors hit and the user did successfully register, this filters to get that correctly submitted email and password
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

def quotes(request):
    print("This function displays the quote dashboard.")
    # print("This provides the current user logged in")
    currentUser = User.objects.get(id=request.session['loginInfo'])
    print(currentUser)
    print("This prints all the quotes posted and excludes the currently logged in user's favorites.")
    allQuotes = Quote.objects.all()
    allQuotesMinusFavorites = Quote.objects.exclude(favoritedByUser = currentUser)
    print(allQuotesMinusFavorites)
    print("This prints all the favorites from the logged in user. It displays on the right of the html.")
    userFavorites = Quote.objects.filter(favoritedByUser = currentUser)
    print(userFavorites)
    context = {
        'currentUser': currentUser,
        'allQuotesMinusFavorites': allQuotesMinusFavorites,
        'userFavs': userFavorites
    }
    return render(request, "quotesDashboard.html", context)

def processQuote(request):
    print("This function proccesses the quote the user submitted.")
    formErrors = Quote.objects.quoteValidator(request.POST)
    print(formErrors)
    if len(formErrors) > 0:
        for key, value in formErrors.items():
            messages.error(request,value)
        return redirect('/quotes')
    #This provides the current user logged in.
    currentUser = User.objects.get(id = request.session['loginInfo'])
    print("This is the quoter the currently logged in user submitted.")
    submittedQuoter = request.POST['submittedQuoter']
    print(submittedQuoter)
    print("This is the quote the currently logged in user submitted.")
    submittedQuote = request.POST['submittedQuote']
    print(submittedQuote)
    userEntry = Quote.objects.create(quoter = request.POST['submittedQuoter'], quote= request.POST['submittedQuote'], userWhoPosted = currentUser)
    return redirect(f'/users/{currentUser.id}')

def users(request, userId):
    print("This function displays the specifc entries submitted by the user.")
    #This provides the user who made the entries.
    userQuotes = User.objects.get(id=userId)
    userEntries = Quote.objects.filter(userWhoPosted = userQuotes)
    postCount = userEntries.count()
    print("This prints the specific entry that was submitted by the user.")
    context = {
        'userEntries': userEntries,
        'userWhoPosted': userQuotes,
        'postCount': postCount
    }
    return render (request, "displayQuote.html", context)

def processEdit(request, quoteId):
    print("This is the function that processes the recently edited quote.")
    print("*"*50)
    print(request.POST)
    formErrors = Quote.objects.quoteValidator(request.POST)
    print(formErrors)
    if len(formErrors) > 0:
        for key, value in formErrors.items():
            messages.error(request,value)
        return redirect(f'/users/{quoteId}/edit')
    else:
        currentUser = User.objects.get(id = request.session['loginInfo'])
        updateQuote = Quote.objects.get(id=quoteId)
        updateQuote.quoter = request.POST['submittedQuoter']
        updateQuote.quote = request.POST['submittedQuote']
        updateQuote.save()
        messages.success(request, "Quote successfully updated")
    return redirect(f'/users/{currentUser.id}')

def editQuote(request, quoteId):
    print("This is the function that displays the edit quote form.")
    context = {
        'quoteId' : quoteId
    }
    return render(request, "editQuote.html", context)

def remove(request, quoteId):
    print("This is the function that removes a quote within the database.")
    deleteQuote = Quote.objects.get(id=quoteId)
    deleteQuote.delete()
    return redirect("/quotes")

def addToFavorites(request, quoteId):
    favoriteQuote = Quote.objects.get(id = quoteId)
    currentUser = User.objects.get(id=request.session['loginInfo'])
    favoriteQuote.favoritedByUser.add(currentUser)
    return redirect("/quotes")

def removeFromFavorites(request, quoteId):
    favoriteQuote = Quote.objects.get(id = quoteId)
    currentUser = User.objects.get(id=request.session['loginInfo'])
    favoriteQuote.favoritedByUser.remove(currentUser)
    return redirect("/quotes")

def logout(request):
    request.session.clear()
    return redirect('/')