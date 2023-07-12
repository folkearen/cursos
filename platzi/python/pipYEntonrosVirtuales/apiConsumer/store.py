import requests

def get_categ0ries():
    r = requests.get('https://api.escuelajs.co/api/v1/categories')
    print(r.status_code)
    print(r.text) #Devuelve la informacion en un string json
    print(type(r.text))
    categories = r.json() #Lo convierto a json para poder recorrerlo como una lista de diccionarios
    print(type(categories))
    for category in categories:
        print(f'{category["id"]} - {category["name"]} - {category["image"]}')