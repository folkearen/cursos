const juan = {
    name: 'Juanito',
    age: 35,
    approvedCourse: ['Curso 1'],

    addCourse(newCourse) {
        this.approvedCourse.push(newCourse);
    }
};


//Object es super prototipo de js el padre de todos los prototipos

// console.log(Object.keys(juan))
// console.log(Object.getOwnPropertyNames(juan))
// console.log(Object.entries(juan))
// console.log(Object.getOwnPropertyDescriptors(juan))

//Crear y editar propiedades de objetos mucho mas amplia y compleja
//Las propiedades creada de esta forma tampoco aparecen en los atajos que va ofreciendo el editor.


Object.defineProperty(juan, 'navigator', {
    value: 'Chrome',
    enumerable: false, 
    //Impide por ejemplo, que aprezca en listados como la de Object.keys(), pero si en getOwnPropertyNames, tampoco apareceran en un console.log()
    writable: true,
    configurable: true
})

Object.defineProperty(juan, 'editor', {
    value: 'VSCode',
    enumerable: true,
    writable:false,
    //En false impide reescribir el valor asignado
    configurable: true
})

Object.defineProperty(juan, 'terminal', {
    value: 'WSL',
    enumerable: true,
    writable:false,
    configurable:false
    //Impide que la pripiedad sea eliminada 
})

Object.defineProperty(juan, "pruebaNasa", { //Recibe tres parametros el abjeto a editar, el nombre de la propiedad, y un objeto lteral con su valor y otras propiedades
    value: 'extraterrestres',
    enumerable: false,
    writable: false,
    configurable: false
})

const maria = {
    name: 'Maria',
    age: 54,
    email: 'example@domain.com'
}

console.log(Object.getOwnPropertyDescriptors(maria))

Object.seal(maria)
//Cambia el valor de configurble de todas los elemtnos a false, evitando que se puedan borrar
console.log(Object.getOwnPropertyDescriptors(maria))

Object.freeze(maria)
//Cambia el valor de configurble y writable de todas los elemtnos a false, evitando que se puedan borrar o renombrar(editar, sobreescribirr`)
console.log(Object.getOwnPropertyDescriptors(maria))



//Tambien se puede aplicar a instancias d clase.
class user{
    constructor({
        name,
        username,
        email,
    }){
        this.name = name;
        this.username = username;
        this.email = email;
    }
}

const alan = new user({
    name: 'Alan',
    username: 'almubadev',
    email: 'almubadev@gmail.com'
})

console.log(alan)
console.log(Object.getOwnPropertyDescriptors(alan))
Object.freeze(alan)
console.log(Object.getOwnPropertyDescriptors(alan))


