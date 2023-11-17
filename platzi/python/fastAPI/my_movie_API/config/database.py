import os
from sqlalchemy import create_engine
from sqlalchemy.orm.session import sessionmaker
from sqlalchemy.ext.declarative import declarative_base



sqlite_file_name = '../database.sqlite'
base_dir = os.path.dirname(os.path.realpath(__file__)) #!Estamnos indicando que la ruta es la de este archivo.

database_url = f'sqlite:///{os.path.join(base_dir, sqlite_file_name)}'

engine = create_engine(database_url, echo=True)

Session = sessionmaker(bind=engine)

Base = declarative_base()

#todo ====> Para conectar con Postgress
'''
//pip install psycopg2
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL="postgresql+psycopg2://user:pasword@localhost:5432/database_name"

engine = create_engine(DATABASE_URL, echo=True)

Session = sessionmaker(bind=engine)
Base = declarative_base()
'''