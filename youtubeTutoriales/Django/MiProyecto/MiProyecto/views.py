#Necesitamos los objetos:
#Request: Para realizar peticiones al servidor
#HttpResponse: Para enviar la respuesta usando el protocolo http. 
#A travez de una vista!
#Django usa objetos de solicitud y respuesta para pasar el estado a través del sistema.

#cuando se solicita una página, Django crea un HttpRequestobjeto que contiene metadatos sobre la solicitud. Luego, Django carga la vista apropiada, pasando HttpRequestcomo primer argumento a la función de vista. Cada vista es responsable de devolver un HttpResponseobjeto.

from django.http import HttpResponse #para trabajar con el objeto HttpResponse
import datetime
from django.template import Template, Context

#Esto es una vista(basada en funciones)
def bienvenida(request):#Pasamos un objeto de tipo request como primer argumento
    return HttpResponse('Bienvenidos a nuestro nuevo curso de Django') #Esta es una respues http

def bienvenidaRojo(request):#Pasamos un objeto de tipo request como primer argumento
    return HttpResponse('<h1 style="color:red;">Bienvenidos a nuestro nuevo curso de Django</h1>') #Esta es una respues http

#Pasar parametros por url
def categoriaEdad(request, edad): #recibe un variable por parametro mediante la url para poder procesarla
    if edad < 10:
        categoria = 'Infancia'
    elif edad > 60:
        categoria = 'Tercera edad'
    elif edad < 18:
        categoria = 'Adolescencia'
    else:
        categoria = 'Adultez'
    
    resultado = f'<h1>Categoria de la edad: {categoria}</h1>'  #crear una variable con contenido html
    return HttpResponse(resultado) #que es devuelta mediante un objeto de HttpResponse

def obtenerMomentoActual(request):
    respuesta = f"<h1>Momento actual: {datetime.datetime.now().strftime('%A %d/%m/%Y %H:%M:%S')}</h1>"
    return HttpResponse(respuesta)

def contenidoHtml(request, nombre, edad):
    contenido =f"""
    <html>
    <body>
        <P>Nombre: {nombre} / edad: {edad}
    </body>
    </html> 
    """# Esto no es correcto, se debe optimizar usando plantillas
    #La funcion de las plantillas es separar la parte logica(vista) de la parte visual(presentacion)
    return HttpResponse(contenido)

def miPrimeraPlantilla(request):
    plantillaExterna = open("C:/Users/alanm/Desktop/cursos/youtubeTutoriales/Django/MiProyecto/MiProyecto/plantillas/miPrimeraPlantilla.html")
    template = Template(plantillaExterna.read())
    plantillaExterna.close()
    contexto = Context() #Un objeto que permite indicar que variables, funciones, atributos va utilizar la platilla, es un contenedor para pasarle parametros
    #renderizar el documento OJO!!! esta es una versiona larga, se puede simplificar
    documento = template.render(contexto)
    return HttpResponse(documento)
