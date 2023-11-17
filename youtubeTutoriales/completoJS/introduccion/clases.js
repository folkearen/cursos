//Estructura de un clase
//definicion
//propiedades, son variables pero dentro de una clase reciben ese nombre
//Constructor, Es un metodo especual para inicializar un objeto creado a partir de una clase.
//Metodo, las clases pueden contener funciones, en el contexto de clase reciben el nombre de metodos.

class Usuario {
    tipo = 'usuario'
    
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    obtenerBNombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}

const usuario = new Usuario('Alan', 'Munoz');
console.log(usuario)
console.log(usuario.obtenerBNombreCompleto())

