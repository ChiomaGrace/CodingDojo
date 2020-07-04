from django.shortcuts import render
from time import gmtime, strftime

def index(request):
    context = {
        "time": strftime("%A, %B %d, %Y. The time is currently %I:%M %p.", gmtime())
    }
    return render(request,'timeDisplay.html', context)

def timeDisplay(request):
    context = {
        "time": strftime("%Y-%m-%d %H:%M %p", gmtime())
    }
    return render(request,'timeDisplay.html', context)
