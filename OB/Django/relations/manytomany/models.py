from django.db import models

# Create your models here.

class Publication(models.Model):
    title = models.CharField(max_length=30)

    def __str__(self):
        return self.title
    

class Article(models.Model):
    headeline = models.CharField(max_length=100)
    publications = models.ManyToManyField(Publication)
    #La relacion solo debe marcarse solo en una de las tablas
    #No es necesario el delete CASCADE, ya que la relaciones muchos a muchos se guarda en tablas pibotes

    def __str__(self):
        return self.headeline
    
