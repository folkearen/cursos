Installar requietement
Agregar 'django_extensions' en settings INSTALLED_APP

repaso
Configuraicones, extension django y configurar para jinja en json setting
Crear venv
Enseñar el pip freeze y requirement .txt
installar django django-admin nombreProyeto . (explicar el punto)
Explicar los archivos
Inicar app py manage.py startapp nombreApp
Añadir app al las app del proyecto en setting
Explicar archivos y su relación
Crear modelo
registrar modelo en admin
    from .models import *
    admin.site.register(Tarea)
Agregar a url del proyecto las url de la app
____________________________________
Crear archivo formulario
Crear formulario model
Crear Vista
Crear archivo urls
crear urls a la vista
    from django.urls import path
    from .views import *
    urlpatterns = [
         path('admin/', admin.site.urls),
    ]
Crear template y anadir el form
