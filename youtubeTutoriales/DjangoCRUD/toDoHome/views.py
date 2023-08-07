from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm,  AuthenticationForm #Django vine con un modelo de form para autentificar
from django.contrib.auth.models import User #Tambin nos brinda un modelo de usuario para poder registrarlo en la base de datos
from django.contrib.auth import login, logout, authenticate #Crea una cookies de sesion, cierra la cookie de sesion respectivamente.
from .forms import TaskForm
from .models import Task
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
                user = User.objects.create_user(username=request.POST['username'], password=request.POST['password1'])
                user.save()
                login(request, user) #Crea una cookie de sesion cuando se hace el signup
                return redirect('toDoHome:task')
            except:
                return render(request, 'toDoHome/signup.html',{
                        'form' : UserCreationForm,
                        'error' : 'El usario ya existe'
                    })
            
        return  render(request, 'toDoHome/signup.html',{
                        'form' : UserCreationForm,
                        'error' : 'Constasenias no coinciden'
                    })

def signout(request): #No nomabra logout ya que hay una funcion predefinida con ese nombre
    logout(request)
    return redirect('toDoHome:home')

def signin(request):
    if request.method == 'GET':
        return render(request, 'toDoHome/signin.html', {
            'form' : AuthenticationForm
        })
    else:
        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])
        if user is None:
            return render(request, 'toDoHome/signin.html', {
            'form' : AuthenticationForm,
            'error': 'Username or password is incorrect'}
            )
        else:
            login(request, user)
            return redirect('toDoHome:tasks')

            
def task(request):
    tasks = Task.objects.filter(user=request.user, datecompleted__isnull=True)
    return render(request,'toDoHome/tasks.html',{
        'tasks': tasks
    })

def createTask(request):
    if request.method == 'GET':
        return render(request, 'toDoHome/createTask.html', {
            'form': TaskForm
        })
    else: 
        try:
            form = TaskForm(request.POST)
            newTask = form.save(commit=False)
            newTask.user = request.user
            newTask.save()
            return redirect('toDoHome:tasks')

        except ValueError:
            return render(request, 'toDoHome/createTask.html', {
            'form': TaskForm,
            'error': 'Please provide valid data'
            })