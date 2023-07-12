"""
URL configuration for MiProyecto project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from MiProyecto.views import bienvenida, bienvenidaRojo, categoriaEdad, obtenerMomentoActual #Importamos desde el archivo views la vista(def) bienvenida

urlpatterns = [
    path('admin/', admin.site.urls),
    path('bienvenida/', bienvenida), #Creamos una nueva url, y la ligamos a la vista bienvenida
    path('bienvenida2/', bienvenidaRojo),
    path('categoriaEdad/<int:edad>/', categoriaEdad), #<int:edad> convierte el parametro en entero, se entrega una varibale edad de tipo entero para que la vista pueda procesarlo
    path('obtenerMomentoActual/', obtenerMomentoActual)
]
