//Funcion que pasa como argumentoa a otra funcion para luego invocarla dentro de esta funcion externa

function suma(num1, num2) {
    return num1 + num2;
}


function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2, 2, suma)) //Se invoca Calc, la funcion a pasar como argumentos se escribe sin parentesis ya que sino la estariamos invocando en el momento y daria error


function hola() {
    console.log("Oliiii")
}

function saludar(name) {
    console.log(`Hola ${name}`);
}

hola()
saludar("Alan")

setTimeout(hola, 5000); //setTomeout tambien es una especie de callback
setTimeout(saludar, 2000, "Alan"); //Despues del tiempo se agregan los n argumentos a pasarle a la funcion

//Esta es la salida
// 4 
// Oliiii
// Hola Alan     !!! hasta aqui se sigue el orden de ejecucion normal
// Hola Alan     !!!pero aca se invierte porque la funcion hola tiene un tiempo de trazo mas alto, por mas que este despues en el orden la funcion saludar esta se ejecutara antes porque su tiempo de retraso es mas corto que el de la funcion que la precede a veces esto podria causar un problema
// Oliiii

//Otro ejemplos

function primerPaso() {
    console.log("Debemos esperar que todo este en orden para comenzar")
    console.log("1")
}

function segundoPaso() {
    console.log("Ya se ejecuto el primer paso  1")
    console.log("2")
}

//Colacomos un seTimeout para esperar que todo este en orden

setTimeout(primerPaso, 3000);
segundoPaso()

//Esta es la salida se ejecuta el paso dos antes que el primero porque tiene un retraso, imaginemos que para comenzar debe esperar la llegada de datos desde una api, claramente se generaria un error.

// Ya se ejecuto el primer paso  1
// 2
// Debemos esperar que todo este en orden para comenzar
// 1

//Solucion

function primero(segundo) { // No es necesario ponerle callback a fun parametro
    setTimeout( _ => {
        console.log("Esperando info")
        console.log("Primer Paso realizado")
        segundo()
    }, 5000)
   
};

function segundo() {
    console.log("realizando segundo paso")
};

primero(segundo) //Sin los parentesis para que no se ejecute segundo inmediatamente sino, pierde el sentido el callback y da error

//Salida, luego de 5 segundos ejecuta los que esta dentro de la funcion primero, los mesajes, y la funcion segundo, ejecuta la funcion segundo, siguiendo el orden de la ejecucion correctamente, nos sirve para no hacer algo mientras otra cosa no se alla realizado.
// Esperando info
// Primer Paso realizado
// realizando segundo paso

// [Done] exited with code=0 in 5.058 seconds