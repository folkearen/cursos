//nameSpace  hace referencia al scope en que existe ese nombre de variable, y los empedimentos de acceso desde otres "Espacios" o Scope

function createStudent({ //Entego como argumento un objeto, como parametros, da igual el orden
    name = requiredParam('name'),
    age,
    email = requiredParam('email'),
    approvedCourses = [],
    learningPaths =  [],
    twitter,
    instagram,
    facebook
}={}){

    const private = {
     "_name": name,
    };

    const public = {
   
        age,
        email,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook
        },

        readName() {
            return private._name
        },

        changeName(newName) {
            private._name = newName
        }
    };
    Object.defineProperty(public, 'readName', { 
        writable: false, 
        configurable: false
    })
    //Esto evitara que se edite la funcion para que hago otra cosa
    //Se agrega seguridad pero sacrificamos polimorfismo
    //Seguira funcionando tal cual cumpliedo su funcion
    Object.defineProperty(public,"changeName", {
        writable: false,
        configurable: false
    })
    return public
 
};

const juan = createStudent({name: 'Alan', email: 'example@gmail.com'})
console.log(juan) //Al imprimir no muestra el no,=mbre ya que solo devolvemos el objeto public, solo mostrara las funciones de readName y changName

console.log(juan.name) //mostrara undefine, menos podra modificarse
console.log(juan.readName())
juan.changeName('Juanito')//Esto impide cambiar el nombre directamente y accede solo con la funcion, a la cual se le pueden agregar condicionales

console.log(juan.readName()) 

delete juan.readName

console.log(juan.readName()) 
