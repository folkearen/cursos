"""
    Los conjuntos se pueden modificar
    No tienen orden
    No permiten duplicados
"""

set_country = {'Chile', 'Colombia', 'Mexico'}
print(set_country)
print(type(set_country))

set_number = {1,2,4,5}
set_multi = {"a",1, False, 1.345} #declaracion explicita

print(set_number)
print(set_multi)
# Si agrego un elemnto que ya existe este se eliminara.

set_string = set("Hola") #Declaracion implicita, quiero un set a partor de este string
print(set_string)

set_tuple = set(("abc", "def", "ghi", "abc"))
print(set_tuple) #al imprimir omite el segundo abc porque esta repetido.

numbers = [1,2,5,6,9,6,4]
set_numList = set(numbers)

print(set_numList) #Ordena y quita los repetidos, buen truco ademas

listnum_unique = list(set_numList)
print(listnum_unique)

"""
Funciones de set:

add(): Añade un elemento.
update(): Añade cualquier tipo de objeto iterable como: listas, tuplas.
discard(): Elimina un elemento y si ya existe no lanza ningún error.
remove(): Elimina un elemento y si este no existe lanza el error “keyError”.
pop(): Nos devuelve un elemento aleatorio y lo elimina y si el conjunto está vacío lanza el error “key error”.

clear(): Elimina todo el contenido del conjunto.
"""

set_name = {"Alan", "Maria", "Pascal", "Julio"}

size = len(set_name)
print(size)

print("Alan" in set_name)
print("A" in set_name)

set_name.add("Tamara")#Agrega un solo elemnto

print(set_name)

set_name.update({"Benjamin", "Andres"})#Agrega sub conjuntos

print(set_name)

set_name.remove("Andres")
# set_name.remove("Andres")Si intento remover un elemento que ya no existe manda un error y detiene le programa
print(set_name)
set_name.discard("Tamara")
set_name.discard("Tamara") #Si descarto un elemnto ya que ya no existe, sigue el progrma sin problema
print(set_name)

set_name.pop() #Devuelve un elemnto al azar del conjunto y lo elimina del mismo.
print(set_name)
set_name.clear()
print(set_name)

print( len(set_name))

"Operaciones con conjunto"

#Union

set_a = {"MEX", "BOL", "COL"}
set_b = {"BOL", "PE"}

set_c = set_a.union(set_b)
print(set_c)

set_c2 = set_a | set_b #Solo diferencia de sintaxis
print(set_c2)

#Iterseccion, devuelve elemntos en comun entre los conjuntos.

set_d = set_a.intersection(set_b)
print(set_d)
set_d2 = set_a & set_b
print(set_d2)

#Diferencia deja los elementos del primer conjunto que no estan en el segundo

set_e = set_a.difference(set_b)
print(set_e) #Quita BOL del primer conjunto ya que se encuentra en el segundo, ojo no lo elimina porque este reptido ya que nunca fuciona los dos conjuntos, de hecho PE no aparece.

set_e2 = set_a - set_b
print(set_e2)

#Diferencia simetrica devuelve la union de los conjunto si los elementos en los que coinciden

set_f = set_a.symmetric_difference(set_b)
print(set_f)#Omitira completamente a BOL

set_f2 = set_a ^ set_b
print(set_f2)#Omitira completamente a BOL

"""
Desafio 

Para resolver este desafío, debes escribir un algoritmo que elimine los elementos repetidos para obtener un conjunto único llamado new_set.

Este algoritmo recibirá como entrada cuatro conjuntos de países, estos países serán de todo el continente americano divididos de la siguiente manera:

countries - Países del continente en general.
northAmerica - Países del norte de América.
centralAmerica - Países del centro de América.
southAmerica - Países del sur de América.
En resumen, el algoritmo deberá eliminar los elementos repetidos de los cuatro conjuntos de países y obtener un conjunto único llamado new_set.
"""
countries = {"MX", "COL", "ARG", "USA"}
northAm = {"USA", "CANADA"}
centralAm = {"MX", "GT", "BZ"}
southAm = {"COL", "BZ", "ARG"}

new_set = set()
# Escribe tu solución 👇
new_set.update(countries, northAm,centralAm,southAm)

print(new_set)