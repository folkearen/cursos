import numpy as np

arr = np.linspace(1,10,10, dtype='int8' )
print(arr)

print(arr[arr > 5])
print(arr[(arr > 5) & (arr < 9)])
arr[arr > 5] = 99
print(arr)
print(arr[arr == 99])
print(arr[arr == 0])
print(arr[arr != 0])
print(arr[arr != 99])