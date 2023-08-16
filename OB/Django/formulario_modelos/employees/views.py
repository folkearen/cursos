from django.shortcuts import render
from .forms import EmployeeForm

# Create your views here.
def index(request):
    return render(request, 'index.html', {
        'form' : EmployeeForm()
    })