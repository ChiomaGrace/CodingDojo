from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('login', views.login),
    path('processRegistration', views.processRegistration),
    path('processLogin', views.processLogin),
    path('success', views.success),
    path('quotes', views.quotes),
    path('processQuote', views.processQuote),
    path('users/<userId>', views.users),
    path('processEdit/<quoteId>', views.processEdit),
    path('users/<quoteId>/edit', views.editQuote),
    path('users/<quoteId>/remove', views.remove),
    path('addToFavorites/<quoteId>', views.addToFavorites),
    path('removeFromFavorites/<quoteId>', views.removeFromFavorites),
    path('logout', views.logout)
]