//Promesas algo que puede llegar a suceder

const anotherFunction = () => {
    return new Promise((resolve, reject) =>{
        if(true) {//para asegurar entrada al bloque
            resolve('Heeeeey!');
        } else {
            reject('Wooooooo!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));