import module

keys, values =  module.obtener_poblacion() #Invoco a la funcion del modulo importada, y como devuelve una tupla con dos listas la desepaquto

print(keys)
print(values)

print(module.saludo)

dato = module.population_by_country(module.country_info, "Colombia")
print(dato)
