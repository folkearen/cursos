num = [1,2,3,4,5,6,7,8,9,10]
par = []
let a = num.map((n)=> !(n % 2) ? par.push(n) : false )

console.log(par)

let comprobarPar2 = (num) => { return num % 2 ? "Impar" : "Par"}