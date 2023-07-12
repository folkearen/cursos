//Es lo contario a some, comprueba que TODOS los elementos cumplan con la condicion dada, devolviendo true o false.

let par = [2,4,6,8]
let impar = [1,3,5,7]
let num = [1,2,3,4]
let a = ['a', 'a', 'a']
let letters =  ['a', 'b','c']

console.log(par.every(item => item  % 2 === 0)) //Compureba si Todos son pares. EL caso es true
console.log(impar.every(item => item  % 2 === 0))// Compureba si todos son pares. el caso es false
console.log(num.every(item => item  % 2 != 0))// Compureba si todos son impares. el caso es false, hay mezcla

console.log(`

reto
______________
`)
//Reto

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 12,
    },
  ];

const comprobarMenorA15 = team.every(item => item.age < 15);
console.log(comprobarMenorA15)