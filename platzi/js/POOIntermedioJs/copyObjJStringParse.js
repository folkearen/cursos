//nested objects  objeto dentro de un objeto
const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e'
    }
};

const stringifiedComplexObj = JSON.stringify(obj1); //Convierto obj1 en un string lo almaceno en la variable
const obj2 = JSON.parse(stringifiedComplexObj)//transformo el String con sintaxis de objeto, un objeto y los asigno a la variable

console.log(obj1)
console.log(obj2)

obj1.a = "AAAAAAAAAA" //Modificacion no afecta a obj2
obj2.b = "BBBBBBBBBB"//Modificacion no afecta a obj1
console.log(obj1)
console.log(obj2)

obj1.c.d = "DDDDDDDDDDD"
obj2.c.e = "EEEEEEEEEEE"
//SOLUCIONADO Si modifico un obj literal dentro del obj literal no se afectan los unos a los otros
console.log(obj1)
console.log(obj2)

console.log("______________")

const user1 = {
    name: 'Alan',
    username: 'almuba',
    permisos: {
        admin: 'A1',
        Assos: 'C3'
    }
}

const user2 = JSON.parse(JSON.stringify(user1)) //Funciona al 100%

console.log(user1)
console.log(user2)

user2.name = 'Sipo oe'
user2.permisos.admin = "0" 

console.log("______________")


console.log(user1)
console.log(user2)

//OJO JSON.stringify / pase, no entienden de metodos, por tanto si nuestro obj principal tiene un metodo, este no se copiara al otro obj
 