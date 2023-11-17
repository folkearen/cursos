// El operador Spread permite tomar los elementos de un arreglo u objeto y expandirlos en otros sitio.
//Spread hace una copia del objeto por tanto ante cualquier modificacion el original no se ve afectado.

const frutas = ['Manzana', 'Pera', 'Piña','Melon']
const comidaFavorita = ['Pizza', 'Sushi', ...frutas]


const datosLoguin = {
    correo: 'correo@correo.com',
    password:  '123'
};
const usuario = {
    nombre: 'Alan',
    ...datosLoguin, //Si exiten llaves iguales se reemplazaran, se debe tener cuidado, si deseo mantener los valores del objeto actual se debe colocar al principo del objeto, de esta manera se sobreescribe con lo que ta exite en nuestro objeo
    edad: 35
}

console.log(usuario)
console.log(datosLoguin)
usuario.password = "543"
console.log(usuario)
console.log(datosLoguin)

//Paratros rest
//Permite que la funcion reciba un numero indefinido de argumentos.
//Convierte los parametros extras en un arrglo

const registrarUsuario = (nombre, correo, ...datosAdicionales) =>{
    console.log(nombre, correo, datosAdicionales)
}

registrarUsuario('Alan','alan@gmail.com')
registrarUsuario('Pepito', 'Pepiro@example.com', 23, 'Chile')

//Destructuracion de objetos y arreglos.

const estudiantes = [ 'Juan', 'Maria', 'Sol']
console.log(estudiantes)

const [estu1, estu2, estu3] = estudiantes
console.log(estu1)
console.log(estu2)
console.log(estu3)


const persona = {
    nombre: 'Alan',
    edad: 35,
    pais: "Chile"
}

const {nombre, pais} = persona //En este caso los valores deben coincidir con el nombre de las llaves
console.log(nombre, pais)

const mostrarEdad = ({nombre, edad}) => { //Usando la desestructuracion toma como parametros las llaves de edad y nombre que provenga de un objeto.
    console.log(`Su nombre es ${nombre}, y tiene ${edad} años`)
}
mostrarEdad(persona) //Le paso como argumento un objeto