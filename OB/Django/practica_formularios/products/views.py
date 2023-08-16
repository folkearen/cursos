from django.shortcuts import render
from .forms import FormProduct

# Create your views here.
def index(request):
    if request.method == 'POST':
        form = FormProduct(request.POST)
        if form.is_valid():
            form.save()
        else:
             return render(request, 'index.html', {
                 'form' : FormProduct(),
             })
    return render(request, 'index.html', {
        'form' : FormProduct()
    })