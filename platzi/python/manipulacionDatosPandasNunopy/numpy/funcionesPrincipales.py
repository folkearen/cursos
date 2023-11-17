import  numpy as np

arr = np.random.randint(1,20,10) #! Vector 1/10 (f/c) con numero aleatorio ente 1 y 20
print(arr)

matriz = arr.reshape(2,5)
print(matriz)

maximo = arr.max()
print(maximo)

maxMatriz = matriz.max()
print(maxMatriz)

maxMatrizColumnas = matriz.max(0)
print(maxMatrizColumnas)
maxMatrizFilas = matriz.max(1)
print(maxMatrizFilas)

print(arr.argmax()) #! Devuelve el indice donde se encuentra el numero mayor
print(matriz.argmax(0)) #! Devuelve el indice donde se encuentra el numero mayor
print(matriz.argmax(1)) #! Devuelve el indice donde se encuentra el numero mayor

print('------------------')

minimo = arr.min()
print(minimo)
print(matriz.min())
print(matriz.min(0))
print(matriz.min(1))
print(arr.argmin()) #! Devuelve el indice donde se encuentra el numero menor
print(matriz.argmin(0)) #! Devuelve el indice donde se encuentra el numero menor
print(matriz.argmin(1)) #! Devuelve el indice donde se encuentra el numero menor

print('------------------')

lista = np.array([1,2,3,4,5]) #! devuelve la distancia entre el numero menor y el mayor
print(lista.ptp())
print(matriz.ptp())
print(matriz.ptp(0)) #! Dsitancia punto a punto por columnas
print(matriz.ptp(1)) #! Dsitancia punto a punto por filas

print(np.percentile(lista, 64)) #! Valor en referencia un grupo de 100, considetando que percentil 50 es justo la mitad

array = np.arange(1,101)

print(np.percentile(array, 0))

ul = np.array([8,6,2,9,1,5])
ul.sort() #! Ordena la lista de menor a mayor
print(ul)

print(np.median(ul)) #! Devuelve la mediana de la lista, que es igual al percentil 50

print(np.median(matriz))
print(np.median(matriz, 0))
print(np.median(matriz, 1))

print(np.std(arr)) #! Desviasion estandar
print(np.var(arr)) #! Varianza

print(np.mean(arr)) #! Calcula la media, o se el promedio


a = np.array([[1,2],[3,4]])
b = np.array([[5,6],[7,8]])

c = np.concatenate((a,b), axis=0) #!Si concatenamos por eje 0 debemos procurar tener la misma dimensiones en ambos array, de no ser el caso debemos expandir donde sea necesario
print(c)

d = np.concatenate((a,b), axis=1) 
print(d)

x = np.array([[1,2,3],[4,5,6]])
print(x)
print(x.T) #! Transpuesta, invierta las dimesiones
