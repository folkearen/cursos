//nested objects  objeto dentro de un objeto
function deepCopy(item) {
    function isObject(item) { //Comprueba si es un objeto
        return typeof item == 'object'
    }
    
    function isArray(item) {//Comprueba si es un array
        return Array.isArray(item)
    }

    let copyItem; //Inicializo la variable a retornar que sera copia del objeto original
    if(isArray(item)) { //La comprobacion de array siempre debe ir primero, ya que para js un array si es un objeto, pero objeto no puede ser array
        copyItem = [];//Si es array inicializamos nuestra copia como un array vacio, al que se le pushearan los elemntos mas adelante
    }else if(isObject(item)){
        copyItem = {}; //Si es un objeto se inicia como tal
    }else{
        return item; //Si otro tipo de dato devolvera inmediatamente ese item, como los datos simples se guardan en la stack puede haber copias directa sin problema
        //Aqui se terminaria la funcion, de ser un dato simple
    }

    for(key in item) {//Si un dato tipo array u objeto, reccorrmos dicho elemento, for in  asignara a key los index de los elementos si es un array el que recorre, o asignara key las llaves si el elemnto a recorres es un objet
        if(isObject(item[key])) {//Comprobamos si el elmento correspondiente a es un objeto, si es un array tambien lo considerara un objeto
            copyItem[key] = deepCopy(item[key]);//si lo es asignamos a lo copia un llave con el mismo nombre, y usando a recursividad con deep copy, analizamos el interior del objeto
        }else{
            if(isArray(item)) {
                copyItem.push(item[key])
            }else {
                copyItem[key] = item[key]
            }
        }
    
    }
    return copyItem;
};

function deepSeal(obj) {
    Object.keys(obj).forEach(item => {
        if(typeof obj[item] === 'object') deepSeal(obj[item]);
        return Object.seal(obj)
    })
}

const studentBase= {
    name: undefined,
    email: undefined,
    edad: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        facebook: undefined,
        instagram: undefined,
    }
};

const juan = deepCopy(studentBase);
deepSeal(juan)

console.log(Object.getOwnPropertyDescriptors(juan))
console.log(Object.getOwnPropertyDescriptors(juan.socialMedia))

console.log(Object.isSealed(juan))
console.log(Object.isFrozen(juan))

const maria = deepCopy(studentBase);
Object.seal(maria)
Object.freeze(maria)
console.log(Object.isSealed(maria))
console.log(Object.isFrozen(maria))

