from django.shortcuts import render
from django.http import HttpResponse
from .models import *
# Create your views here.

def create(request):
    #Primero se crean los elemntos por separados
    #Para relacionarlos primero deben estar guardados
    #Para el ejemplo guardamos directamente los archivos mediante su constructor, no mediante objects.create
    art1 = Article(headeline='Articulo 1')
    art1.save()
    art2 = Article(headeline='Articulo 2')
    art2.save()
    art3 = Article(headeline='Articulo 3')
    art3.save()

    pub1 = Publication(title='Publicacion 1')
    pub1.save()
    pub2 = Publication(title='Publicacion 2')
    pub2.save()
    pub3 = Publication(title='Publicacion 3')
    pub3.save()
    pub4 = Publication(title='Publicacion 4')
    pub4.save()
    pub5 = Publication(title='Publicacion 5')
    pub5.save()
    pub6 = Publication(title='Publicacion 6')
    pub6.save()
    pub7 = Publication(title='Publicacion 7')
    pub7.save()

    art1.publications.add(pub1)
    art1.publications.add(pub2)
    art1.publications.add(pub3)
    art2.publications.add(pub4)
    art2.publications.add(pub5)
    art3.publications.add(pub6)
    art3.publications.add(pub7)

    result= art1.publications.all()
    #Consutla desde publicaicon
    # pub1 = Publicacion.objects.get(id=1)
    # result = pub1.articles_set.all()
    return HttpResponse(result) 