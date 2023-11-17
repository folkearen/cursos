import numpy as np

arr = np.arange(0,10)
arr2 =np.copy(arr)

print(arr2 * 2)
print(arr2 + 2)
print(1 / arr2) #! Arroja un warning de zero division sin embargo sigue aplicando la operacion al resto de los elemntos.

#todo operacons entre arrays
print(arr + arr2)
print(arr - arr2)
print(arr * arr2)
print(arr / arr2)

matriz1 = arr.reshape(2,5)
matriz2 = matriz1.copy()

print(matriz1)
print(matriz2)
print(matriz1 + matriz2)
print(matriz1 - matriz2)
print(matriz1 * matriz2)
print(matriz1 / matriz2)

