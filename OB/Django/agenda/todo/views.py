from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Todo
from .forms import TodoForm

# Create your views here.
def index(request):
    todos = Todo.objects.filter(title__contains=request.GET.get('search', ''))
    return render(request, 'todo/index.html', {
        'todos': todos
    })
def create(request):
    pass

def view(request, id):
    pass

def edit(request, id):
    pass

def delete(request, id):
    pass