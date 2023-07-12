import sys #Modulo para interactual con el sistema operativo
print(sys.path)#Me indica la ubicacion del archivo en que stoy trabajando

#['c:\\Users\\alanm\\Desktop\\cursos\\platzi\\python\\intermedioPython', 'C:\\Python311\\python311.zip', 'C:\\Python311\\Lib', 'C:\\Python311\\DLLs', 'C:\\Python311', 'C:\\Python311\\Lib\\site-packages']



import re #Modulo para trabajar con expresiones regulares
text = 'Mi numero de telefono es  9737310, el codigo de pais es 56 y mi numero de la suerta es el 20'
response = re.findall('[0-9]',text) #Le doy como parametro la expresion regular, para que encuentre todo en ese rango de nuneros
print(response)
#['9', '7', '3', '7', '3', '1', '0', '5', '6', '2', '0']

response2 = re.findall('[0-9]+',text) #devuelve los numero agrupados, y no cada uno por separado como em e; ejem anterior
print(response2)
#['9737310', '56', '20']


import time
timestamp = time.time()
print(timestamp)
#1684972315.519725

local = time.localtime()
print(local)
#time.struct_time(tm_year=2023, tm_mon=5, tm_mday=24, tm_hour=19, tm_min=51, tm_sec=55, tm_wday=2, tm_yday=144, tm_isdst=0)

horaL = time.asctime(local)
print(horaL)
#Wed May 24 19:51:55 2023

import collections

num_variados = [1,2,3,1,2,5,6,7,6,5,6,6,7,8,9,8,8,7,9,6,5,3,2,1,4]
cantidad_X_numero = collections.Counter(num_variados)
print(cantidad_X_numero)
#Counter({6: 5, 1: 3, 2: 3, 5: 3, 7: 3, 8: 3, 3: 2, 9: 2, 4: 1})