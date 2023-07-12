print("Hola mundo")

#a = input("Ingrese su nombre: ")
#print(a)

num = [1,2,3,4,5,6]
par = []
impar = []
for i in num:
    if i % 2:
        impar.append(i)
    else:
        par.append(i)

print(par)
print(impar)

print("----------", 2 in num )
print("----------", 8 in num )

count = 1
while count <= 5:
    count+=1
    print("Hola mundo")
    

mascota = "Pelicano"

if mascota == "perro":
    print("Buena mascota")
elif mascota == "Gato":
    print("La mejor mascota")
else:
    print("Meeeeh")

def suma(a,b):
    return a + b

print(suma(2,3))

text = "Hola mundo arriba Python"

print("Hola" in text)
print("Holas" in text)
print("mundo " in text)
print(len(text) )
print(text)
print(text.upper())
print(text.lower())
print(text.capitalize())
print(text.title())
print(text.swapcase())
print(text.count("o"))
print(text.startswith("o"))
print(text.endswith("n"))
print(text.replace("Python", "Java"))

print("a".isdigit())
print("1".isdigit())

a = "A"
print(a.isupper())

print(text[0])
print(text[1])
print(text[-1])
print(text[0:4])
print(text[:4])
print(text[5:])
print(text[6:10])
print(text[6:10])
print(text[:])
print(text[::2])
print(text[::3])
print(text[::4])

num2 = [1,2,3,4,5,6]
print(num2)
print(num2[1])
num2[1] = 9
print(num2)

num2.append(454)
num2.insert(4,70)
print(num2)

print(num2.index(1)) #Devuelve el indice del elemento indicad

liA = ["maria", "juan"]
liB = ["jacinta", "pedro"]

liC = liA + liB #Concatenar listas genera nueva direccion de memoria

liC.append("Sol")
print(liC)

liC.remove("Sol")
print(liC)

liC.pop()
print(liC)

liC.pop(0)
print(liC)


num3 = [1,5,76,34,100]
num3.sort()
print(num3)

#DICT

my_dict = {
    "Nombre":"Alan",
    "Apellido": "Muñoz",
    "Edad": 34
}
print(my_dict)
print(len(my_dict))
print(my_dict["Nombre"])
print(my_dict["Apellido"])
print(my_dict["Edad"])
print(my_dict.get("Edad"))
print(my_dict.get("rut")) #Get al no encontrar el elemnto devuelve none
#print(my_dict["rut"])#Llamarlo de forma simple genera un error y aborta el script

person = {
    "name": "Alan",
    "Last_name": "Munioz",
    "Lenguages": ["Python", "Java"],
    "age": 34
}
print(person)
print(person["Lenguages"][0])
person["Lenguages"][0] = "JavaScript"
print(person["Lenguages"][0])
print(person)
person["age"] -= 10 
print(person)
person["Lenguages"].append("Go")
print(person)
del person["age"]
print(person)
person.pop("Last_name")
print(person)

print(person.keys())
print(person.values())
