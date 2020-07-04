from django.db import models

class Book(models.Model):
    title = models.CharField(max_length = 255)
    description = models.TextField( default = "Description of the Book Goes Here")
    createdAt = models.DateTimeField(auto_now_add = True)
    updatedAt = models.DateTimeField(auto_now = True)

    def __repr__(self):
        return f"<Books object: {self.title} {self.description} ({self.id})>"

class Author(models.Model):
    firstName = models.CharField(max_length = 45)
    lastName = models.CharField(max_length = 45)
    notes = models.TextField(default = "Notes Go Here")
    books = models.ManyToManyField(Book, related_name ="authors")
    createdAt = models.DateTimeField(auto_now_add = True)
    updatedAt = models.DateTimeField(auto_now = True)

    def __repr__(self):
        return f"<Books object: {self.firstName} {self.lastName} {self.notes} ({self.id})>"
