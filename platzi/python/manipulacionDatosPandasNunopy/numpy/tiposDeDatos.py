import numpy as np

arr = np.array([1,2,3,4])
print(arr.dtype)
print(arr)
arr2 = np.array([1,2,3,4], dtype='float64') #! Puedo modificar el tipo, por ejemplos las redes neuronales se llevan mejor con float64
print(arr2.dtype)
print(arr2) #todo ====> de hecho convierte los numeros enteros dentro del array a flotante

arr3 = np.array([1,2,3,4])
print(arr3)
arr3 = arr3.astype(np.float64) #todo lo trasnformo directamente utilizando las funciones de numoy
print(arr3)

arr4 = np.array([0,1,2,3,4])
print(arr3)
arr4 = arr4.astype(np.bool_) #todo lo trasnformo directamente utilizando las funciones de numpy
print(arr4)

arr5 = np.array([0,1,2,3,4])
print(arr5)
arr5 = arr5.astype(np.str_) #todo lo trasnformo directamente utilizando las funciones de numpy
print(arr5)

arr6 = np.array([0,1,2,3,4])
print(arr6)
arr6 = arr6.astype(np.string_) #todo lo trasnformo directamente utilizando las funciones de numpy
print(arr6)

arr6 = arr6.astype(np.int8) #todo lo trasnformo directamente utilizando las funciones de numpy
print(arr6) #! Ojo no podria comvertir una palabra a un numero, solo funciona si el caracter es un digito