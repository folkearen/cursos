//.length devuelve la catidad de caracteres

// !Ojo cuando son propiedades no llevan parentesis eso lo diferencia de los metodos.

const texto = 'Hola soy Alan'
console.log(texto.length)

// .indexOf() .lastIndexOf() devuelve el primer/ultimo indice de un caracter especificado, si no existe el caracte devolvera -1

console.log(texto.indexOf('a'))
console.log(texto.lastIndexOf('a'))
console.log(texto.lastIndexOf('p'))

// .slice() Devuelve un fragmento de una cadena de texto 1er parametro es el indice  desde donnde cortar, 2 parametro hasta donde queremos cortar, opcional sino cortara al final del string
//El limite nunca se cuenta, si sobre paso la numeor de indice totales solo cortara hasta el final del string
console.log(texto.slice(3,12))
console.log(texto.slice(-10,-1))

// .replace() Devuelve una cadena donde reemplaza un valor indicado por otro que se indique
//1er parametro: Texto a reemplazar
//2do parametro: Texto de emmplazo

console.log(texto.replace('Alan', 'Alambrito'))

// .split() Convierte un String a un Array , se debe especificar donde cortar el string para que convierta dichar porcion en un elemnto del array
// 1er parametro: caracter que funcionara como separador(corte)
console.log(texto.split(' ')) //Separamos en cada espacio, por tanto cada palabra sera un elemnto del array
console.log(texto.split('')) //Separamos en caracte vacio, por tanto cada letra, incluido espacios sera un elemnto del array por separado

//toUpperCase() .toLowerCase()
//Devulev el string convertido totalmente a mayuscula o a minuscula
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())