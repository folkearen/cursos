from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout, login, authenticate
from django.contrib import messages
from .forms import CustomCreationForm
# Create your views hefrom django.contrib import messagesre.
def home(request):
    return render(request, 'core/home.html', {})


@login_required
def products(request):
    return render(request, 'core/products.html', {})

def exit(request):
    logout(request)
    return redirect('home')


def register(request):
    if request.method == 'POST':
        formulario_post = CustomCreationForm(request.POST)
       
        if formulario_post.is_valid():
            formulario_post.save()
            user = authenticate(username=formulario_post.cleaned_data['username'], password=formulario_post.cleaned_data['password1'])
            login(request, user)
            return redirect('home')
        
        else:   
             return render(request, 'registration/register.html', {
                'form': CustomCreationForm(),
                'errors': formulario_post.errors
            })

    return render(request, 'registration/register.html', {
        'form': CustomCreationForm()
    })