from flask import Flask, request, make_response, redirect, render_template, session
from flask_wtf import FlaskForm
from wtforms.fields import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired
app = Flask('__name__')
app.config['SECRET_KEY'] = 'SUPER SECRETO   `   '
todos = ['todo1', 'todo2', 'todo3']

class LoginForm(FlaskForm):
    username = StringField('Nombre de usuario', validators=[DataRequired()])
    password = PasswordField('Contraseña', validators=[DataRequired()])
    submit = SubmitField('Enviar')

@app.errorhandler(404)
def not_found(error):
    return render_template('404.html', error=error)


@app.route('/')
def index():
    user_ip = request.remote_addr
    response = make_response(redirect('/hello'))
    session['user_ip'] = user_ip
    return response

@app.route('/hello')
def hello():
    user_ip = session.get('user_ip')
    login_form = LoginForm()
    context = {
        'user_ip' : user_ip,
        'todos' : todos,
        'login_form' : login_form
    }
    return render_template('hello.html', **locals(),**globals())
    #! Puedo pasele tanto las variable locales y globales como contexto a la funcion
    #* O crear un diccionario dentro de la funcion con las varibale locales y globales y este pasarlo como context
    #todo Pero siempre se ha de pasar en formato **kwars


#flask run  -> arranca al app
# set FLASK_APP=main.py variable de la aplicacion
# set FLASK_DEBUG=1 para activar el modo debug

# Tambien podri enviar variables de este Modo 
# if __name__ == '__main__':
#     app.run(port = 5000, debug = True)