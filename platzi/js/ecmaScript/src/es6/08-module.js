import hello from "./module.js"

hello(); 
//Para que se acepten los modulos debe modificar el archivo package.json y agregar "type": "module", debajo de licencia en la parte final, o bien cambiar a la extencion .mjs tanto en el archivo que exporta el modulo como el que lo importa. 