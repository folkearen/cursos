import csv


def read_csv(path):
    
    with open(path, 'r') as csv_file:
        reader = csv.reader(csv_file, delimiter = ',') #Delimiter es donde se separan los datos, la myoria de los csv separan los datos con "," pero algunos lo hace con ";", ver el archivo para determinar
        header = next(reader) #Itero la primera linea para extraer el nombre de las columnas
        population_data_country = []
        for row in reader:
            iterable = zip(header, row) #El zip creara un tupla con cada valor del header acompanado por cada valor de row segun indice, cada row es una fila = linea de csv
            country_dict = {key : value for key, value in iterable}
            population_data_country.append(country_dict)
    print(len(population_data_country))
    return population_data_country

if __name__ == '__main__': #El entry point sirve para utilizar el archivo .py tanto como un modulo para alimentar el script principal, como un script en si mismo
    data = read_csv('./world_population.csv')
    print(data[0])
    
