from django.shortcuts import render,redirect
from .models import Book, Author

def index(request):
    context = {
        'allBooks': Book.objects.all()
    }
    return render(request, "addABook.html", context)

def submittedBook(request):
    print("This is the function for the book that was submitted on the index page.")
    Book.objects.create(title = request.POST['bookTitle'], description = request.POST['bookDescription'])
    return redirect("/")

def book(request, bookId):
    print("This is the view function for the book selected on the index page.")
    context = {
        'displayBook': Book.objects.get(id = bookId),
        'allAuthors': Author.objects.all()
    }
    return render(request, "specificBook.html", context)

def submittedAuthorOnSpecificBook(request, bookId):
    print("This is the function for the author that was added on a specific book.")
    # print(request.POST)
    #Now for the information to be processed correctly, need to know the specific Book (via ID), need to know the author, and then join the two
    theSpecificBook = Book.objects.get(id = bookId)
    theSelectedAuthor = Author.objects.get(id= request.POST['authorOptions'])
    theSpecificBook.authors.add(theSelectedAuthor)
    return redirect(f"/book/{bookId}")

def author(request):
    context = {
        'allAuthors': Author.objects.all()
    }
    return render(request, "addAnAuthor.html", context)

def submittedAuthor(request):
    print("This is the function for the author that was submitted on the author page.")
    Author.objects.create(firstName = request.POST['authorFirstName'], lastName = request.POST['authorLastName'], notes = request.POST['authorNotes'])
    return redirect("/author")

def specificAuthor(request, authorId):
    print("This is the view function for the author selected on the index page.")
    context = {
        'displayAuthor': Author.objects.get(id = authorId),
        'allBooks': Book.objects.all()
    }
    return render(request, "specificAuthor.html", context)

def submittedBookOnSpecificAuthor(request, authorId):
    print("This is the function for the book that was added on a specific author.")
    #Now for the information to be processed correctly, need to know the specific author (via ID), need to know the book, and then join the two
    theSpecificAuthor = Author.objects.get(id = authorId)
    theSelectedBook = Book.objects.get(id= request.POST['bookOptions'])
    theSpecificAuthor.books.add(theSelectedBook)
    return redirect(f"/specificAuthor/{authorId}")
