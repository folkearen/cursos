//Permite crear clases tomando las propiedades y metodos de otra clase


class Usuario {
    constructor(usuario, password) {
        this.usuario = usuario
        this.password = password
    }
    obtenerPosts(){
        const post = ['post1', 'post2']
        return post
    }
}

class Moderador extends Usuario {
    constructor(nombre, apellido, permisos) {
        super(nombre, apellido)
        this.permisos = permisos
    }
    borrarPost(id){
        if(this.permisos.includes('borrar')){
            console.log(`Se ha borrado el post con el id ${id}`)
        }else {
            console.log('No tiene los permisos para borrar post')
        }
    }

}


const usuario1 = new Usuario('Alan', '1234')
console.log(usuario1.usuario, usuario1.password)
console.log(usuario1.obtenerPosts())



const usuario2 = new Moderador('Pascal', '6789',['borrar', 'editar'])
console.log(usuario2.usuario, usuario2.password)
console.log(usuario2.permisos)
console.log(usuario2.obtenerPosts())
usuario2.borrarPost(6)

