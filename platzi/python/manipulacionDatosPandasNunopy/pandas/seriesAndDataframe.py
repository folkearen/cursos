import pandas as pd

a = pd.Series(['Navas', 'Mbappe', 'Neymar', 'Messi'],
              index=[1,7,10,30]) #! Puedo adignarle los indice deseados siguiendo el orden ascendente de las listas, o por defecta se les asignara indices desde 0 acendiendo

print(a)
print(a[7]) #! Puedo entrar por su indice asignado
print(a[0:3]) #!Puedo hacer slice y se guiara por sus posiciones no por su indice.

#todo tambien puedo entregar a pd.Series un diccionario como argumento, donde la llave sera el indice y la clave el valor.

dict = {
    'jugador' : ['Navas', 'Mbappe', 'Neymar', 'Messi'],
    'altura' : [170.0, 180.0, 170.0, 160.0 ],
    'Goles' : [30,10,10,100]
}

b = pd.DataFrame(dict) #! un datafranme puede se accedido por indice/filas o por nombre decolumna
print(b)
print(b.index)
print('--------------------------')
b = pd.DataFrame(dict, index=[1,7,10,30])
print(b)

print(b.columns)
print(b.index)