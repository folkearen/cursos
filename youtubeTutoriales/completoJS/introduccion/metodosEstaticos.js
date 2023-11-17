class Usuario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }
    static borrarUsuario(id_usuario){ //Se encapsula el metodo como estatuico
        console.log(`Usuario ${id_usuario} ha sido borrado`)
    }
    static registrados = 1000;
}

// const usuario1 = new Usuario('Alan', 'alan@example.com')
// usuario1.borrarUsuario(1) //Esto no esta bien, no debiese crear un usuario para borrar otro.

Usuario.borrarUsuario(1)
console.log(Usuario.registrados)