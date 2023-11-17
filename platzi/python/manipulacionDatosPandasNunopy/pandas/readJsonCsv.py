import pandas as pd

rcsv = pd.read_csv('./bestsellers-with-categories_e591527f-ae45-4fa5-b0d1-d50142128fa6.csv')
print(rcsv)

rjson = pd.read_json('./hpcharactersdataraw.json')
print(rjson)
