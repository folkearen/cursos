suma = lambda x,y : x + y
assert suma(2,2) == 4 #Forma de hacer pruebas unitarias y si no cumple la condiciona lanza error

#Crear propias excepciones

age = 10

if age < 18:
    raise Exception("No se admiten menores de edad") #Cualquier excepcion detiene el programa, esto no debiese ocurrir, hay que atrparlas


print("Despues del error")