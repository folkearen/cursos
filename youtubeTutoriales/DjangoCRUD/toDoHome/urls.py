from django.urls import path
from .views import *

app_name = 'toDoHome'

urlpatterns = [
    path('', home, name='home'),
    path('signup/', signUp, name='signUp'),
    path('signout/', signout, name='signout'),
    path('signin/', signin, name='signin'),
    path('tasks/', task, name='tasks'),
    path('tasks/create/', createTask, name='createTask'),

]
