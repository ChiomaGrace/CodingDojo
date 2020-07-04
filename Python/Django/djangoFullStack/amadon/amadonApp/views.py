from django.shortcuts import render, redirect
from .models import Product, Order

def amadon(request):
    context = {
        'allProducts': Product.objects.all()
    }
    return render(request, "amadonStore.html", context)

def processOrder(request):
    print('This is the process order form.')
    print('The below line of code gets the quantity the user selected of that specific item.')
    print('*' *50)
    request.POST['quantityOptions']
    quantityOrdered = request.POST['quantityOptions']
    print(quantityOrdered)
    print('*' *50)
    print('The below line of code gets the id of the specific object chosen.')
    print('*' *50)
    itemProduct = Product.objects.get(id=request.POST['itemId'])
    print(itemProduct)
    print('*' *50)
    print('The below line of code displays three things. The created order object, and the two instances for the order(productId and the quantity ordered of the product.)')
    print('*' *50)
    newOrder = Order.objects.create(quantityOrdered = quantityOrdered, product = itemProduct)
    print(newOrder)
    print(newOrder. product)
    print(newOrder.quantityOrdered)
    print('*' *50)
    print('The belone line of code puts the new order in session, so it is remembered during checkout. However we cannot store objects in session, so we will use the primary key.')
    print('*' *50)
    request.session['newOrder'] = newOrder.id
    print(newOrder)
    print(request.session['newOrder'])
    print('*' *50)
    return redirect('/amadon/checkout')

def checkout(request):
    print("This is the success route that renders the checkout template.")
    #The below is needed to have the object in session on another route.
    try:
        newOrder = Order.objects.get(id=request.session['newOrder'])
    except (KeyError, newOrder.DoesNotExist):
        newOrder = None 
    print("This is the order object stored in session.")
    print('*' *50)
    print(newOrder)
    print('*' *50)
    print('This is the variable for quantity selected by the user.')
    quantityUserSelected = int(newOrder.quantityOrdered)
    print('*' *50)
    print(quantityUserSelected)
    request.session['quantityUserSelected'] = quantityUserSelected
    print('*' *50)
    print('This is the variable for the price of the product selected by the user.')
    productPrice = float(newOrder.product.price)
    multiplePurchasesPrice = quantityUserSelected * productPrice
    print('*' *50)
    print(multiplePurchasesPrice)
    print(productPrice)
    print('*' *50)
    print('This is the total cost of all the products purchased for the user.')
    totalCost = quantityUserSelected * productPrice
    # incrementedtotalCost += totalCost
    # request.session['totalCost'] = totalCost
    # newOrder.aggregate(sumOfAllPurchases=totalCost('totalCost'))
    print('*' *50)
    print(totalCost)
    print('*' *50)
    context = {
        'orderPurchase': multiplePurchasesPrice,
        'quantityUserSelected': quantityUserSelected,
        'totalCost': totalCost
    }
    return render(request, 'checkout.html', context)
