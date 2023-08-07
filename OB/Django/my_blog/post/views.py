from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import *

# Create your views here.
def queries(request):
    authors = Author.objects.all()
    authors_filter = Author.objects.filter(id__gt=45)  
    #menor que (id__lt) lower than 
    #mayor que(id__gt) greater than 
    #menor que (id__lte) lower than equals
    #mayor que(id__gte) greater than equals
    #contiene (__contains)
    #exacto (__exact)

    containe_filter = Author.objects.filter(email__contains="ad")
    exact_filter = Author.objects.filter(email__exact="jadereid@example.org")
    authors_get = Author.objects.get(id = 1)
    authors_get_prot = get_object_or_404(Author, id=5) #Proteccion: el metodo get cuando no encuentra el objeto lanza una excepcion y bota el servidor, de esta manera no lo botara si no que mostrara un error 404 en el navegador
    limit = Author.objects.all()[:10]
    offset = Author.objects.all()[5:10] #Trae 5 elementos, desde el 6 al 10, el limite es hasta esa cantidad de elemento, no traer ese n elemento
    order = Author.objects.all().order_by('email')
    order_desc = Author.objects.all().order_by('-email')
    
    return render(request, 'post/queries.html', {
        'authors': authors,
        'filtered' : authors_filter,
        'filone' : authors_get,
        'filtwo': authors_get_prot ,
        'limit': limit,
        'offset': offset,
        'order': order,
        'order_desc': order_desc, 
        'containe_filter': containe_filter,
        'exact_filter': exact_filter
    })

def update(request):
    author = Author.objects.get(id=1)
    author.name = 'Alan'
    author.email = 'alan.munoz.b@gmail.com'
    author.save()
    return HttpResponse("Datos actualizados")