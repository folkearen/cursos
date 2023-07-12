"""map para listas"""

numeros = [1,2,3,4,5,6]

numerosAlCuadrado = map(lambda x : x * 2, numeros)
print(numerosAlCuadrado) #Em crudo no envia directamente una lista sino un objeto map, se debe transformar

listaNumerosAlCuadrado = list(map(lambda x: x * 2, numeros))
print(listaNumerosAlCuadrado)

"""Mapeando con dos listas a la vez"""
num1 = [1,2,3,4]
num2 = [6,7,8]

resultXY = list(map(lambda x, y : x + y, num1, num2))
print(resultXY) #Se queda con el tamanio de la lista mas corta, por tanto el ultimo elemnto de la primera lista no tiene con quien empatar por tanto se omite

"""Mapeo de diccionario"""

prendas = [
    {'articulo': 'Pantalon', 'precio': 12000},
    {'articulo': 'Polera', 'precio': 10000},
    {'articulo': 'Swetter', 'precio': 16000}
]

precios = list(map(lambda item : item['precio'], prendas))
print(precios) #[12000, 10000, 16000]c

def calcularImpuesto(dict):
    dict_copy = dict.copy() #Matiene el array original, crea una copia con direccion en memroia diferentes.
    dict_copy['IVA'] = dict_copy['precio'] * .19
    dict_copy['total'] = dict_copy['precio'] + dict_copy['IVA']
    return dict_copy

con_impuesto = list(map( calcularImpuesto, prendas))
print(con_impuesto)
print(prendas)

"Sort!"

num = [3, 6, 1, 4, 2, 5]
print(num)

num.sort() #Ordena  la lista pero no genera una nueva
print(num)

a = sorted(num) #Genera una  nueva lista por tanto es asignable
print(a)



"""Filter """

pares = list(filter(lambda x : x % 2 == 0, num))
print(pares)

impares = list(filter(lambda x : x % 2 != 0, num))
print(impares)

matches = [
  {
    'home_team': 'Bolivia',
    'away_team': 'Uruguay',
    'home_team_score': 3,
    'away_team_score': 1,
    'home_team_result': 'Win'
  },
  {
    'home_team': 'Brazil',
    'away_team': 'Mexico',
    'home_team_score': 1,
    'away_team_score': 1,
    'home_team_result': 'Draw'
  },
  {
    'home_team': 'Ecuador',
    'away_team': 'Venezuela',
    'home_team_score': 5,
    'away_team_score': 0,
    'home_team_result': 'Win'
  },
]


empates = list(filter(lambda x : x['home_team_result'] == 'Draw', matches))

print(empates)
print('================')
print(matches)


""" reduce"""

import functools
n = [1,2,3,4,5]

sumaTotal = functools.reduce(lambda acc, item : acc + item, n)
print(sumaTotal)

