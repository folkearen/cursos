/*
Las expresiones regulares se utilizan en lenguajes de programación para hacer coincidir partes de cadenas. Usted crea patrones para ayudarlo a hacer esa combinación.

Si desea encontrar la palabra theen la cadena The dog chased the cat, puede usar la siguiente expresión regular: /the/. Tenga en cuenta que las comillas no son necesarias dentro de la expresión regular.

JavaScript tiene múltiples formas de usar expresiones regulares. Una forma de probar una expresión regular es usando el .test()método. El .test()método toma la expresión regular, la aplica a una cadena (que se coloca entre paréntesis) y devuelve trueo falsesi su patrón encuentra algo o no.

*/
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
console.log(testRegex.test(testStr))

/*
Usando expresiones regulares como /coding/, puede buscar el patrón codingen otra cadena.

Esto es poderoso para buscar cadenas individuales, pero está limitado a un solo patrón. Puede buscar varios patrones utilizando el operador alternationo : .OR|

Este operador coincide con los patrones anteriores o posteriores. Por ejemplo, si desea hacer coincidir las cadenas yeso no, la expresión regular que desea es /yes|no/.

También puede buscar más de dos patrones. Puede hacer esto agregando más patrones con más ORoperadores separándolos, como /yes|no|maybe/.

Complete la expresión regular petRegexpara que coincida con las mascotas dog, cat, birdo fish.
*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result2 = petRegex.test(petString);
console.log(result2)
/*
ignorar mayusculas y minusculas
Puede hacer coincidir ambos casos usando lo que se llama una bandera. Hay otras banderas, pero aquí se centrará en la bandera que ignora las mayúsculas y minúsculas: la ibandera. Puede usarlo agregándolo a la expresión regular. Un ejemplo del uso de esta bandera es /ignorecase/i. Esta expresión regular puede coincidir con las cadenas ignorecase, igNoreCasey IgnoreCase.
*/
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result3 = fccRegex.test(myString);
console.log(result3)

//Hasta lo anterior solo devuelve true o false, el metodo se aplica a exprecion regular y se entrega como argumento la cadena a analizar

//Ahora extraeremos el texto y se usa al reves con el metodo match, que se aplica a la cadena y se entrega como argumento la expresion regular

/*Tenga en cuenta que la .matchsintaxis es "opuesta" al .testmétodo que ha estado usando hasta ahora:

'string'.match(/regex/);
/regex/.test('string');
Hasta ahora, solo ha estado verificando si existe un patrón o no dentro de una cadena. También puede extraer las coincidencias reales que encontró con el .match()método.

Para usar el .match()método, aplique el método en una cadena y pase la expresión regular dentro de los paréntesis.

Aquí hay un ejemplo:

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result4 = extractStr.match(codingRegex);
console.log(result4)
/*
Devuelve un array
[
  'coding',
  index: 18,
  input: "Extract the word 'coding' from this string.",
  groups: undefined
]

 */

//Buscar mas de una coincidencia
let testStr2 = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/g;
testStr2.match(repeatRegex);
console.log(testStr2.match(repeatRegex))// devuelve [ 'Repeat', 'Repeat', 'Repeat' ]

//Puedo mezclar baderas
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // buscara la palabra n cantidad de veces omitiendo diferencias entre mayusculas y minusculas
let result5 = twinkleStar.match(starRegex); // Change this line

/*
Hacer coincidir cualquier cosa con el período comodín DEVUELVE TRUE OR FALSE
A veces no conocerá (o no necesitará) los caracteres exactos de sus patrones. Pensar en todas las palabras que coincidan, por ejemplo, con una falta de ortografía llevaría mucho tiempo. Afortunadamente, puedes ahorrar tiempo usando el carácter comodín:.

El carácter comodín .coincidirá con cualquier carácter. El comodín también se llama doty period. Puede usar el carácter comodín como cualquier otro carácter en la expresión regular. Por ejemplo, si desea hacer coincidir hug, huh, huty hum, puede usar la expresión regular /hu./para hacer coincidir las cuatro palabras.
*/
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
//Ambas testllamadas regresarían true.

/*
Puede buscar un patrón literal con cierta flexibilidad con las clases de caracteres . Las clases de caracteres le permiten definir un grupo de caracteres que desea hacer coincidir colocándolos entre corchetes ( [y ]).

Por ejemplo, desea hacer coincidir bag, bigy bugpero no bog. Puede crear la expresión regular /b[aiu]g/para hacer esto. es [aiu]la clase de carácter que solo coincidirá con los caracteres a, io u.
 */
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex))
console.log(bagStr.match(bgRegex))
console.log(bugStr.match(bgRegex))
console.log(bogStr.match(bgRegex))
/*
salida
[ 'big', index: 0, input: 'big', groups: undefined ]
[ 'bag', index: 0, input: 'bag', groups: undefined ]
[ 'bug', index: 0, input: 'bug', groups: undefined ]
null
*/
//Buscabdo en texto completo, todas las vocales de una frase todas coincidencias con la bandera g, e ignorando diferencia entre mayuscula y minuscula cion i
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result6 = quoteSample.match(vowelRegex); // Change this line
console.log(result6)

/*
Une las Letras del Alfabeto
Ya vio cómo puede usar conjuntos de caracteres para especificar un grupo de caracteres para hacer coincidir, pero eso es mucho escribir cuando necesita hacer coincidir una gran variedad de caracteres (por ejemplo, cada letra del alfabeto). Afortunadamente, hay una característica incorporada que hace que esto sea corto y simple.

Dentro de un conjunto de caracteres, puede definir un rango de caracteres para que coincidan usando un carácter de guión: -.

Por ejemplo, para unir letras minúsculas ahasta eusted, usaría [a-e].

*/

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex1 = /[a-e]at/;
console.log(catStr.match(bgRegex1));
console.log(batStr.match(bgRegex1));
console.log(matStr.match(bgRegex1));
/*
salida
[ 'cat', index: 0, input: 'cat', groups: undefined ]
[ 'bat', index: 0, input: 'bat', groups: undefined ]
null ...devuelve null en mat, porque, buscara letras en a-e antes de la cadena at, por tanto m, no esta entre a-e (alfabeto completo)

*/
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result7 = quoteSample2.match(alphabetRegex); // Change this line
console.log(result7)

/*
Empareja Números y Letras del Alfabeto
El uso del guión ( -) para hacer coincidir un rango de caracteres no se limita a las letras. También funciona para hacer coincidir un rango de números.

Por ejemplo, /[0-5]/coincide con cualquier número entre 0y 5, incluidos 0y 5.

Además, es posible combinar un rango de letras y números en un solo conjunto de caracteres.

*/
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
console.log(jennyStr.match(myRegex));
/*salida
[
  'J', 'e', 'n', 'n',
  'y', '8', '6', '7',
  '5', '3', '0', '9'
]

*/

/*Coincidencia de caracteres individuales no especificados
Hasta ahora, ha creado un conjunto de caracteres con los que desea hacer coincidir, pero también podría crear un conjunto de caracteres con los que no desea hacer coincidir. Estos tipos de conjuntos de caracteres se denominan conjuntos de caracteres negados .

Para crear un conjunto de caracteres negados, coloque un carácter de intercalación ( ^) después del corchete de apertura y antes de los caracteres que no desea que coincidan.

Por ejemplo, /[^aeiou]/gicoincide con todos los caracteres que no son una vocal. Tenga en cuenta que los caracteres como ., !, [, @y /espacios en blanco coinciden: el conjunto de caracteres de vocal negada solo excluye los caracteres de vocal.

Cree una sola expresión regular que coincida con todos los caracteres que no sean un número o una vocal. Recuerde incluir las banderas apropiadas en la expresión regular.
*/

let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^aeiou0-9]/ig; // Change this line
let result8 = quoteSample3.match(myRegex3); // Change this line
console.log(result8)

/*Coincidencia de caracteres que aparecen una o más veces
A veces, necesita hacer coincidir un carácter (o grupo de caracteres) que aparece una o más veces seguidas. Esto significa que ocurre al menos una vez y puede repetirse.

Puede usar el +carácter para verificar si ese es el caso. Recuerde, el carácter o patrón tiene que estar presente consecutivamente. Es decir, el personaje tiene que repetir uno tras otro.

Por ejemplo, /a+/gencontraría una coincidencia abcy devolvería ["a"]. Debido a +, también encontraría una sola coincidencia aabcy regresaría ["aa"].

Si, en cambio, estuviera verificando la cadena abab, encontraría dos coincidencias y regresaría ["a", "a"]porque los acaracteres no están en una fila, hay una bentre ellos. Finalmente, dado que no hay aen la cadena bcd, no encontrará una coincidencia.

Desea encontrar coincidencias cuando la letra saparece una o más veces en Mississippi. Escriba una expresión regular que use el +signo. */

let difficultSpelling = "Mississippi";
let myRegex4 = /s+/g; // Change this line
let result9 = difficultSpelling.match(myRegex);

/*Coincidencia de caracteres que aparecen cero o más veces
El último desafío usó el signo más +para buscar caracteres que ocurren una o más veces. También hay una opción que hace coincidir los caracteres que aparecen cero o más veces.

El caracter para hacer esto es el asterisco o estrella: *.

En orden, las tres matchllamadas devolverían los valores ["goooooooo"], ["g"]y null.
 */
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

/*Encuentra personajes con coincidencia perezosa
En las expresiones regulares, una coincidencia codiciosa encuentra la parte más larga posible de una cadena que se ajusta al patrón de expresiones regulares y la devuelve como una coincidencia. La alternativa se llama coincidencia perezosa , que encuentra la parte más pequeña posible de la cadena que satisface el patrón de expresión regular.

Puede aplicar la expresión regular /t[a-z]*i/a la cadena "titanic". Esta expresión regular es básicamente un patrón que comienza con t, termina con iy tiene algunas letras en el medio.

Las expresiones regulares son codiciosas de forma predeterminada, por lo que la coincidencia devolvería ["titani"]. Encuentra la subcadena más grande posible para ajustarse al patrón.

Sin embargo, puede usar el ?carácter para cambiarlo a coincidencia perezosa. "titanic"comparado con la expresión regular ajustada de /t[a-z]*?i/devoluciones ["ti"].

Nota: se debe evitar analizar HTML con expresiones regulares, pero el patrón que hace coincidir una cadena HTML con expresiones regulares está completamente bien.

Corrija la expresión regular /<.*>/para devolver la etiqueta HTML <h1>y no el texto "<h1>Winter is coming</h1>". Recuerde que el comodín .en una expresión regular coincide con cualquier carácter. */
let text = "<h1>Winter is coming</h1>";
let myRegexx= /<.*?>/; // Change this line
let result11 = text.match(myRegexx);

/*
Coincidencia de patrones de cuerdas iniciales
Los desafíos anteriores mostraron que las expresiones regulares se pueden usar para buscar varias coincidencias. También se utilizan para buscar patrones en posiciones específicas en cadenas.

En un desafío anterior, usó el carácter de intercalación ( ^) dentro de un conjunto de caracteres para crear un conjunto de caracteres negados en la forma [^thingsThatWillNotBeMatched]. Fuera de un conjunto de caracteres, el signo de intercalación se usa para buscar patrones al comienzo de las cadenas.
La primera testllamada regresaría true, mientras que la segunda regresaría false.
 */

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);

/*Coincidencia de patrones de cadenas finales
En el último desafío, aprendiste a usar el carácter de intercalación para buscar patrones al comienzo de las cadenas. También hay una forma de buscar patrones al final de las cadenas.

Puede buscar el final de las cadenas utilizando el carácter de signo de dólar $al final de la expresión regular.
storyRegex.test(noEnding);
La primera testllamada regresaría true, mientras que la segunda regresaría false.
 */
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);

let textt = "The last car on a train is the caboose";
const matrizText = textt.split(' ')
let regular =/oose$/
for(let i = 0; i < matrizText.length; i++){
    if(/in$/.test(matrizText[i])){
        console.log(matrizText[i])
    }
}

/*Coincide con todas las letras y números
Usando clases de caracteres, pudo buscar todas las letras del alfabeto con [a-z]. Este tipo de clase de carácter es tan común que existe un atajo para ella, aunque también incluye algunos caracteres adicionales.

La clase de caracteres más cercana en JavaScript para coincidir con el alfabeto es \w. Este atajo es igual a [A-Za-z0-9_]. Esta clase de caracteres coincide con letras mayúsculas y minúsculas más números. Tenga en cuenta que esta clase de caracteres también incluye el carácter de subrayado ( _). */

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

//Las cuatro testllamadas regresarían true.

//Estas clases de caracteres abreviados también se conocen como clases de caracteres abreviados .
let quoteSamplex = "The five boxing wizards jump quickly 8 &%^&^@ _.";//Solo incluira letas, numero y guines bajos
let alphabetRegexV2 = /\w/g; // Change this line
let resultx = quoteSamplex.match(alphabetRegexV2).length;
console.log(quoteSamplex.match(alphabetRegexV2))

function limpiarPalabra(word) {
    let newWord =''
    for(c of word) {
        if(/\w/.test(c)){
            newWord += c
        }
    }
    newWord = newWord.match(/[^_]/g).join('')

    return newWord;
}

console.log(limpiarPalabra('A$#%$%@n____----24234a'))


/*Une Todo Menos Letras y Números
Has aprendido que puedes usar un atajo para hacer coincidir alfanuméricos [A-Za-z0-9_]usando \w. Un patrón natural que quizás desee buscar es lo opuesto a los alfanuméricos.

Puede buscar el opuesto de \wcon \W. Tenga en cuenta que el patrón opuesto usa una letra mayúscula. Este atajo es el mismo que [^A-Za-z0-9_]. */
let shortHand2 = /\W/;
let numbers2 = "42%";
let sentence = "Coding!";
numbers2.match(shortHand2);
sentence.match(shortHand2);
//La primera matchllamada devolvería el valor ["%"]y la segunda devolvería ["!"].
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\W/g; // Change this line
let result = movieName.match(noNumRegex).length;



/*Coincide con todos los números
Ha aprendido métodos abreviados para patrones de cadenas comunes, como los alfanuméricos. Otro patrón común es buscar solo dígitos o números.

El atajo para buscar caracteres de dígitos es \d, con minúsculas d. Esto es igual a la clase de caracteres [0-9], que busca un solo carácter de cualquier número entre cero y nueve.

Use la clase de caracteres abreviados \dpara contar cuántos dígitos hay en los títulos de las películas. Los números escritos ("seis" en lugar de 6) no cuentan. */


let movieNamei = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let resulti= movieName.match(numRegex).length;

/*Coincide con todos los no números
El último desafío mostró cómo buscar dígitos usando el atajo \dcon minúsculas d. También puede buscar elementos que no sean dígitos usando un atajo similar que usa mayúsculas Den su lugar.

El atajo para buscar caracteres que no sean dígitos es \D. Esto es igual a la clase de caracteres [^0-9], que busca un solo carácter que no sea un número entre cero y nueve.
 */

let movieName1 = "2001: A Space Odyssey";
let noNumRegex1 = /\D/g; // Change this line
let result10 = movieName1.match(noNumRegex1).length;

/*Hacer coincidir caracteres que no sean espacios en blanco
Aprendiste a buscar espacios en blanco usando \s, con minúsculas s. También puede buscar todo excepto espacios en blanco.

Busque espacios que no sean en blanco usando \S, que es una mayúscula s. Este patrón no coincidirá con espacios en blanco, retornos de carro, tabuladores, avances de página y caracteres de nueva línea. Puedes pensar que es similar a la clase de personaje [^ \r\t\f\n\v].
*/
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
//El valor devuelto por el .lengthmétodo sería 32.

/*Especifique el número superior e inferior de coincidencias
Recuerde que utiliza el signo más +para buscar uno o más caracteres y el asterisco *para buscar cero o más caracteres. Estos son convenientes, pero a veces desea hacer coincidir una cierta gama de patrones.

Puede especificar el número inferior y superior de patrones con especificadores de cantidad . Los especificadores de cantidad se utilizan con corchetes ( {y }). Pones dos números entre las llaves, para el número inferior y superior de patrones.

Por ejemplo, para hacer coincidir solo la letra aque aparece entre 3y 5veces en la cadena ah, su expresión regular sería /a{3,5}h/.

*/
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);

//La primera testllamada regresaría true, mientras que la segunda regresaría false.

/*Especifique solo el número inferior de coincidencias
Puede especificar el número inferior y superior de patrones con especificadores de cantidad usando corchetes. A veces, solo desea especificar el número inferior de patrones sin límite superior.

Para especificar solo el número más bajo de patrones, mantenga el primer número seguido de una coma.

Por ejemplo, para hacer coincidir solo la cadena hahcon la letra aque aparece al menos 3veces, su expresión regular sería /ha{3,}h/. */
let A4x = "haaaah";
let A2x = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleAx = /ha{3,}h/;
multipleAx.test(A4x);
multipleAx.test(A2x);
multipleAx.test(A100);

//En orden, las tres testllamadas devolverían true, falsey true.

/*
Especifique el número exacto de coincidencias
Puede especificar el número inferior y superior de patrones con especificadores de cantidad usando corchetes. A veces solo quieres un número específico de coincidencias.

Para especificar una cierta cantidad de patrones, solo tenga ese número entre llaves.

Por ejemplo, para hacer coincidir solo la palabra hahcon la letra a 3veces, su expresión regular sería /ha{3}h/.
*/
let A4r = "haaaah";
let A3 = "haaah";
let A100r = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4r);
multipleHA.test(A3);
multipleHA.test(A100r);
//En orden, las tres testllamadas devolverían false, truey false.

/**Comprobar si hay todos o ninguno
A veces, los patrones que desea buscar pueden tener partes que pueden o no existir. Sin embargo, puede ser importante verificarlos de todos modos.

Puede especificar la posible existencia de un elemento con un signo de interrogación, ?. Esto verifica cero o uno de los elementos anteriores. Puede pensar en este símbolo como diciendo que el elemento anterior es opcional.

Por ejemplo, hay ligeras diferencias entre el inglés americano y el inglés británico y puede usar el signo de interrogación para hacer coincidir ambas ortografías.
 */
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
//Ambos usos del testmétodo devolverían true.

/**Previsión positiva y negativa
Las búsquedas anticipadas son patrones que le indican a JavaScript que mire hacia adelante en su cadena para buscar patrones más adelante. Esto puede ser útil cuando desea buscar varios patrones en la misma cadena.

Hay dos tipos de anticipación: anticipación positiva y anticipación negativa .

Una búsqueda anticipada positiva buscará asegurarse de que el elemento en el patrón de búsqueda esté allí, pero en realidad no lo coincidirá. Se utiliza una búsqueda anticipada positiva (?=...)donde el ...es la parte requerida que no coincide.

Por otro lado, una búsqueda anticipada negativa buscará asegurarse de que el elemento en el patrón de búsqueda no esté allí. Se utiliza una búsqueda anticipada negativa (?!...)donde ...está el patrón que no desea que esté allí. El resto del patrón se devuelve si la parte de anticipación negativa no está presente.

Las previsiones son un poco confusas, pero algunos ejemplos ayudarán.
 */
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
//Ambas matchllamadas regresarían ["q"].
//Un uso más práctico de las búsquedas anticipadas es verificar dos o más patrones en una cadena. Aquí hay un (ingenuamente) simple verificador de contraseñas que busca entre 3 y 6 caracteres y al menos un número:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);


//Utilice búsquedas anticipadas en el pwRegexpara buscar contraseñas que tengan más de 5 caracteres y dos dígitos consecutivos.
let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/; // Change this line
let resultg = pwRegex.test(sampleWord);

// /(?=\w{6}) coincida positivamenco con cualquier caracter alfanumerico mayor a 5
//(?=\w*\d{2}) que coincida con 0 o mas caracteres alfanumericos, y dos digitos.

/*
Verifique la agrupación mixta de caracteres
A veces queremos verificar grupos de caracteres usando una expresión regular y para lograr eso usamos paréntesis ().

Si desea encontrar Penguino Pumpkinen una cadena, puede usar la siguiente expresión regular:/P(engu|umpk)in/g

Luego verifique si los grupos de cadenas deseados están en la cadena de prueba utilizando el test()método.
 */

let testStrq = "Pumpkin";
let testRegexq = /P(engu|umpk)in/;
testRegexq.test(testStrq);
//El testmétodo aquí devolvería true.