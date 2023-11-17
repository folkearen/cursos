from flask import Flask, request, make_response, redirect, render_template, session, url_for, flash
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms.fields import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired
import unittest 


app = Flask('_name_')
bootstrap = Bootstrap(app)
app.config['SECRET_KEY'] = 'CLAVE SEGURA'


class LoginForm(FlaskForm):
    username = StringField('Nombre de Usuario', validators=[DataRequired()])
    password = PasswordField('Contraseña', validators=[DataRequired()])
    submit = SubmitField('Enviar')


@app.cli.command()
def test():
    tests = unittest.TestLoader().discover("tests")
    unittest.TextTestRunner().run(tests)

@app.route('/')
def index():
    user_ip_information = request.remote_addr
    response = make_response(redirect('/show_information_address')) #!aqui se crea el objeto redirtect pero no se ejecuta
    # response.set_cookie('user_ip_information', user_ip_information) #todo ====> Anada la informacion de la ip a la cookies, para luego solicitarla, una vez redireccionado
    session['user_ip_information'] = user_ip_information
    return response #!Se ejecuta la redireccion
    # return f'Hola usuario, tu ip es {user_ip_information}'
    #return redirect(url_for('show_information_ip'))

@app.errorhandler(404)
def not_found_page(error):
    return render_template('404.html', error=error)

@app.route('/show_information_address', methods=['GET', 'POST'])
def show_information_ip():
    item = ['item1', 'item2', 'item3']
    user_ip = session.get('user_ip_information')
    username = session.get('username')
    login_form = LoginForm()
    contexto = {
        'user_ip' : user_ip,
        'item' : item,
        'login_form': login_form,
        'username' : username
    } 
    if login_form.validate_on_submit():
        username = login_form.username.data
        session['username'] = username
        flash('Nombre de usuario registrado correctamente')
        return redirect(url_for('index'))
    return render_template("ip_information.html", **contexto)

#    return render_template('hello.html', **locals(),**globals())
#     #! Puedo pasele tanto las variable locales y globales como contexto a la funcion
#     #* O crear un diccionario dentro de la funcion con las varibale locales y globales y este pasarlo como context
#     #todo Pero siempre se ha de pasar en formato **kwars


if __name__== '__main__':
    app.run(host='0.0.0.0', port=81, debug=True)