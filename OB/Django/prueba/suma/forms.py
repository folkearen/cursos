from django import forms


class Valores(forms.Form):
    valor1 = forms.IntegerField(required=False)
    valor2 = forms.IntegerField(required=False)
