from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
    

class Task(models.Model):
    title = models.CharField(max_length=200) # => para textos cortos
    description = models.TextField() # => para textos largos
    project = models.ForeignKey(Project, verbose_name=("related project"), on_delete=models.CASCADE) # => relacion con un proyecto, on delete cascade, si borro un proyecto borro sus tareas relacionadas
    done = models.BooleanField(default=False)
    
    def __str__(self):
        return f'{self.title} -> {self.project.name}'
