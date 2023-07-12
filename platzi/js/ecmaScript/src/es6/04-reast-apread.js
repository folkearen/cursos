//asignación de desestructuración

//desestructuracion de arrays (es como desempaquetar en Python)

let fruits = ['apple', 'banana'];
let [a, b] = fruits;

console.log(a);
console.log(b);

//desestructuracion de objetos

let user = {name: 'alan', age: 34};
let {name, age} = user; //variables deben coincididr con las llaves, aun no se por que
console.log(name);
console.log(age);
console.log(user);

//truco

let estudiantes = ['Sol', 'Maria', 'Pedrito', 'Juan']
let [,,tercero] = estudiantes; //las comas saltan indices y luego inicio variable con la siguiente posicion, la ultima no alcanza a ser solicitada
console.log(tercero)

//spread operator

let persona = {name: 'Alan', age: 34};
let country = "Chile";

let data = {...persona, country};
console.log(data);
let persona2 = {name1: 'Maria', age2: 21};

let all = {...persona2, a: 1,...persona}; //Cunado se propaga un objeto o array tambien se le puede anadir nuevos elementos atras o adelante, y omite valores con la misma llave
console.log(all) 

function sumar(num, ...values) { // puedo usar el operador de propagacion para solicitar x numero de argumentos, en este caso creara un array con dichos datos y puedo trabajarlos por separados segun su indice
    console.log(num);
    console.log(values[0]);
    return num + values[0];
}

console.log(sumar(1,2,3,4,5,6,7,8)); //la funcion creara un varable num con valor 1, y un array cons [2,3,4,5,6,7,8]