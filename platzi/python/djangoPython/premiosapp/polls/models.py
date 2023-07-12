import datetime #Este modulo nativo de py relacionado al tiempo

from django.db import models
from django.utils import timezone #Este modulo es de Django


# Create your models here.
#El nombre de la clase se escribe en singular
#Si bien se estila en bbdd escribir el nombre de las tablsa en plural
#Aqui estamos escribiendo python, la herencia viene desde el framework
class Question(models.Model):
    #id El framewor genera automaticamente el tipo de dato y autoincremental
    #Por tanto no es necesario colocarlo
    question_text = models.CharField(max_length=200) #Estos tipos de datos viene definidos en el framework
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.question_text
    
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
        #time delta tiene que ver con diferencia de tiempo en este caso un dia
        #Este metodo verifica si una publicacion es reciente considentaod maximo un dia de antiguedad

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE) 
    #El segundo parametro sirve para que cuando borre una question, se borren todas las choises relacionadas
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
