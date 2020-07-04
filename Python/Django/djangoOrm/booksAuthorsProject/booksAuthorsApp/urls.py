from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('submittedBook', views.submittedBook),
    path('book/<bookId>', views.book),
    path('submittedAuthorOnSpecificBook/<bookId>', views.submittedAuthorOnSpecificBook),
    path('author/', views.author),
    path('submittedAuthor', views.submittedAuthor),
    path('specificAuthor/<authorId>', views.specificAuthor),
    path('submittedBookOnSpecificAuthor/<authorId>', views.submittedBookOnSpecificAuthor)
]