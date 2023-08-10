from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class CustomCreationForm(UserCreationForm):
    # def clean_password1(self):
    #     password =str(self.cleaned_data.get('password1'))
    #     if password.isdigit():
    #         raise forms.ValidationError('No pueden ser solo números') 
    #     return password

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'password1', 'password2']
        labels = {
            'username': 'Correo electrónico'
        }
        widgets = {
            'username': forms.EmailInput(attrs={'placeholder': 'Ingrese su correo'}),
            'first_name': forms.TextInput(attrs={'placeholder': 'Ingrese su nombre Ej: María Angélica'}),
            'last_name': forms.TextInput(attrs={'placeholder': 'Ingrese su apellido Ej: Pérez González'}),
        }

        help_texts = {
            'username': 'Ingrese su dirección de correo electrónico válida. Debe contener letras, números y @.',
        }
       
       