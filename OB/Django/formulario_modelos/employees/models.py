from django.db import models

# Create your models here.
class employee(models.Model):
    first_name = models.CharField(max_length=50, blank=False, null=False)
    last_name= models.CharField(max_length=50, blank=False, null=False)
    email = models.EmailField(max_length=50, blank=False, null=False)

    def __str__(self):
        return self.last_name + " " + self.first_name
    