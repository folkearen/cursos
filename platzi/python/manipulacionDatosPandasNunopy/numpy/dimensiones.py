'''
scalar: dim = 0 Un solo dato o valor

vector: dim = 1 Listas de Python

matriz: dim = 2 Hoja de cálculo 

tensor: dim >= 3 Series de tiempo o Imágenes

'''
import numpy as np

scalar = np.array(21)
print(scalar)
print('numero de dimensiones: ', scalar.ndim)

vector = np.array([1,2,3,4])
print(vector)
print('numero de dimensiones: ', vector.ndim)

matriz = np.array([[1,2,3,4], [5,6,7,8]])
print(matriz)
print('numero de dimensiones: ', matriz.ndim)

tensor = np.array([[[1,2,3,4], [5,6,7,8]],[[1,2,3,4], [5,6,7,8]]]) #! Desde aca podemos tener n dimensiones
print(tensor)
print('numero de dimensiones: ', tensor.ndim)

#todo ====> Agregar o quitar dimesiones
#Sumar dimesiones
vector2 = np.array([1,2,3,4,5], ndmin=10)
print(vector2)
print('numero de dimensiones: ', vector2.ndim) #! Automaticamente creara las dimesione requeridas

expand = np.expand_dims(np.array([1,2,3,4]), axis=0) #! Expande al array entregado una dimecion en el axis 0 (filas), axis 1 seria columnas
print(expand)
print(expand.ndim)

#restar dimesiones
print(vector2, vector2.ndim)
vector3 = vector2.squeeze() #! Elmina las dimesiones que, segun calcula numpy, no se estan utilizando
print(vector3, vector3.ndim)