//Metodos estaticos basados en prototipos

function SuperObject() {}
SuperObject.isObject =  function (item) { //Comprueba si es un objeto
    return typeof item == 'object'
}

 SuperObject.isArray = function (item) {//Comprueba si es un array
    return Array.isArray(item)
}


let a = SuperObject.isArray([1,2])

console.log(a)


//Metodos estaticos basados en clases

class MegaObject {
    static isArray(item) {//Comprueba si es un array
        return Array.isArray(item)
    }
    static isObject(item) { //Comprueba si es un objeto
        return typeof item == 'object'
    }
}

let b = MegaObject.isArray([1,2])
console.log(b)