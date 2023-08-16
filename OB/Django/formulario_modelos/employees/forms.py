from django.forms import forms, ModelForm 
from .models import employee

class EmployeeForm(ModelForm):
    class Meta:
        model = employee
        fields = '__all__' #Cosideta todos los campos
        #exclude = ('email',) ojo tupla, coloca el resto de los campo exceptuando el indicado
