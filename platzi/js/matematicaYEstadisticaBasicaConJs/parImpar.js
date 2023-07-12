let num = [1,2,3,4,5,6,7,8,9,10]
let par = []
let impar = []

let esPar = (num) => {
    for (let n of num) {
        if (n % 2) { 
            impar.push(n)
        }else {
            par.push(n)
        }
    }
}
esPar(num)
console.log(par)
console.log(impar)
 //Otra forma de encontrar pares e impares, en vez del condicional  n % == 0 true o false, se maneja con el resultado de la operacio
 //este resultado de n % 2 dara 0 si es par y 1 si es impar, pero como estoy aplicando directamente el resultado sin comparacion
 //debo invertir la logica n % 2 si da 0 (es false) y si da 1 (es true) por tanto si no se cumple la condicion, es faksa i sea cero
 //salta el if y ejecuta el else, pero si es verdadero, osea 1 ejecuta el if. SE INVIERTA LA LOGICA, tambien puedo mantener la logica 
 //regular negando la condicion del if (!(2 % 0)) seria traducido como no cero entonces seria 1 por tanto ejecutaria la logica del if
 // y temndria que anadir a par y en el else impar. 
