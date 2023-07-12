"""O se lee el archivo completo, o se lee linea a linea"""

file = open('./text.txt')
#print(file.read()) Lee todo el texto de forma automatica

print('--------------------')

print(file.readline()) #lee linea a linea como un iterable. manual, ojo no funciona si tengo el read() funcionando
print(file.readline())
print(file.readline())
print(file.readline())

print('--------------------')

file.close() #Cierra el archivo

with open('./text.txt') as file2:
    for line in file2:
        print(line)
#Esta sintaxis cierra automaticamente el archivo



