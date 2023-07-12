//En resumen
var fruit = 'Apple' //Declarar y asinar
fruit = 'Banana' // Reasignar
var fruit = 'Orange' // Redeclarar y reasignar
console.log(fruit)

let animals = "Dog" //Declarar y asignar
animals = 'Cat'//Reasigno
// let animal = "Bird" no se puede Redeclarar variables de tipo Let
console.log(animals)

const cars = 'Toyota'
console.log(cars)
// cars = 'Chevrolet' Al ser constante no se puede reasignar
// const cars = 'Citroen' menos redeclarar

const colors = []
colors.push('Red')
colors.push('Blue')
console.log(colors)
colors.pop()
console.log(colors)
//Si bien colors es una constante y no podemos reasginarlo, los array son mutables
//por tanto trabamos sobre el elemento array y no sobre la variable en si,
//Por tanto puede modificarse agregando y quitando elementos.
//--------------------------------------------------------------------

var lastname; //declara la variable
var firstName = 'Alan'; //declara e inicializa la variable
firstName = 'Alanbrito'; //reinicializa la vvariable
console.log(firstName)

let fruit = 'Cereza'; //delcaracion  y inicializa
fruit = 'Kiwi'; //reinicializacion
console.log(fruit)

const animal = 'Gato';  //delcaracion  y inicializa
animal = 'Perro'; // al ser una constante no se puede modificar su valor asignado, por tanto no puede ser reinicializada.

const verduras = () => {
    let animal10 = 'Perro'
    if(true) {
        var verdura = 'Espinaca'; //function scope, se puede llamar desde todo los bloques dentro de la funcion.
        let verdura2 = 'Zapallo';//Block scope, solo pueden ser llamada desde el mismo bloque done fueron declaradas
        const verdura3 ='Papa'
        animal10 = 'Gato'
        if(true) {
            console.log(verdura2)
        }

        
    }
    console.log(animal10)
    console.log(verdura);
    console.log(verdura2);
    console.log(verdura3);
}
verduras()


