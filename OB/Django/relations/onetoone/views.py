from django.shortcuts import render
from django.http import HttpResponse
from .models import Place, Restaurant
# Create your views here.

def create(request):
    #Creacion de datos
    place = Place.objects.create(name='Lugar 1', address='Calle 1')
    restaurante = Restaurant.objects.create(place=place, number_of_employees=3)
    return HttpResponse(restaurante.place.name)