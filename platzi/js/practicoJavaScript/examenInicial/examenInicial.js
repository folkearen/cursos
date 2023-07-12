//Variables y operaciones

// 3️  Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

var nombre = "Alan";
var apellido = "Munoz";
var usuarioPlatzi = "Alan";
var edad = 32;
var email = "alan.munoz.b@gmail.com";
var esMayorDeEdad = true;
var dineroAhorrado = 1000000;
var deuda = 325759;

//4️ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
//Nombre completo (nombre y apellido)
//Dinero real (dinero ahorrado menos deudas)
var nombreCompleto = nombre + " " + apellido;
var dineroReal = dineroAhorrado - deuda;
console.log( nombreCompleto, dineroReal);

//Funciones
//2️ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name +" "+ lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function presentacion(completeName, nickname) {
    console.log(`Mi nombre es ${completeName}, pero prefieron que me digas ${nickname}.`)
};

presentacion(completeName,nickname)
//Salida:
//Mi nombre es Juan David Castro Gallego, pero prefieron que me digas juandc.


//Condicionales
//2️ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
 }

 if(tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
 }else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
 }else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
 }else if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
 }

 //3️ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
 if(tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
 }
 if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
 }
 if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
 }
 if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
 } //Pero que pasa si necesito colocar una mesaje de suscripcion no existe... solucipon en reducciondeCondicionales.js

 // Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 
let suscripcion = "Free"
let tiposSuscripciones = {
   "Free": "Solo puedes tomar los cursos gratis",
   "Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
   "Expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
   "ExpertPlus": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};
if(suscripcion) {   
    console.log(tiposSuscripciones(suscripcion));
};


//Elija opcion de suscripcion 1 para Free, 2 para Basic, 3 para Expert, 4 para Expert Plus.
let suscription = 1
let typeSuscription = ["Free: Solo puedes tomar los cursos gratis", "Basic: Puedes tomar casi todos los cursos de Platzi durante un mes", "Expert: Puedes tomar casi todos los cursos de Platzi durante un año", "Expert Plus: Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" ]

if(suscription) {
    console.log(typeSuscription[suscription - 1])
}

//Ciclos

//2️ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

//Conversion a while;
let i = 0;
while(i < 5) {
    console.log("El valor de i es " + i);
    i ++ 
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//Conversion a while;
let x = 10;
while (x >= 2) {
    console.log("El valor de i es: " + x);
    x -= 1
}

//3️ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. Pista: puedes usar la función prompt de JavaScript.

while (true) {
    let respuestaUsuario = prompt("¿Cúanto es 2 + 2?")
    if (respuestaUsuario ==4) {
        alert("Felicitaciones, respuesta correcta.");
        break;
    }else {
        alert("Intentalo de nuevo.")
    }  
}

let respuestaUsuario = prompt("¿Cúanto es 2 + 2? ");
while (respuestaUsuario != "4") {
    alert("Intentalo de nuevo.");
    respuestaUsuario = prompt("¿Cúanto es 2 + 2? ");
}
alert("Felicitaciones");

let respuesta;
while (respuesta != "4") {
    let pregunta = prompt("¿Cúanto es 2 + 2? ")
    respuesta = pregunta
}


//2️ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function devolverValor(array) {
    return array[0];
}


//3️ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function devolverDeUno(array) {
    for (elemento of array) {
        console.log(elemento)
    }
}

//4️ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
let obj = {
    "a" : 1,
    "b" : 2,
    "c" : 3
}

function devuelveObjeto(objeto) {
    for(elemnto in objeto) {
        console.log(elemnto, objeto[elemnto])
    }
}
devuelveObjeto(obj)

//devuelve solo los valores, sin llaves, transformando el obj en array para despues recorrerlo

function devuelveValores(obj) {
    let valores = Object.values(obj) //Crea un array con los valores del objeto, dejando de lado sus respectivas llaves.
    for (let i = 0; i < valores.length; i++) {
        console.log(valores[i])
    }
}

function objetoAArray (obj) {
    let soloLlaves = Object.keys(obj) //Devuelve un array con las llaves del objeto
    let soloValores = Object.values(obj) //Devuelve un arrary con los calores del objeto
    let ambosDatos = Object.entries(obj) //Devuelve un  array por cada elemnto del objeto, cada array contiene dos elementos, una llave y su valor correspondiente, pero separados como lementos diferentes. ["a", 1] ["b", 2], etc.
    console.log(soloLlaves)
    console.log(soloValores)
    console.log(ambosDatos)

}



//ejercicio extra con funciones
function nombreCompleto(nombre, apellido){
    return `${nombre} ${apellido}`
}

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}

saludar(nombreCompleto("Alan", "Munoz"))