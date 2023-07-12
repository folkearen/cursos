//Join Transfor los elemntos de un array en un string, indicando por donde han de separarse.
//Split separa los elementos de una cadena, la separacion se hace un un elemntoc String  que indiquemos, y los elemntos cortados son almacenados de forma independientes en un array. consideta un corte antes y despues del elemnto indicado, el elemnto indicado como corte desapareced
let elements = ["Aire", "Agua", "Fuego", "Tierra"];

console.log(elements)

let avatar = "";
let separador = "--";

for(let i = 0; i < elements.length; i++) {
    if(elements[i] === elements[elements.length -1]) {
        avatar += elements[i];
        break
    }
    avatar+= elements[i] + separador;
}

console.log(avatar)

let probandoJoin = elements.join('--')
console.log(probandoJoin)

let probandoSplit = probandoJoin.split("--");

console.log(probandoSplit)

let a = "Hola mundo esto es JavaScript"
let b = a.replace(' ', '-') // Solo reemplaza el primer elemnto que encuentra, habria que ciclar para remplazar todos.Metodo solo de string
//let c = a.replaceAll(' ', '-') // reemplaza todos los caracteres de ua vez, pero funciona desde node version 15

console.log(a)
console.log(b)

