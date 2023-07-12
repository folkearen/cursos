dict = {}

for i in range(1,5):
    dict[i] = i * 2

print(dict)

dict_v2 = {i: i*2 for i in range(1,5)}
print(dict_v2)

paises = ['Chile', 'Mexico', 'Argentina']
condigoPais = ['CL', 'MX', 'ARG']

dict_paises = {paises[i]: condigoPais[i] for i in range(0,len(paises))}
print(dict_paises)


import random
# version larga
# population_for_country = {}
# for pais in paises:
#     population_for_country[pais] = random.randint(1000, 1000000)

population_for_country = {pais : random.randint(1000, 1000000) for pais in paises}
print(population_for_country)


#Con zip
nombre  = ["Alan", "Maria", "Julio"]
edad = [34, 60, 65]

dict_nombre_edades = {name : age for (name, age) in zip(nombre, edad)}
print(dict_nombre_edades)

# dict_else = {name:age   for(name, age) in zip(nombre,edad)if age % 2 == 0}
# print(dict_else)

#DicCompr con condicional a partir de otro dicionario

terceraEdad ={name:edad for (name, edad) in dict_nombre_edades.items() if edad >= 60}
print(terceraEdad)

text = "Hola mundo uijuuuuuuuuuuuuuuuu!"

dict_text = {c : c.upper() for c in text}
print(dict_text)

dict_text2 = {c : c.upper() for c in text if c in 'aeiouAEIOU'}
print(dict_text2)#Solo concidera una vez cada caracter ya que los dict no repiten claves

dict_text_conteo = {c : text.count(c) for c in text}
print(dict_text_conteo)

