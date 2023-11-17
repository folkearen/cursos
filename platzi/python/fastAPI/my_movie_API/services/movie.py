from models.movie import Movie as MovieModel

class MovieService():
    def __init__(self, db) -> None:
        self.db = db
    
    def get_movies(self):
        result = self.db.query(MovieModel).all()
        return result
    
    def get_movies_id(self, id):
        result = self.db.query(MovieModel).filter(MovieModel.id == id)
        return result

    def get_movies_category_and_year(self, category, year):
        result = self.db.query(MovieModel).filter(MovieModel.category == category and MovieModel.year == year)
        return result