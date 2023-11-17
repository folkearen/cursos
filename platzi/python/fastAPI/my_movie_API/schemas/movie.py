from pydantic import BaseModel, Field
from typing import Optional

class Movie(BaseModel):
    # id: int | None = None una forma de indicar que es opcional el parametro
    id : Optional[int] = None #!Otra forma de indicar opcion
    title: str = Field(min_length=5, max_length=15)
    # title: str = Field(default='Sin titulo', min_length=5, max_length=15) #!Puedo usa el parametro default para agregar valores por defacto a cada campo
    overview: str
    year: int = Field(le=2023) #! le menor que
    rating: float 
    category: str 

    #! Puedo crear un esqueme por defecto predeterminado
    class Config:
        json_schema_extra = {
            "example": {
                'id': 1,
                "title": "Titulo de la pelicula",
                "overview": "Resena de la pelicula",
                "year": 2023,
                "rating": 8.2,
                "category": "Todas"
            }
        }
