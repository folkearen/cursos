//Encapsulamiento con getter y setter

class Course {
    constructor({
        name,
        classes = []
    }){//En js no existen las palabras reservadas para encapsular como public o private
        this._name = name; //El guin bajo indica,ojo solo indica, que ese atributo o metodo no puede ser modificado directamente
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set changeName(newName) {
        if(newName !== this.name) { //El beneficio de usar un metdo set es que puedo condicionar el proceso de renombramiento y hacer una logica con la complejidad necesaria
            this._name = newName
        }else{
            console.log("Los nombres no pueden coincidir")
        }
        
    }
}

const proOrOB = new Course({
    name: 'Programacion Orienta a Objetos'
})

console.log(proOrOB.name) //En este caso se invoca el metodo get name, como es un get no necesita colocar () despues del nombre del metodo, como en un metodo comun

proOrOB.changeName = 'Programacion Orienta a Objetos'
proOrOB.changeName = 'Programacion Funcional, no filter'
console.log(proOrOB.name) 

// proOrOB.name = "Esto es una joda" //Para evitar este tipo de modificaciones tan simples se debe encapsular
// console.log(proOrOB.name)

