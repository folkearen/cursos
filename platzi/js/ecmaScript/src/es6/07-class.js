//Declarando
class User {}
//Instanciando la clase
const newUser = new User();

class Teacher {
    //metodo
    greeting() {
        return 'Hola a todos!' ;
    }
}

const teacher1 = new Teacher() //Instancia de la clase
console.log(teacher1.greeting())//Herencia del metodo


class Persona {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const miguel = new Persona('Miguel');
console.log(miguel.greeting())


//setters and getters

class Student {
    constructor(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
    greeting() {
        return `Helo ${this.lastName} ${this.firstName}`
    }
    get fName() {
        return this.firstName;
    }
    set fName(fN) {
        this.firstName = fN
    }
}

const student1 = new Student('Arancibia','Genesis' );
console.log(student1.greeting())
console.log(student1.fName)//Invoca al get, no se necesita los parentesis del metodo, debo averiguar.
student1.fName = 'Carlota'//invoca al set, no necesita los parentesis para entregar el nuevo argumento, solo se le asigna como valor, igual que las variables
console.log(student1.fName)
