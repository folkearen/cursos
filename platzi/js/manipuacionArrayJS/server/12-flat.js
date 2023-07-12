//Recorre matrices y las convierte en un solo array

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9,[1,2]]];

let newArray = []
for(let i = 0; i < matriz.length; i++){
    let element = matriz[i];
    for(let j = 0; j < matriz.length; j++){
        let item = matriz[i][j];
        newArray.push(item)
    }
} //habria que hacer un for por cada nivel de array... es mejor utilizar recursion,,, ver mas abajo

console.log(newArray)
let aplanar = matriz.flat()//Une los array detnro de array, sin embargo si hay mas de un nivel, se debe indicar la cantidad de niveles entre los parentesis
console.log(aplanar)





// const matriz = [
//     1,
//     [1,2,3],
//     [4,5,6],
//     [7,8,[9,10,[11,12]]]
// ];





// const flatArray = (arr = [], data = []) => {
//     if(typeof arr !== 'object') return [arr];
//     arr.forEach(element => {
//         if (typeof element === 'object') {
//             flatArray(element, data);
//         } else {
//             data.push(element);
//         }
//     });
//     return data;
// }
// console.log(flatArray(matriz));
// Salida:

// /*
// [
//    1, 1, 2, 3,  4,  5,
//    6, 7, 8, 9, 10, 11,
//   12
// ]
// */
