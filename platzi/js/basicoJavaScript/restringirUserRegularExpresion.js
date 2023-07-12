/*Restringir posibles nombres de usuario
Los nombres de usuario se utilizan en todas partes en Internet. Son los que dan a los usuarios una identidad única en sus sitios favoritos.

Debe verificar todos los nombres de usuario en una base de datos. Aquí hay algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario.

Los nombres de usuario solo pueden usar caracteres alfanuméricos.

Los únicos números en el nombre de usuario deben estar al final. Puede haber cero o más de ellos al final. El nombre de usuario no puede comenzar con el número.
 
Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres solo puede usar letras del alfabeto como caracteres.

Cambie la expresión regular userCheckpara que se ajuste a las restricciones enumeradas anteriormente.
 */

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username); 

//1^ - start of input Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres solo puede usar letras del alfabeto como caracteres.

//2[a-z] - first character is a letterLos nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres solo puede usar letras del alfabeto como caracteres.
//3[a-z]+ - following characters are letters

//4\d*$ - input ends with 0 or more digits Los únicos números en el nombre de usuario deben estar al final. Puede haber cero o más de ellos al final. El nombre de usuario no puede comenzar con el número.


//5| - or dos posibilidades o empieza con una letra seguido de mas letras y finalizando con un numero, o empieza con una letra y solo le siguen nueros y finaliza con numero

//6^[a-z] - first character is a letter start of input Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres solo puede usar letras del alfabeto como caracteres.


//7\d\d+ - following characters are 2 or more digitsLos únicos números en el nombre de usuario deben estar al final. Puede haber cero o más de ellos al final. El nombre de usuario no puede comenzar con el número.

//8 $ - end of input

//i ignora diferencias entre mayuscula y minuscula

/*Coincidir con espacios en blanco
Hasta ahora, los desafíos han abarcado el emparejamiento de letras del alfabeto y números. También puede hacer coincidir los espacios en blanco o los espacios entre letras.

Puede buscar espacios en blanco usando \s, que es una minúscula s. Este patrón no solo coincide con los espacios en blanco, sino también con los caracteres de retorno de carro, tabulación, avance de página y nueva línea. Puedes pensar en ello como similar a la clase de personaje [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
Esta matchllamada volvería [" ", " "]. */
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);