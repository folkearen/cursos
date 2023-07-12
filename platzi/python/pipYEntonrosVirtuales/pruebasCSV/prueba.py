import pandas as pd

df = pd.read_csv('data.csv') #df =data frame

df = df[df['Country'] == 'Chile'] #esto es igual a  data = list(filter(lambda item : item['Continent'] == 'South America',data))
codigo = df['CCA3']
pais = df['Country']
capital = df['Capital']
print(f'{codigo} - {pais} - {capital}')

# countries = df['Country']
# print(countries)
