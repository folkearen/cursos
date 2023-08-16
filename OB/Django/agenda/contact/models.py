from django.db import models

# Create your models here.
class Contact(models.Model):
    first_name = models.CharField(max_length=50, blank=False, null=False)
    last_name =  models.CharField(max_length=50, blank=False, null=False)
    mobile = models.CharField(max_length=15, blank=False, null=False)
    other_phone = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(max_length=254)
    company = models.CharField(max_length=20, blank=True, null=True)
    date = models.DateField(auto_now=False, auto_now_add=True)
    note = models.TextField(blank=True, null=True)

    def __str__(self) -> str:
        return self.first_name + " " + self.last_name