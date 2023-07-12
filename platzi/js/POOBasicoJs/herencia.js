class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        aprovedCourse = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username
        this.socialMedia = {
            twitter : twitter, //Esto se puede simplificar, si la llave tiene el mismo nombre(nombreA: nombreA ) que el item solo colocar la llave, js intepretara que su value tiene el mismo nombre
            instagram,
            facebook // sintaxis acortada
        };
        this.aprovedCourse = aprovedCourse;
        this.learningPaths = learningPaths;
    }
    addAprovedCourse(course) {
        this.aprovedCourse.push(course);
    }
    addLearningPath(path){
        this.learningPaths.push(path);
    }
};

class freeStudent extends Student {
    constructor(datos){
        super(datos) //Super hace referencia al constructor de la clase madre, por tanto el constructo de la clase hijo recibe datos y estos se envia a la clase madre
    }
    addAprovedCourse(newCourse) {//Este metodo tambien se encuentra en la clase padre por tanto podria hacer uso asi tal cual en una instancia de la clase hijo, pero en este ejemplo se modificado para seguir la logica de negocio
        if(newCourse.isFree){
            this.aprovedCourse.push(newCourse)
        }else{
            console.warn(`Lo sentimos ${this.name} solo puedes tomar cursos abiertos`)
        }
    }
}