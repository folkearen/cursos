from django.db import models

# Create your models here.

class Reporter(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=254)

    def __str__(self):
        return self.email

class Article(models.Model):
    headline = models.CharField(max_length=100)
    pub_date = models.DateField(auto_now=True, auto_now_add=False)
    #auto_now actualiza a fecha y hora actual cuandos e crea el objeto y cada vez que se modifica el objeto.
    #auto_now_add inserta la hora y fecha actual cuando el objeto es creado y no la modifica ante actulizaciones
    reporter = models.ForeignKey(Reporter, on_delete=models.CASCADE)

    def __str__(self):
        return self.headline
    