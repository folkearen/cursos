var edad = 18;

if(edad === 18) {
    console.log("Puedes votar, será tu primera vez")
} else if (edad > 18) {
    console.log("Puedes votar")
} else {
    console.log("No puedes votar")
}

var num = 2;
var resultado = num > 2 ? num - 1: num + 1; //Operador ternario condicional
//              condicón ? acción si es verdadero : acción si es falso    

var numero = "r"

switch (numero) { //Doy como parametro la variable a analizar
    case "a" : //Indico la condición para el posible resuñtado de variable analizada, si se cumple ejecuta el código que se expesa luego de los dospuntos, sino pasa al siguiente caso.
        console.log("La letra es a")
        break;//Ayuda a salir del bucle una vez se haye la coincidencia, de lo contrario ejecutara los coidgos de los casos que presiguen aunque no haya coincidencias.
    case "h":
        console.log("La letra es h")
        break;
    case "r":
        console.log("La letra secreta es r")
        break;
    case "z":
        console.log("La letra es z")
        break;  
    default:
        console.log("Ninguna coincidencia")  
}