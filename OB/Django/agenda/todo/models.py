from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    creation_date = models.DateField(auto_now=False, auto_now_add=True)
    deadline = models.DateField(auto_now=False, auto_now_add=False, blank=False, null=False)
    priority = models.IntegerField(default=3)

    def __str__(self) -> str:
        return self.title