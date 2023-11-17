
// Named Import
// import {nombre, obtenerPost} from './namedExport'

// console.log('Mi nombre es ' + nombre)
// obtenerPost()

// Namespace import

//Namespace imports
import * as datos from './namedExport' 

//Default export
import cualquierNombre from './defaultExport'

//Empty export
import './emptyExport' //Importa todo el codigo logico no asi variables y funciones
import {usuario, saludar } from './emptyExport'

console.log(datos.nombre)
console.log(datos.obtenerPost())
console.log(cualquierNombre())
console.log(usuario)
saludar()