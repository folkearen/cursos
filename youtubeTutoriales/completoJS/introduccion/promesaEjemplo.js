//Le decimos al navegador que le devolveremos informacion. y que quede a la espera pero siga con otras funciones.

const promesa = new Promise((resolve, reject) => {
    setTimeout( () => {
        const exito = false
        //Le tengo que indicar al navegador si la operacion fue exitosa o no
        if(exito) {
            resolve('Operacion exitosa')
        }else {
            reject('Operacion fracasada')
        }
    } , 4000)
});

promesa
    .then((mensaje)=>{
        alert(mensaje)
    })
    .catch((mensaje)=>{
        alert(mensaje)
    })