from django.urls import path
from . import views

app_name = 'myapp'
urlpatterns = [
    path('', views.project, name='project'),
    path('project/<int:id>', views.project_detail, name='project_detail'),
    # path('task/', views.task, name='task'),
    path('create/', views.create, name='create')
]
