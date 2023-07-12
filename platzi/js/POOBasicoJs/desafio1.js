class LearningPath {
    constructor({
        name,
        courses = []
    }){
        this.name = name;
        this.courses = courses;
    }

    renameLearningPath (newName){
        this.name = newName
    }
    
    modifyCourses(oldCurse, newCurse){
        let change = this.courses.findIndex(item => item === oldCurse);
        change !== -1 ? this.courses.splice(change , 1, newCurse) : '';
    }
};

const escuela1 = new LearningPath({
    name: "Carrea A",
    courses: ['A1', 'A2', 'A3']
});

escuela1.renameLearningPath('Carrera A 2023')

console.log(escuela1)

escuela1.modifyCourses('A1', 'A1New')
console.log(escuela1)


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




// const escuela1 = new LearningPath({
//     name: "Carrea A",
//     courses: ['A1', 'A2', 'A3']
// });

// const escuela2 = new LearningPath({
//     name: "Carrea B",
//     courses: ['B1', 'B2', 'B3']
// });

// const estudiante1 = new Student({
//     name: 'Alan',
//     username: 'almubadev',
//     email: 'example@domain.com',
//     instagram: 'folkearen',
//     aprovedCourse: ['Curso A1', 'Curso B3'],
//     learningPaths: [escuela1, escuela2]
// });

// console.log(estudiante1)
// console.log("----------Esto es solo practicar recorrer objetos------------------")
// console.log(estudiante1.learningPaths)
// console.log(estudiante1.learningPaths[0])
// console.log(estudiante1.learningPaths[0].name)
// console.log(estudiante1.learningPaths[0].courses)
// console.log(estudiante1.learningPaths[0].courses[0])