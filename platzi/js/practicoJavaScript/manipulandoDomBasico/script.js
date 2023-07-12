const h1 = document.querySelector('h1');
const p = document.querySelector("p");
const parrafo = document.querySelector('.parrafo');
const pid = document.getElementById('pid'); //Ademas de queryselector, tambien puedo ocupar otros en este caso llama directamnete un id, y como argumento puedo colocar solo el nombre del id sin el #, si fuera un getelementByClass, no seria necesario agregar "." al nombre de la clase cuando se idique el argumento.
const input = document.querySelector('input');


console.log( {
    h1,
    p,
    parrafo,
    pid,
    input
})

//manipulacion de html desde js

h1.innerHTML= "Habia una vez... <br> truz" //Puedo modificar un elemento html, en ester caso el h1, ademas, esta propiedad me permite inclus insertar codigo html, en cambiado el texto del contenido de la etiqiueta h1 e incluso insertar condigo como un etiqueta br, esto es peligroso.

h1.innerText = "Habia una vez <br> un moco en la pered" //Esta propiedad permite modificar el contenido de texto de la etiqueta correspondiente, h1 para este caso, pero solo a nivel de texto, si intento insertar condigo, como la etiqueta br, la tomara com0o texto. Esto es mas seguro, existen otras medidas de seguridad.

//Obtener y modificar atributos
h1.setAttribute("class", "title") //Le he agregado a la etiqueta h1 del html, la clase title, esto se ve reflejado cuando miro los elemntos html dentro de las propiedades de desarrollo del navegador, ojo no modifica el archivo html original, sino que en el navegador ejecuta esta modificacion. 

console.log(h1.getAttribute("class"))// mediante el getAttribute puedo optener el valor de una propiedad dentro de la etiqueta correspondeinte, en este caso el valor de la pripiedad "class" que es "title", utilizo el console.log para poder apreciar el resultado en consola.

h1.classList.add("principalText"); //Metodo especial para manipular clases, en este caso se ha agregado la clase principalText
h1.classList.remove("title"); //En este caos quitamos clases, he quitado la clase title que agregamos anteriomente con el metodo setAttribute.

input.value = "Alan Brito Delgago - Pua" // Permite poner un value por defecto al imput

const img = document.createElement("img");


img.setAttribute('src', 'https://www.nationalgeographic.com.es/medio/2022/09/27/ejemplar-de-lobo-artico_cb189e8f_1280x886.jpg')
console.log(img)

pid.append(img)

