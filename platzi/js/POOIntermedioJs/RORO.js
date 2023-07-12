//RORO = Receive Object, Return Object 
function requiredParam(param) {
    throw new Error(param + ' es obligatorio')
}
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
    return { //Retorno un objeto, en orden que deseo se contruya
        name,//Sintaxis simplificada, es igual a decir name: name(parametro name)
        age,
        email,
        socialMedia: {
            twitter,
            instagram,
            facebook
        },
        approvedCourses,
        learningPaths
    }
};

const juan = createStudent({name: 'Alan', email: 'example@gmail.com'})
console.log(juan)