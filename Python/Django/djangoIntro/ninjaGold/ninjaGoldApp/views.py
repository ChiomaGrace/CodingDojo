from django.shortcuts import render, HttpResponse, redirect
from random import randint

def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
    if 'activities' not in request.session:
        request.session['activities']= []
    return render(request, "ninjaGold.html")

def processMoney(request):
    if request.POST['location'] =='farm': #location is the 'name' and 'farm' is the value in the request.post
        farmGold = randint(10,20) #this is the random number method i imported. the parameters are the range of numbers it selects randomly between
        request.session['gold'] += farmGold #this is where i set it equal to the request.session gold. meaning every time the button is clicked, it picks a number between 10-20 that is then added to the gold total.
        farmActivity = f"Saw some chickens & got some breadddd. You earned {farmGold} coins." #now i will write the string i want displayed immediately after the farm gold button is clicked
        # farmActivityTwo = f"You milked a cow. Some splashed in your eye, but hey, still got paid. You earned {farmGold}."
        # farmActivityThree = f"The chickens weren't vibing with you today at allll. But money's, money ! You earned {farmGold}."
        request.session['activities'].append(farmActivity) #because this is still in the if loop, as the farm gold button is getting clicked this string displays afterwards
        # request.session['activities'].extend([farmActivityTwo, farmActivityThree ]) 
    if request.POST['location'] =='cave':
        caveGold = randint(5,10)
        request.session['gold'] += caveGold
        caveActivity = f"Chilled with those fellas from the Geico commercial and got more dough ! You earned {caveGold} coins."
        request.session['activities'].append(caveActivity)
    if request.POST['location'] =='house':
        houseGold = randint(2,5)
        request.session['gold'] += houseGold
        houseActivity = f"You found some extra change underneath the couch ! You earned {houseGold} coins."
        request.session['activities'].append(houseActivity)
    if request.POST['location'] =='casino':
            casinoGold = randint(-50,50)
            request.session['gold'] += casinoGold
            earnCasinoActivity = f"Go big or go home, baby ! You earned {casinoGold} coins."
            loseCasinoActivity = f"Go home, Roger ! You just lost {casinoGold} coins."
            if casinoGold > -1:
                request.session['activities'].append(earnCasinoActivity)
            else:
                request.session['activities'].append(loseCasinoActivity)
    return redirect("/")

# def location(request, location):
#     if location =='farm': #location is the 'name' and 'farm' is the value in the request.post
#         farmGold = randint(10,20) #this is the random number method i imported. the parameters are the range of numbers it selects randomly between
#         request.session['gold'] += farmGold #this is where i set it equal to the request.session gold. meaning every time the button is clicked, it picks a number between 10-20 that is then added to the gold total.
#         farmActivity = f"Saw some chickens & got some breadddd. You earned {farmGold} coins." #now i will write the string i want displayed immediately after the farm gold button is clicked
#         # farmActivityTwo = f"You milked a cow. Some splashed in your eye, but hey, still got paid. You earned {farmGold}."
#         # farmActivityThree = f"The chickens weren't vibing with you today at allll. But money's, money ! You earned {farmGold}."
#         request.session['activities'].append(farmActivity) #because this is still in the if loop, as the farm gold button is getting clicked this string displays afterwards
#         # request.session['activities'].extend([farmActivityTwo, farmActivityThree ]) 
#     return render(request, "ninjaGold.html")

def reset(request):
    if 'gold' in request.session:
        request.session['gold'] = 0
    if 'activities' in request.session:
        request.session['activities']= []
    return redirect("/")
