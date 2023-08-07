
from django.http import HttpResponse

def saludo(request):
    return HttpResponse('Hola mundo')

def despedida(request):
    return HttpResponse('Hasta luego')

def adulto(request, edad):
    if edad >= 18:
        return HttpResponse('Es mayor de edad') 
    else:
        return HttpResponse('No eres mayor de edad')

def suma(request, n1, n2):
    suma = n1 + n2
    return HttpResponse(n1 + n2)