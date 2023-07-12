"""
Simplifica la creacion de listas con una sintaxis mas corta
"""

number = [1,2,3,4,5,6]
par =[]
for i in number:
    if i % 2 == 0:
        par.append(i)

print(par)

#Normal

diezNumeros = [i for i in range(1, 11)]
print(diezNumeros)

#Alterando los elementos  a agregar
otrosNumeros = [i * 2  for i in range(1,10)] 
print(otrosNumeros)

#Con condicional if

impar = [i for i in number if i % 2 != 0]
print(impar)


#Con condicional if else
remplazoNumber = [i if i % 2 == 0 else "" for i in number]
print(remplazoNumber)
