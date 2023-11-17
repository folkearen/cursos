'''
Crea un copia del array para no modificar el original, lo clasico
'''
import numpy as np
arr = np.arange(1,11)
print(arr)

arr2 = np.copy(arr)
print(arr2)

arr2[:] = 0

print(arr)
print(arr2)