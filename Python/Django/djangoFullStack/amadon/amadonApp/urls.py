from django.urls import path
from . import views

urlpatterns = [
    path('amadon', views.amadon),
    path('processOrder', views.processOrder),
    path('amadon/checkout', views.checkout)
]