from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('processMoney', views.processMoney),
    path('reset', views.reset),
    # path('<str:location>', views.location)  
]
