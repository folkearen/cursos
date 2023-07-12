def obtener_poblacion():
    keys = ["col", "bol"]
    values = [300, 400]
    return keys, values


saludo = "Hola mundo!"

def population_by_country(data, country):
    result = list(filter(lambda item: item['country'] == country, data))
    return result


country_info = [
    {'country' :'Colombia',
     'population' : 300
    },
    {'country' :'Bolivia',
     'population' : 400
    }
]