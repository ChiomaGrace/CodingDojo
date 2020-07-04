from django.urls import path
from . import views

urlpatterns = [
    path('', views.rootRoute),
    path('shows', views.allShows),
    path('shows/new', views.addNewShow),
    path('processNewShow', views.processNewShow),
    path('shows/<showId>', views.specificShow),
    path('shows/<showId>/edit', views.editForm),
    path('processEdit/<showId>', views.processEdit),
    path('shows/<showId>/delete', views.deleteShow),

]