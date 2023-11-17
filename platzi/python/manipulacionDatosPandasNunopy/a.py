matriz = [[1,2,3],
          [4,5,6],
          [7,8,9],]

for i in range(len(matriz)):
    for j in range(len(matriz[i])):
        print(matriz[i][j])

print('----------------------------------')
for i in range(len(matriz[i])):
    for j in range(len(matriz)):
        print(matriz[j][i])
print('----------------------------------')

for i in range(len(matriz)):
    for j in range(len(matriz[i])):
        if i == j:
            print(matriz[i][j])

print('----------------------------------')

for i in range(len(matriz)): #!solo si la matriz tiene iguales dimesiones en su eje sino hacer doble for
            print(matriz[i][i])

print('----------------------------------')

for i in range(len(matriz)):
        print(matriz[i][len(matriz)-1 -i])  #!solo si la matriz tiene iguales dimesiones en su eje sino hacer doble for


#matriz[i][matriz.length -1 -i]