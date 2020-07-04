from django.db import models
from datetime import datetime
from django.core.exceptions import ValidationError

class ShowManager(models.Manager):
    def basicValidator(self, postDate):
        errors = {}
        if len(postDate['showTitle']) < 2:
            errors['title'] = "The title of the show should be at least 2 characters."
        if len(postDate['showNetwork']) < 3:
            errors['network'] = "The network of the show should be at least 3 characters."
        # if len(postDate['showDescription']) < 10:
        #     errors['description'] = "The description of the show should be at least 10 characters or more."

        #The below code prevents reptitiion of show submissions.
        allTheShows = Show.objects.all()
        print("*"*50)
        print("This shows all the shows in the database.")
        print(allTheShows)
        print("This filters all the names of the same show submitted")
        repeatOfShows = Show.objects.filter(title = postDate['showTitle'])
        print(repeatOfShows)
        print("*"*50)
        print("Look Above This")
        if len(repeatOfShows) > 0:
            errors['title'] = "Show already exists."

        # The below code is to provide an option to write a description.
        optionalDescription = postDate['showDescription']
        if optionalDescription != '' and len(optionalDescription) < 10:
            errors['description'] = "The description of the show is optional. If you choose to submit a description, it must be at least 10 characters or more." 

        # The below code prevents a release date the same or greater than the current date.
        currentDate = datetime.now()
        #need to put current date in a string to be able to be compared to showReleaseDate(another string)
        showReleaseDate = postDate['showReleaseDate']
        print(currentDate)
        print(showReleaseDate)
        if showReleaseDate > currentDate.strftime('%Y-%m-%d'):
            errors['releaseDate'] = "The release date of the show should be prior to the current date."
        return errors

class Show(models.Model):
    title = models.CharField(max_length = 255)
    network = models.CharField(max_length = 255)
    releaseDate = models.DateField()
    description = models.TextField(null = True)
    createdAt = models.DateTimeField(auto_now_add = True)
    updatedAt = models.DateTimeField(auto_now = True)
    objects = ShowManager()

    def __repr__(self):
        return(f"<Show object: {self.title} {self.network} {self.releaseDate} ({self.id})")
