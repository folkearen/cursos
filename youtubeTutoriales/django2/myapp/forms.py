from django import forms
from . import models

class CreateNewProject(forms.Form):
    name = forms.CharField(label='Titulo del proyecto', max_length=200, widget=forms.TextInput(attrs={'class': 'input'}))



class CreateNewTask(forms.Form):
    project = forms.ModelChoiceField(queryset= models.Project.objects.all())
    title = forms.CharField(label='Titulo de la tarea', max_length=200, widget=forms.TextInput(attrs={'class': 'input'}))
    description = forms.CharField(label='Descripcion de la tarea', widget=forms.Textarea(attrs={'class': 'input'}))