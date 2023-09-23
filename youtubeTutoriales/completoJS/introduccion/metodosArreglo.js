const colores = ['Rojo', 'Verde', 'Azul']

console.log(colores)

// Length conocer la longitud del arreglo

console.log(colores.length)

// toString() convierte un arrreglo en una cadena de texto

console.log(colores.toString())

// join transforma el array a una cada de texto pero esta vez indicando con que simbolo se separa los elemntos

console.log(colores.join('|'))

// sort ordena los elemntos por orden alfabetico
const letras = ['c', 'u', 'm', 'z', 'j']

console.log(letras.sort())
//todo: tambien funciona con numeros
console.log(letras) // ! ====> El array original ha sido modificad


// reverse invierte el orden del array colocando el ultimo elemnto como el primero y asi sucesivamente.

const numeros = [2,4,1,3,5]
console.log(letras.reverse())
console.log(numeros.reverse())


// concat Nos permita juntar dos arreglos en uno

const num = [1,2,3]
const char = ['a', 'b', 'c']
const charnum = num.concat(char)

console.log(num)
console.log(char)
console.log(charnum)

// push Agrega un elemnto al final de areglo

 char.push('r')
 console.log(char)
 colores.push('Amarillo')
 console.log(colores)

 // pop elmina el ultimo elemnto de un array
 colores.pop()
 console.log(colores)
 
 //* shift elmina el primer elemento,  y luego corre los otros elemntos en el espacio de memoria
 const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
 console.log(dias)
 const diaEliminado = dias.shift() //todo Devuelve el elemento por tanto podemos asignaro a una funcion
 console.log(dias)
 console.log(diaEliminado)

let a = [1,2,3]
delete a[0] // ! al ser un objeto puedo utilizar el metodo delete, pero no movera el resto de los elemntos de su posicion generando un espacio vacio
console.log(a) //!Arroja ====> [ <1 empty item>, 2, 3 ]

// unshift agrrega un elemnto al inicio
dias.unshift('Enero')
console.log(dias)

// splice  permite agregar elementos al array en un lugar especifico
//* 1er parametro : posicion donde queremos comenzar a insertar los elemntos
//* 2do parametro : si queremos eliminar elementos desde la posicion indicada
//* Resto de paarametros: los elemntos que deseamos insertar

const amigos = ['Alejandro', 'Cesar', 'Manuel']
amigos.splice(1, 2, 'Rafael', 'Antonio' )
/*
! Se le como: 
! amigos.splice(
!   1 desde la posicion 1 (inclusive)
!   2 elimina dos elemntos
!   y desde la misma posicion 1(inclusive) agregame estos elementos    
!) La eliminacion de elemntos es opcional asi como el agreganuevos elemntos, de no quere eliminar elemntos indicar con 0
*/

console.log(amigos)
amigos.splice(1, 0,'Sol', 'Maria')
console.log(amigos)

amigos.splice(1,2)
console.log(amigos)


//slice Nos permite copiar parte de un arreglo a otro
    // 1er parametro: Posicion desde donde quiero copiar
    // 2do parametro: Hasta antes de que elemnto copiar

const frutas = ['Fresa', 'Manzana', 'Uva', 'Pina', 'Mango', 'Naranja', 'Melon']

const frutasFavoritas = frutas.slice(1,5)
console.log(frutasFavoritas)

/* 
Index of devuelve el primer index del elemento buscado, si no existe el elemento devuelve -1 */
const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Sara', 'Diana']
console.log(nombres.indexOf('Estefania'))
console.log(nombres.indexOf('Rafael'))
console.log(nombres.indexOf('Alan'))

// lastIndexOF Obtiene el ultimo imdex de un elemnto.
// !Obtiene ambos indices pero solo devuelve el primero
console.log(nombres.lastIndexOf('Rafael'))

// forEach() Recorre el array y permite ejecutar un funcion por cada elemento del array

nombres.forEach(nombre => console.log(`Hola ${nombre}`));
nombres.forEach((nombre, index) => console.log(`Hola ${nombre} ${index} `)); //!El segundo elemento de la funcion dentro del forEach hace referencia al indice del elemento a recorrer, independiente del nombre que se le de o que coincida con una variable global
//! el retorno de forEach se puede asignar a una variable

// find  Recorrer el arreglo y devuelve el primer elemento que cumpla la condicion dada por la funcion
// !Solo devuelve un elemento el primero
//const estefania = 
const estefania =nombres.find(nombre => {
    return nombre.startsWith('E')
})
console.log(estefania)


// map recorre el array y ejecuta la funcion por cada elemento, devolviendo otro array con el resutado de esos elementos luego de aplicar la funcion

const nombreMayuscula = nombres.map(nombre => nombre.toUpperCase())
console.log(nombreMayuscula)

// filter devuelve un array con Todos los resultados que cumplan la condicion
const losCuatroLetras = nombres.filter(nombre => nombre.length == 4)
console.log(losCuatroLetras)

// imclude permite saber si un array contiene un lemento especifico, devolviendo true o false

console.log(nombres.includes('Sara'))
console.log(nombres.includes('Alan'))


// every comprueba si todos los elementos del array cumplen cierta condicion, devolviendo true o false

console.log(nombres.every(nombre => typeof nombre === 'string')) // !Devuelve true por que todos son string
console.log(nombres.every(nombre =>  nombre.startsWith('E'))) // !Deuvleve false por que no todos comienzan con 'E'

// some devuelve true si al menos uno de los elementos cumple la condicion 
console.log(nombres.some(nombre =>  nombre.startsWith('E'))) // !Devuleve true por al menos un elemento comienza con 'E'