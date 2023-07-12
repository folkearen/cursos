age = 10

try:
    if age < 18:
        raise Exception("No se permiten menores de edad")
except Exception as error:
    print(error)

try:
    assert 1 != 1, "Uno  no es igual a a uno" #Asert tambien permiten enviar una mensaje de exepcion
except AssertionError as error:
    print(error)

print("Despues del error") #Esta linea se ejecuta porque he capturado el error antes

#Se presentan errores pero no se tumba el programa, lo importante es detectar aquellos sentencias que podrian causar un erro y atrapaslas
#Tambien se puede unificar en un solo try todos los posibles errires y capturar su excepiones 

try:
    if age < 18:
        raise Exception("No se permiten menores de edad")
    assert 1 != 1, "Uno  no es igual a a uno" 

except Exception as error:
    print(error)
except AssertionError as error:
    print(error)


def my_divide(a, b):
   # Escribe tu solución 👇
   try:
    result = a / b #Intenta hacer esta operacion
    return result  #y si funciona retorna el resultado
   except ZeroDivisionError: #Si lanza una excepcion de ZeroDivisionError, porque el parametro b (divisor) es cero retorna el siguiente mensaje
     return "No se puede dividir por 0"
   
    
response = my_divide(10, 2)
print(response) # 5

response = my_divide(10, 0)
print(response) # No se puede dividir por 0
