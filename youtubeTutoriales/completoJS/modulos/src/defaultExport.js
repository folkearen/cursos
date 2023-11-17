export default () => {
    return {
        nombre:'Alan',
        correo : 'alan@example.com'
    }
}

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