from django.urls import path
from .views import *

app_name = 'toDoHome'

urlpatterns = [
    path('', home, name='home'),
    path('signup/', signUp, name='signUp')
]
