from django.db import models

class Show(models.Model):
    title = models.CharField(max_length = 255)
    network = models.CharField(max_length = 255)
    releaseDate = models.DateField()
    description = models.TextField(null = True)
    createdAt = models.DateTimeField(auto_now_add = True)
    updatedAt = models.DateTimeField(auto_now = True)

    def __repr__(self):
        return(f"<Show object: {self.title} {self.network} {self.releaseDate} ({self.id})")
