from django.shortcuts import render
from django.http import HttpResponse
from .forms import CommentForm, ContactForm

def form(request):
    comment_form =  CommentForm()
    return render(request,'form.html', {
        'comment_form' : comment_form
    })

def goal(request):
    if request.method != "GET":
        return HttpResponse("Mal ahi")
    return HttpResponse('Eeeeeeeeeeexito')

def widget(request):
    if request.method == 'POST':
        if ContactForm(request.POST).is_valid():
            return HttpResponse("OOkissssssssssss")
        
        else: 
            errors = ContactForm(request.POST).errors
            return render(request, 'widget.html', {
                'form': ContactForm(),
                'errors':errors
            }) 



   
    return render(request, 'widget.html', {
        'form': ContactForm()
    }) 
    
    #Validaciones generales
        #tipo de dato, longitud definida...etc
    #Validacione spersonalizadas