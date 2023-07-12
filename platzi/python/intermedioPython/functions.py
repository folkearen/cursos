
#Funcion sin parametros

def saludar():
        print("Hola")

#Funcion con parametro

def saludarConNombre(nombre):
    print(f"Hola {nombre}")

#Funcion con multiples parametros

def saludarConNombreyEmoji(saludo, nombre, emoji):
        print(f"{saludo} {nombre} {emoji}")


def megaSaludo(saludo, nombre, emoji):
       saludar()
       saludarConNombre(nombre)
       saludarConNombreyEmoji(saludo, nombre, emoji)
       print("Eso si que fue un saludo") #Se pueden usar funciones dentor de funciones



saludar()
saludarConNombre("Alan")
saludarConNombreyEmoji("Olis", "Alan", "XD")
megaSaludo("Buenos dias", "Sr. Alan", "<3")


#Uso de return

def sumaEnRango(min, max):
    suma = 0
    for i in range(min, max + 1):
        suma += i
    return suma #retorna permite utilizar el resultado de la ejecucion de la funcion en otra parte del program

resultado1 = sumaEnRango(1,10)
print(resultado1)

resultado2 = sumaEnRango(resultado1, resultado1 + 10) #Utilizo el retorno de la primera invocacion a la funcion para pasarlo comparametro a la seguna invocacion de la funciona, y ademas, puedo ejecutar operaciones dentro de los parametros, en este caso el segundo parametro correspondiente a max es el retrono anterior mas 10.

print(resultado2)


#Con valores por defecto

def otraSumaMas(a = 1, b = 1, c= 1):
      return a + b + c

print(otraSumaMas())
print(otraSumaMas(2,2,2))
#Pdria indicarle solo un argumento y dejar los otros por los tome por defecto
print(otraSumaMas(a = 5))


def retornoMultiple(x, y, z):
      return x + y + z, z ,y ,x , "Meeeh" #DEvuelve una tupla

print(retornoMultiple(1,2,3))


"""Funciones anonimas lambda"""

def incremento(num):
      return num +1

incremento2 = lambda x : x + 1

resultado1 = incremento(10)
print(resultado1)

resultado2 = incremento2(10)
print(resultado2)


full_name = lambda name, lastName : f'Full name: {name.title()} {lastName.title()}'

usuario1 = full_name("Alan", "Muñoz")
print(usuario1)

"""Higher order function: una función dentro de otra función"""

def sumrleUno(x):
      return x + 1

def higher_function(x, funct):
      return x + funct(x)

prueba = higher_function(2, sumrleUno) #Se le entrega como arugmento solo el nombre de la funcion para que no la invoque en el momento
print(prueba)

#Con lambda

higher_function2 = lambda x : x + sumrleUno(x)

pruebaLambda = higher_function2(2)
print(pruebaLambda)

#Prueba mia

def sumi(a,b):
      return a + b

def sumiDeTres(a,b):
    return a + b


tres_numeros_sumado = sumiDeTres(2, sumi(2,2)) #aqui invoco a la funcion dentro de los argumentos para ejecutrarle inmediatamente y conseguir la suma de tres nuemros

print(tres_numeros_sumado)
