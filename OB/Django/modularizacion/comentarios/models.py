from django.db import models

# Create your models here.
class Comment(models.Model):
    name = models.CharField(max_length=255, null=False)
    score = models.IntegerField(default=3)
    comment = models.TextField( max_length=100, null=True)
    date = models.DateField( auto_now=True, auto_now_add=False, null=True)
    signature = models.CharField(max_length=100, default="firma")

    def __str__(self):
        return self.name

"""
#Cuando se indica un dato que no puede ser nullo, despues de haber migrado otros datos que si 
#Podrian serlo , lazara advertencias. no se puede agregar si anadir un valor por defecto
1 - anadir un valor por defecto ahora
2 - cancela y anadir manualmente (agrego default="")
"""
