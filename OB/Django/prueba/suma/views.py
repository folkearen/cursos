from django.shortcuts import render
from . import forms
# Create your views here.
def suma(request):
    if request.method == "POST":
        formulario_post = forms.Valores(request.POST)
        if formulario_post.is_valid():
            a = formulario_post.cleaned_data['valor1']
            b = formulario_post.cleaned_data['valor2']
            print(a)
            print(b)
            # a = formulario_post['valor1'].value()
            # b = formulario_post['valor2'].value()
            # result = int(a) + int(b)
            result = a + b
            return render(request,'suma/suma.html', {
                'form': forms.Valores(),
                'result': result
            })
    return render(request,'suma/suma.html', {
        'form': forms.Valores()
    })