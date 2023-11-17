const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const posts = ['post1', 'post2', 'post3'];
            const error = false;

            if(error){
                reject('Hubo un error con el servidor');
            }else {
                resolve(posts);
            }
            
        }, 2000);
    });
};

console.log('Inicia Operacion')

fetchPosts()
    .then(posts => console.log(posts))
    .catch(error => console.log(error) ) 

const posts = fetchPosts() //Esto no funciona sin then o catch
console.log(posts) // devuelve Promise { <pending> }

console.log('Termina Operacion') //Se muestra antes que el resultado de la promesa, porque en las promesas el navegador sigue ejecutando el codigo que sigue mientras espera el resultado de la promesa.
