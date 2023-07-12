function requiredParam(param) {
    throw new Error(param + ' es obligatorio')
}

class User {
    constructor({
        name = requiredParam('name'),
        username,
        email,
        age,
        hobby =[]
    } = {}){//En caso de no entrgar agumentos devolvera un objeto vacio
        this.name = name;
        this.username = username;
        this.email = email;
        this.age = age;
        this.hobby =hobby;
    }
};




const juan = new User({
    name: 'Juanito'
})

console.log(juan)


const alan = new User();
console.log(alan)