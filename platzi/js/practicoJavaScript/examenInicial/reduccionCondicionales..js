
//La fim=nalidad es usar un solo condicional
function Suscripciones(tipoDeSuscripcion) {
    if(tipoDeSuscripcion == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return;
     }
     if (tipoDeSuscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
     }
     if (tipoDeSuscripcion == "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
     }
     if (tipoDeSuscripcion == "ExpertPlus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
     }
     console.warn("Esa suscripcion no existe") //Sin embargo, este mensaje se imprimira si o si, ya que no esta condicionado, incluso un else estaria ligado aun if y no serviria y para condicionarlo, habira que considerar todas las infinitas posibilidades, entonces se necesita romper la un funcion una vez se cumpla un requisito, de tal forma que escojer una opcion correcta, salfa de la funcion y no muestre el mensaje final de "no encontrada", para ello se agregara un return al final de cada if, ropiendo la funcion cuando se hayen coincidencias
}

//Ejerccio con objeto, sieguiendo la misma dinamica, la idea es reducir condigo, imagina si tuvieras 50 tipos de suscriociones, cada if se compone de 3 lineas mas el salto de line, 50,serian 200 lineas de codigo!!!! 

const suscripcionesDisponibles = {
    //Oja puedo poner como llaves nombre como si fueran variables, sin necesidad de escribirlos como String, o asignar numero como llaves.
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}

//Puedo llamar a los valores del diccionario mediantes us llaves. Ya sea nombredelobjeto.llave o nombredelobjeto[llave]
//suscripcionesDisponibles.Free -arroja: 'Solo puedes tomar los cursos gratis'
//suscripcionesDisponibles["Basic"] -arroja:'Puedes tomar casi todos los cursos de Platzi durante un mes', que veneficio tiene esto, que puedo asignarle a una variable un String con el nombre de la llave, y luego, llamra con nombredelobjeto[variable con vallor del nombre de la llavve ]

//ejemplo
let suscri = "Free"
suscripcionesDisponibles[suscri] //Arroja el valor signado a la llave Free

function suscripciones2 (suscripcion) {
    //Este bloque se ejecutara si es true, en este caso si existe una llave (propiedad) con ese nombre dentro del el pbjeto, al ser asi se considera verdad por tanto ejecuta el coduigo.
    if (suscripcionesDisponibles[suscripcion]) {
        console.log(suscripcionesDisponibles[suscripcion])
        //imprime dicho mesaje haciendo una llamdo al objeto y una llave, imprimiendo el mensaje correspondiente
        return
    } 
    console.warn("Esa suscripcion no existe") 
}