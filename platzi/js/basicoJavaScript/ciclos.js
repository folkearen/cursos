var estudiantes = ["Sol", "Paz", "Jorge", "Paulina"] //Array con para recorrer

function saludar(estudiante) {
    console.log(`Hola ${estudiante}`) //funcion para comporbar el recorrido
}


//recordar que el lenght de un array siempre es un numero mas alto que sus indices
//Ciclo for para recorrer array 
for( i = 0; i < estudiantes.length; i++) {
    saludar(estudiantes[i])
} 


//Ota coso es forOF donde se crea una variable que asume el valir del elemnto del array
//partiendo desde pirmero con indice 0 hasta el final, igual de Python
for(var estudiante of estudiantes) {
    saludar(estudiante)
}

while (estudiantes.length > 0 ) {
    var turnoSaludar = estudiantes.shift();
    saludar(turnoSaludar)

} 

//Este bucle es diferente a los anteriores, pues recorre los elementos de una lista (array) y las propiedades de un objeto.
var Persona={
    Nombre:'Williams',
    Apellidos:"Morales",
    Edad:36,
    }
 
for(item in Persona){   
    //Obtener cada propiedad del objeto
    console.log(item);
 
    //Obtener cada valor de cada propiedad
    //del objeto
    console.log(Persona[item]);    
}

var Paises=[];
 
Paises.push('Peru');
Paises.push('Colombia');
Paises.push('Chile');
Paises.push('Brasil');
 
for(item in Paises){   
    //Obtener el indice 
    console.log(item);
 
    //Obtener el valor de la lista 
    //según el su indice
    console.log(Paises[item]);    
}