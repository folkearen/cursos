from django.db import models

# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=254)

    def __str__(self):
        return self.name

class Entry(models.Model):
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    head_line= models.CharField(max_length=255)
    body_text = models.TextField()
    public_date = models.DateField( auto_now=True, auto_now_add=False)
    reating = models.IntegerField(default=5)

    def __str__(self):
        return self.head_line

