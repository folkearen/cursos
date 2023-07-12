

let course = ['curso 1', 'curso 2', 'curso 3'];

console.log(course)

course.splice(0, 1, 'newCurse') // (indice de donde se comiezara el splice, cantidad de elemntos a eliminar a partir de ese indice, elemento a incertar en dicha posicion 'Inicial)
console.log(course)

course.splice(2, 0, 'lala') //Si indico cero no eliminara elementos solo agregara en dicha posicion inical
console.log(course)

course.splice(4, 0, 'sol') 
console.log(course)

course.splice(8, 0, 'aaaaaaaaaa!')  //Si se excede la cantidad de indices del array, el elemnto se agregara al final
console.log(course)
