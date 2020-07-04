from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

def index(request):
    context = {
        'wordGenerator': get_random_string(length=20)
    }
    if 'attempts' in request.session:
        request.session['attempts'] +=1
    else:
        request.session['attempts'] = 1
    return render(request,"randomWordGenerator.html", context)

def randomWord(request):
    context = {
        'wordGenerator': get_random_string(length=20)
    }
    return redirect("/")


def reset(request):
    context = {
        'wordGenerator': get_random_string(length=20)
    }
    if 'attempts' in request.session:
        request.session['attempts'] = 0
    return render(request,"randomWordGenerator.html", context)

