from django.db import models

# Create your models here.

class Place(models.Model):
    name = models.CharField( max_length=50, default='')
    address =  models.CharField(max_length=80, default='')

    def __str__(self):
        return self.name

class Restaurant(models.Model):
    place = models.OneToOneField(Place, on_delete=models.CASCADE, primary_key=True) #primary_key=True es el valor por defecto y no es necesario especificarlo
    number_of_employees = models.IntegerField(default=1)    

    def __str__(self):
        return self.place.name
    