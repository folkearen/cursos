from fastapi import FastAPI
from fastapi.responses import HTMLResponse
app = FastAPI()

@app.get('/')
def get_list():
    return [1,2,3]

@app.get('/contact', response_class=HTMLResponse)
def get_list():
    return """
        <h1>Soy una pagina web</h1>
        <p>Coqueta</p>
    """
