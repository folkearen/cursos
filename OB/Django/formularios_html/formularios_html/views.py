from django.shortcuts import render
from django.http import HttpResponse
def form(request):
    return render(request, 'form.html', {})

def goal(request):
    if request.method != 'GET':
        return HttpResponse('Meeeh!')
        
    name = request.GET['name']
    return render(request, 'succes.html', {
        'name': name
    })

def postForm(request):
    return render(request, 'formPost.html', {})

def postGoal(request):
    if request.method != 'POST':
        return HttpResponse('Meeeh!')
    info = request.POST['info']
    return render(request, 'succesPost.html', {'info':info})