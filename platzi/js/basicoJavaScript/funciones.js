//declarativas
function miFuncion (){
    return 3;
}
//function declara automaticamente la funcion y se reserva el espacio de memoria para el resultado la operacion realizada en ella, en este caso simple, retorna 3


//..........................
//de expresion
var miFuncion2 = function() {
    return 4; 
}

//funcion expresiva con parametros
var miFuncion3 =  function(a,b) {
    return a + b
}

function saludoEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`)
}
saludoEstudiante("Alan") // Devuelve Hola ALan