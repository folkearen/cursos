//

function newUser(user, age, country, mail) {
    return {
        user: user, //Forma tradicional
        age,
        country, //Pero si coinciden los nombres de la llave y se le adignara como valor el parametro que coincide con dicho nombre
        email: mail // En caso que los nombres de llave y pparametro no coincidan puedo usar la forma tradicional.
    }
}

console.log(newUser('Alan', 34, 'CL', 'alan@olis.es'))  