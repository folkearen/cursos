from django import forms 

class CommentForm(forms.Form):
    name = forms.CharField(label='Escribe tu nombre', max_length=100, help_text='100 caracteres maximo')
    url = forms.URLField(label='Tu sitio web', required=False, initial='http://')
    comment = forms.CharField()


class ContactForm(forms.Form):
    name = forms.CharField(label='Nombre', 
                           max_length=50, 
                           required=False,
                           widget= forms.TextInput(
                               attrs={
                                   'class': 'input'
                                   #Incluso podria colocar clases de boostrap
                               }
                           ))
    
    email = forms.EmailField(label='Email', max_length=50, required=False)
    message = forms.CharField(label='Dejanos tu comentario', max_length=200, required=False)

    #Validaciones extras
    def clean_name(self):
        name = self.cleaned_data.get('name')
        if name != 'Alan':
            raise forms.ValidationError('Solo Alan permitido')
        else:
            return name
