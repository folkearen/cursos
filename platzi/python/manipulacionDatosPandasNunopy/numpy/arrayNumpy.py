import numpy as np

lista = [1,2,3,4,5]

matriz = [[1,2,3],[4,5,6],[7,8,9]]
arrayNumpy = np.array(lista)
matrizNumpy = np.array(matriz)

print(arrayNumpy)
print(matrizNumpy)
print(type(arrayNumpy))

#! Puedo trabajar con indexacion

print(arrayNumpy[1])
print(arrayNumpy[2])
print(arrayNumpy[2] + arrayNumpy[1])
print('/////')
print(matrizNumpy[1])
print(matrizNumpy[2])
print(matrizNumpy[2] + matrizNumpy[1]) #todo ==> Sumara cada una de las posiciones con aquella que concuerde en posicion en la otra lista de la matriz, las matrices deben tener la misma longitud
print(matrizNumpy[0] + matrizNumpy[1] + matrizNumpy[2])
print(matrizNumpy[0,0] + matrizNumpy[1,0]) #todo ====> sintaxis numpy para acceder a coordenadas dentro de la matriz
print(matrizNumpy[0,2]) 

#! Puedo trabajar con slice
print(arrayNumpy[0:5])
print(arrayNumpy[:5])
print(arrayNumpy[:4])
print(arrayNumpy[0:])
print(arrayNumpy[3:])
print(arrayNumpy[1:4])
print(arrayNumpy[::])
print(arrayNumpy[::3]) #todo trae todo pero de 3 en 3
print(arrayNumpy[-3:])
#todo En matrices
print(matrizNumpy[1:,0:2]) #* Les digo que traiga las finas desde la posicion 1 a la ultima, y de las columnas solo desde la posicion 0 a 1
