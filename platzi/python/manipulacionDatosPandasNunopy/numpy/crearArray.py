import numpy as np

arr = np.arange(1,10) #! Al igual que range de py, obvia el numero final designado para el rango
print(arr)
arr2 = np.arange(0,20,2) #!Tambien puedo dar salto entre numero, en este caso de 2 en 2
print(arr2)

arr3 = np.zeros(3) #! Crea vectores y matrices con cero flotantes, para asi despus trabajrla o llenar x coordenada
print(arr3)
arr4 = np.zeros((10,10)) #! Para crear matices se pasa las dimesiones como tuplas
print(arr4)
arr5 = np.zeros((3,3,3)) #! Para crear matices se pasa las dimesiones como tuplas
print(arr5)

arr6 = np.ones((3,3)) #! Rellena con unos la matriz
print(arr6)

arr7 = np.linspace(0,10,20) #!Crea un vector con un rango desde (numero inicio, numero final, cantidad de datos a generar) 
print(arr7)

arr8 = np.eye(4) #! devuelve una matriz con la digonal en 1 y el resto en ceros
print(arr8)

arr9 = np.random.rand() #! sin argumentos devuelve un numero aleatorio entre 0 y 1
print(arr9)

arr10 = np.random.rand(4) #! con un argumento devuelve un vector con 4 numeros aleatorios entre 0 y 1, devuelve 4 columnas
print(arr10)

arr11 = np.random.rand(4,4) #! devuelve una matriz de 4 x 4, cada fila tendra cuatro datos(columnas) con numeros entre 0 y 1 
print(arr11)

arr12 = np.random.randint(1,10) #! Devuelve un numero random entre 1 y 10
print(arr12)

arr13 = np.random.randint(1,10, (5,5)) #! aplica los numeros rando a una estrucutra matrcial en este caso de 5X5
print(arr13)