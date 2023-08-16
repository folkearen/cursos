from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Contact
from .forms import ContactForm
# Create your views here.
def index(request, letter = None):
    if letter != None:
        contacts = Contact.objects.filter(first_name__istartswith=letter)
        return render(request, 'contact/index.html', {
            'contacts': contacts
        })
    contacts = Contact.objects.filter(first_name__icontains=request.GET.get('search', '') )
    # si agrego una i al principio lo convirte en insensitive case
    return render(request, 'contact/index.html', {
        'contacts': contacts
    })

def view(request, id):
    contact = Contact.objects.get(id=id)
    return render(request, 'contact/details.html', {
        'contact': contact
    })


def edit(request, id):
    contact = Contact.objects.get(id=id)
    if request.method =='GET':
        form = ContactForm(instance=contact)
        return render(request, 'contact/create.html', {
            'form':form
        })
    if request.method == 'POST':
        form = ContactForm(request.POST, instance=contact)
        if form.is_valid():
            form.save()
        return redirect('contact')
    else:
        messages.error(request, 'Ha ocurrido un error, vuelva a intentarlo')
        return render(request, 'contact/create.html', {
            'form':form
        })

def create(request):
    if request.method == 'POST':
        contact = ContactForm(request.POST)
        if contact.is_valid():
            contact.save()
            return redirect('contact')
        else:
            messages.error(request, 'Ha ocurrido un error, vuelva a intentarlo')
            return render(request,'contact/create.html', {
                'form' : ContactForm()
            })
    return render(request,'contact/create.html', {
        'form' : ContactForm()
    })

def delete(request, id):
    #Ojo usar un logica mas compleja mediante formulario, login etc...
    contact = Contact.objects.get(id=id)
    contact.delete()
    return redirect('contact')