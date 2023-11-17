'''
Muestra la forma de un arreglo
'''

import numpy as np

arr = np.random.randint(1,10,(3,2))
print(arr)
print(arr.ndim)
print(arr.shape) #! Imprime la forma en cuanto a dimesiones de un arreglo devuelve (n/n/...)
print(arr.reshape(1,6)) #! Redimesiona la matriz, de acuerdo a las dimeisones entregada por parametros
print(arr.reshape(2,3)) #!Puede hacer el reshape, siempre y cuando calcen la cantidad de datos previa en el numero de columnas y filas reasignados, su no tiene con que llenar lanza una excepcion
print(arr.reshape(6,1))

arr2 = np.reshape(arr,(1,6)) #! Otra sintaxis
print(arr2)

print('----------------')

print(arr)

arr3 = np.reshape(arr,(1,6),'C') #! Ordena segun lenguaje C en este caso por filas
print(arr3)

arr4 = np.reshape(arr,(1,6),'F') #! Ordena segun el lenguaje fortran, es este caso por columnas
print(arr4)

arr5 = np.reshape(arr,(1,6), 'A') #!Ordena segun la optimizacion para mi laptorm, en este caso en C
print(arr5)

#! Por defecto orden segun C.

