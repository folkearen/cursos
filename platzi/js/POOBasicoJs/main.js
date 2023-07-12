// Creando objetos y prototipos

//objeto literal
const nataliaNatalia = {
    name : 'Natalia Natalia',
    Age : 60,
    cursosAprobados : ['Curso 1', 'Curso 2', 'Curso 3'],
    
    //Crear un metodo para el objeto literal
    //aprobarCurso : function () {} sintaxis comu
    aprobarCurso (cursoAprobado) {
        this.cursosAprobados.push(cursoAprobado)
    }

};

//Anadir a natalia natalia un nuevo curso aprobado

nataliaNatalia.cursosAprobados.push('Curso 4');

nataliaNatalia.aprobarCurso("Curso agregado con el metodo aprobarcurso");
console.log(nataliaNatalia);


//Crear prototipo

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    // this.aprobarCurso = function (cursoAprobado) {
    //     this.cursosAprobados.push(cursoAprobado)
    // }//Se pueden agregar metodos al prototipo internamente

};

//Pero tambien se pueden agregar metodos al prototipo desde fuera de funcion

Student.prototype.aprobarCurso = function(cursoAprobado) {
    this.cursosAprobados.push(cursoAprobado)
};

const juanita = new Student('Junaita la del Barrio', 20, ["Curso 1", "curso 2"]);

console.log(juanita)

juanita.aprobarCurso("Curso final")

console.log(juanita)


//Crear clase (proptotipo con sintaxis de clase)

class Student2 { //Solo es una sintaxis mas moderna parecida a la de otros lenguajes, en el fondo sigue la mis logica y sigue siendo un prototipo
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso (cursoAprobado) {
        this.cursosAprobados.push(cursoAprobado)
    }
}

const miguel = new Student2('Miguel', 35, ["Curso1", "Curso 3"]); 

console.log(miguel)

miguel.aprobarCurso("Curso 2 repeticion")
console.log(miguel)



//Sintaxisa para multiples argumentos, que no necesita respetar orden, sirve cuando hay
//Muchos argumentos que entregar y es imposible recordar el orden. Se le entregara al constrctor
//Como argumento un objeto literal, se guiara por las keys para ordenar los datos donde corresponda

class Student3 {
    constructor({
        name, 
        age, 
        email, 
        cursosAprobados = [] //Puedo definir incluso parmetros por defecto, en este caso si no se entrega curso, establecer el parametro con un arry vacio
        //Por defectp si no se define un dato por defecto y no se entrega tampoco un argumento este se asume con undefined
    }){
        this.name = name
        this.email = email
        this.age = age
        this.cursosAprobados = cursosAprobados
    }
    aprobarCurso (cursoAprobado) {
        this.cursosAprobados.push(cursoAprobado)
    }
}

const alan = new Student3({
    name : "Alan", //Entrego los argumentos en x orden . como un objeto literal y hara coincidir las llaves el metodo constructor
    email : 'example@domain.com',
    age : 355
    //No entrego la propiedad cursos aprobados , para que se asigne en vacio
});

console.log(alan)