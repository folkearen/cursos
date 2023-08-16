from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=50, blank=False, null=False)
    price = models.IntegerField(blank=False, null=False)
    description = models.CharField(max_length=250, blank=False, null=False)

    def __str__(self) -> str:
        return self.name