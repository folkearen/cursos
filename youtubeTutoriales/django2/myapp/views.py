from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, JsonResponse
from . import models
from .forms import CreateNewTask, CreateNewProject
# Create your views here.

def project(request):
    projects = models.Project.objects.all()
    return render(request, "project.html", {
        'projects' : projects
    })

# def task(request):
#     # task = models.Task.objects.get(pk= id) en caso de no encontrar el id botaria el server
#     tasks = models.Task.objects.all() 
#     return render(request, 'tasks.html', {
#         'tasks' : tasks
#     })


def create(request):
    if request.method == 'GET':
        #proj = models.Project.objects.all()  probando select option tradicional
        return render(request, 'create.html', {
            'form_project': CreateNewProject(),
            'form_task': CreateNewTask(),
            #'proj': proj  probando select option tradicional
        })
    else:
        if 'name' in request.POST:
            models.Project.objects.create(name=request.POST['name'])
            #print(request.POST['test']) probando select option tradicional
            return redirect('myapp:project')

        elif 'title' in request.POST:
            models.Task.objects.create(
                title=request.POST['title'],
                description=request.POST['description'], 
                project_id=request.POST['project'])
            return redirect('myapp:task')
        else: 
             return redirect('myapp:Create')

def project_detail(request,id):
    # models.Project.objects.get(id=id)
    project = get_object_or_404(models.Project,id=id)
    tasks =  models.Task.objects.filter(project_id = id)
    return render(request, 'detail.html',{
        'project': project,
        'tasks': tasks
    })