from django.forms import ModelForm
from .models import Product

class FormProduct(ModelForm):
    class Meta:
        model= Product
        fields = '__all__'
        labels = {
            'name':'Nombre Producto',
            'price' : 'Precio',
            'description' : 'Descripción'
        }