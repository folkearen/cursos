// .toString()
//Convierte un numero a string
const n1 = 10
console.log(n1, typeof n1)

const texto = n1.toString()
console.log(texto, typeof texto)

//.toFixed()
//Permite delimitar la cantidad de decimales de un numero

const n2 = 3.141519
console.log(n2.toFixed(1))
console.log(n2.toFixed(2))
console.log(n2.toFixed(8)) //Rellena con ceros si sobrepasa la cantidad de decimales iniciales del objeto.


//parseInt()/parseFloat() Es funcion, no metodo, por tanto no utiliza notacion puntual, y se entrega la cadena a transformar como parametro
//Tramsforma una cadena a numero entero/flotante.
//promp("") sirve para pedir datos al usuario

const tex1 = "22"
console.log(tex1, typeof tex1)
const textParseInt = parseInt(tex1)
console.log(textParseInt, typeof textParseInt)

const tex2 ='2.34'
console.log(parseInt(tex2), typeof parseInt(tex2))
console.log(parseFloat(tex2), typeof parseFloat(tex2))

// Math.random()
// Genera un numero al azar entre 0 y 1.

const n3 = Math.random()
console.log(n3)
console.log(n3, typeof n3) //Mezcla de metodos

//Math.floor() redondea numeros hacia abajo, puedo pasar enteros o cadenas, devuelve un numero
console.log(Math.floor(10.1))
console.log(Math.floor('10.99'))

//Math.ceil() redondea numeros hacia arriba, puedo pasar enteros o cadenas, devuelve un numero
console.log(Math.ceil(10.1))
console.log(Math.ceil('10.99'))

//Math.round() redondea numero entero mas cercano, puedo pasar enteros o cadenas, devuelve un numero
console.log(Math.round(10.1))
console.log(Math.round('10.99'))


//Numero al azar
const nAzar = Math.random()
console.log(nAzar)
console.log(nAzar * 100)
console.log(Math.floor(nAzar * 100))