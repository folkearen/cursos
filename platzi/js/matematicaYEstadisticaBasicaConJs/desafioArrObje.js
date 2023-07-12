// En este desafío debes convertir las llaves y valores de un objeto en propiedades (id y name) de un objeto dentro de un array.
// Input
// const obj = {
//   123: 'Juanito Alcachofa',
//   456: 'Juanita Alcaparra',
// };
// solution(obj);
// Output
// [
//   {
//     id: "123",
//     name: 'Juanito Alcachofa',
//   },
//   {
//     id: "456",
//     name: 'Juanita Alcaparra',
//   },
// ]

function solution(obj) {
    let arr = Object.entries(obj)
    let arrObj = []
    for (let element of arr) {
        arrObj.push({id : element[0], name : element[1]})
    }
    return arrObj
}

const solution2 = obj => Object.entries(obj).map(value => {return {id: value[0], name:value[1]}}) //Solucion abreviada con fucion

console.log(solution({  123: 'Juanito Alcachofa', 456: 'Juanita Alcaparra'}))
console.log(solution2({  123: 'Juanito Alcachofa', 456: 'Juanita Alcaparra'}))
console.log('------------------------------------------------------')
console.log(Object.entries({  123: 'Juanito Alcachofa', 456: 'Juanita Alcaparra'}).map(value => {return {id: value[0], name:value[1]}}) )
//Abreviada sin funcion paso directo de datos, solo por jugar; XD