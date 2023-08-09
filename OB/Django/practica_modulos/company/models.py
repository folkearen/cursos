from django.db import models

# Create your models here.
#blank=False: Este argumento indica si el campo es obligatorio en los formularios. Cuando blank se establece en False, significa que el campo no puede quedar en blanco al enviar un formulario. Es decir, el usuario debe proporcionar un valor para este campo
class Salary(models.Model):
    amount = models.IntegerField(blank=False,null=False)
    extra_dec = models.BooleanField(default=False)
    extra_jun = models.BooleanField(default=False)

    def __str__(self):
        return self.amount

class Job(models.Model):
    title = models.CharField(max_length=15, blank=False, null=False)
    description = models.TextField(null=True)
    salary = models.ForeignKey(Salary, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return self.title
    

class Country(models.Model):
     name = models.CharField(max_length=15, blank=False, null=False)
     coubtry_code = models.CharField(max_length=6, blank=False, null=False)
     
     def __str__(self):
         return self.name
     

class Location(models.Model):
    name = models.CharField(max_length=30, blank=False, null=False)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name

class Place(models.Model):
    name = models.CharField(max_length=30, blank=False, null=False)
    address = models.CharField(max_length=50, blank=False, null=False)
    zip_code = models.CharField(max_length=5, blank=False, null=False)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Employee(models.Model):
    id_number = models.CharField(max_length=30, blank=False, null=False)
    first_name = models.CharField(max_length=30, blank=False, null=False)
    last_name = models.CharField(max_length=30, blank=False, null=False)
    email = models.EmailField(max_length=30, blank=False, null=False)
    address = models.CharField(max_length=50, blank=False, null=False)
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    place = models.ForeignKey(Place, on_delete=models.CASCADE)

    #Por convnencion 1 a muchos el nombre de la columna FK es el nombre de la clase a la que hace referencia pero en minuscula
    def __str__(self):
        return f'{self.first_name} {self.last_name}'
