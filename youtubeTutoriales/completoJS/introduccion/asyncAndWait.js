//aync await ayuda a limpiar el codigo y ademas poder decirle a la navegador que espera la respuesta de la promesa antes de seguir
//con el resto del codigo dentro de la funcion que llama a la promesa.


const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const posts = ['post1', 'post2', 'post3'];
            const error = true;

            if(error){
                reject('Hubo un error con el servidor');
            }else {
                resolve(posts);
            }
        }, 2000);
    });
};

const mostrarPost = async() => {
    try {
        const posts = await fetchPosts() // El codigo que sigue a esta linea no se ejecutara hasta que se resuelva la promesa.
        console.log(posts)
    }catch(error) {
        console.log(error)
    }

}

mostrarPost();

