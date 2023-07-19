from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm #Django vine con un modelo de form para autentificar
from django.contrib.auth.models import User #Tambin nos brinda un modelo de usuario para poder registrarlo en la base de datos
# Create your views here.

def home(request):
    usuarios = User.objects.all()
    return render(request, 'toDoHome/home.html',{
        'usuarios' : usuarios
    })

def signUp(request):
    
    if request.method == 'GET': #Como utilizamos la misma ruta para servir y recibir datos, condicionamos que cuando se get sirva la pagina y el fomrulario pero cuando sea POST procese la informacion
        # print('Sirviendo formulario') para visualizar pedidos GET
        return render(request, 'toDoHome/signup.html',{
            'form' : UserCreationForm
        })
    else:
        # print(request.POST)
        # print(request.POST['username'])  para visualizar pedidos POST
        if request.POST['password1'] ==  request.POST['password2']:
            #register user =>el modelo user se encargara de guardar la contasenia cifrada y almacenar la infor donde corresponda
            try:
                User.objects.create_user(username=request.POST['username'], password=request.POST['password1']).save()
                return HttpResponse('Usuario registrado')
            except:
                return render(request, 'toDoHome/signup.html',{
                        'form' : UserCreationForm,
                        'error' : 'El usario ya existe'
                    })
            
        return  render(request, 'toDoHome/signup.html',{
                        'form' : UserCreationForm,
                        'error' : 'Constasenias no coinciden'
                    })
            
