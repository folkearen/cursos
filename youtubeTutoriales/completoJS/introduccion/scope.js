//Ambitos de las variables, desde donde podemos llamar a nuestras variables

//Scope Global
//Podemos acceder a ellas desde cualquier parte del codigo, estan fuera de funciones y bloques de condicionales y ciclos

var nombre = 'Alan'

const saludo = _ => {
    nombre = 'Maria' //Al ser globla, puedo modificarla dentro de bloques
    console.log(`Hola ${nombre}`)
} 

saludo()
//Scope local
const obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;
    console.log(`${nombre} tiene ${numero} de letras`)
}

obtenerNumeroLetras('Pascal')
//console.log(numero) //Levanta un error donde indica que la varible no esta definida
//Las ventajas de trabajar con scope es que permite utilizar el mismo nombre de la variable en diferentes bloques
//Lo de fuera puedo llamarlo desde dentro pero no al reves

//Scope block
//Se crea cuando se incorpoto let y const, todo lo que esta dentro de llaves, bloques condicionales y ciclos
//Hace referencia solo a let y const

const edad = 19
if(edad >= 18){
    const accesoPermitido = true;
    if (accesoPermitido) {
        console.log(accesoPermitido)
        let codigo = 'asdsadas'
    }
    //console.log(codigo) error de scope, inteto aaccde a algo que esta dentro desde fuera
}
//console.log(accesoPermitido) Error de scope