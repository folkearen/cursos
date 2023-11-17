from fastapi import APIRouter, Path, Query, Depends
from fastapi.responses import  JSONResponse
from fastapi.encoders import jsonable_encoder

from typing import List
from config.database import Session
from middlewares.jwt_bearer import JWTBearer
from services.movie import MovieService
from schemas.movie import Movie
from models.movie import Movie as MovieModel

movie_router = APIRouter()


#todo ====> Metodo Get
@movie_router.get('/movies', tags=['movies'], response_model=List[Movie], status_code=200, dependencies=[Depends(JWTBearer())])
def get_movies() -> List[Movie]:
    db = Session()
    result = MovieService(db).get_movies()
    return JSONResponse(status_code=200, content=jsonable_encoder(result))

@movie_router.get('/movies/{id}', tags=['movies'], response_model=Movie,)
def get_movies(id:int = Path(ge=1, le=2000)) -> Movie:#!Con Path valido parametros, en este caso que el id sea mayor a 1 pero menor a 2000
        db = Session()
        result = MovieService(db).get_movies(id)
        if not result:
            return JSONResponse(status_code=404, content={'message': 'No encontrado'})
        
        return JSONResponse(status_code=200, content=jsonable_encoder(result))
    

#!Parametro Query, no es necesario pasarcelo a la ruta, solo a la funcion, permite ampliar nuestras busquedas
@movie_router.get('/movies/', tags=['movies'],response_model=List[Movie],status_code=200)
def get_movies(category:str = Query(min_length=4, max_length=15), year: int = Query(le=2023)) -> List[Movie]: #!Estos se veran en el path del navegador
    db = Session()
    result = MovieService(db).get_movies_category_and_year(category, year)
    return JSONResponse(status_code=200, content=jsonable_encoder(result))

#todo====> Metodo POST
@movie_router.post('/movies', tags=['movies'], response_model=dict, status_code=201)
def create_movie(movie: Movie) -> dict:
    db = Session()
    new_movie = MovieModel(**movie.model_dump())
    db.add(new_movie)
    db.commit()
    return JSONResponse(status_code=200, content={
         'message': 'Pelicula Registrada con exito'
    })

#todo =====> Metodo PUT
@movie_router.put('/movies/{id}', tags=['movies'], response_model=dict, status_code=200)
def update_movie(id: int, movie: Movie) -> dict: #!Dejo el parametro id porque lo encesito para la cosnulta
    db = Session()
    result = db.query(MovieModel).filter(MovieModel.id == id).first()
    if not result:
        return JSONResponse(status_code=404, content={'message':'No encontrado'}) 
    result.title = movie.title
    result.overview = movie.overview
    result.year = movie.year
    result.rating = movie.rating
    result.category = movie.category
    db.comit()
    return  JSONResponse(status_code=200,content={'message': 'Pelicula modificada con exito'})

#todo ======> Metodo delete
@movie_router.delete('/movies/{id}', tags=['movies'], response_model=dict, status_code=200)
def delete_movies(id:int) -> dict:
    db = Session()
    result = db.query(MovieModel).filter(MovieModel.id == id).first()
    if not result:
        return JSONResponse(status_code=404, content={'message': 'No encontrado'})
    db.delete(result)
    db.commit()
    return JSONResponse( status_code=200, content={'message': 'Pelicula Eliminada'})