'use strict';

//export const nombre = 'Alan' Puedo usar export al inicio de cada variable o funcion.

const nombre = 'Alan';
const obtenerPost = () => { 
    console.log(['post1', 'post2', 'post3']);
};

var cualquierNombre = () => {
    return {
        nombre:'Alan',
        correo : 'alan@example.com'
    }
};

/**
 * Export default permite solo exportar una cosa del archivo, por tanto cada archivo tendra solo un bloque de codigo.
 * Modularizar al maximo, ejemplo, cada funcion en una archivo independiente.
 
*/
//! Tambien puedo hacerlo de esta forma con expor default al final

/**
const obtenerUsuario () => {
    return {
        nombre:'Alan',
        correo : 'alan@example.com'
    }
}
 
export default obtenerUsuario; sin parentesis. 
 */

console.log('Me ejecuto desde empty export');

const usuario = "Alan";
const saludar = () => console.log(`Hola ${usuario}`);

console.log(nombre);
console.log(obtenerPost());
console.log(cualquierNombre());
console.log(usuario);
saludar();
