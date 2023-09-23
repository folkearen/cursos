const usuario = {
    nombre: 'Carlos',
    edad : 27,
    amigos : ['Alejandro', 'Cesar', 'Manuel'],
    saludo: () => {
        console.log('Olis')
    }
}

// Metodos propios, los objetos puede tener metodos personalizados como saludo()
usuario.saludo()

//Metodos de JS para objetos

// Object.keys() devuelve un array con todas las llaves del objeto
console.log(Object.keys(usuario))

//Object.values() devuelve un array con los valores de cada llave de un objeto
console.log(Object.values(usuario))

//Object.entries  Devuelve una array donde cada paraeja se devuelve dentro de un array, siendo el index 0 la llave y el index 1 el valor
console.log(Object.entries(usuario))

console.log(`El objeto usuario tiene ${Object.entries(usuario).length} elementos`)