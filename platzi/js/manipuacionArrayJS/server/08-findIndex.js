// Devuelve el indice del primer elemento que cumpla la condicion, si no existe devuelve -1

let numbers = [12,45,67,30,90];

let probandoFindIdex = numbers.findIndex(item => item === 30);
let probandoFindIdex2 = numbers.findIndex(item => item === 10);

console.log(probandoFindIdex)
console.log(probandoFindIdex2)