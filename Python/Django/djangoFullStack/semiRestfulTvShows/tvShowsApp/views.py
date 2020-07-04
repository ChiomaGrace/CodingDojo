from django.shortcuts import render, redirect
from .models import Show

def rootRoute(request):
    print("This is the function that redirects the root route to the allShows function.")
    return redirect("/shows")

def allShows(request):
    print("This is the function that displays the datebase of all the shows.")
    context = {
        'allShows': Show.objects.all()
    }
    print(Show.objects.all())
    return render(request, "allShows.html", context)

def addNewShow(request):
    print("This is the function that displays the form to create a new show then when create is clicked it goes to the next method.")
    return render(request, "addAShow.html")

def processNewShow(request):
    print("This is the function that processes the recently submitted form.")
    request.POST
    print(request.POST)
    print("*"*50)
    newShow = Show.objects.create(title = request.POST['showTitle'], network = request.POST['showNetwork'], releaseDate = request.POST['showReleaseDate'], description = request.POST['showDescription'], )
    return redirect(f"/shows/{newShow.id}")

def specificShow(request, showId):
    print("This is the function that displays the newly submitted form.")
    context = {
        'newShow': Show.objects.get(id = showId)
    }
    return render(request, "submittedShow.html", context)

def editForm(request, showId):
    print("This is the function that displays the edit show form.")
    context = {
        'editShow': Show.objects.get(id = showId)
    }
    return render(request, "editAShow.html", context)

def processEdit(request, showId):
    print("This is the function that processes the recently edited form.")
    updateShow = Show.objects.get(id=showId)
    print("printing the show object we want to update")
    print(updateShow)
    print(request.POST)
    updateShow.title = request.POST['showTitle']
    updateShow.network = request.POST['showNetwork']
    updateShow.releaseDate = request.POST['showReleaseDate']
    updateShow.description = request.POST['showDescription']
    updateShow.save()
    print("*"*50)
    print(request.POST)
    # return redirect("/processNewShow")
    return redirect(f"/shows/{showId}")

def deleteShow(request, showId):
    print("This is the function that destroys a show within the database.")
    deleteShow = Show.objects.get(id=showId)
    deleteShow.delete()
    return redirect("/shows")
