/**
 *Los callbacks en programación son funciones que se pasan como argumentos a otras funciones y se ejecutan después 
 de que se complete una operación asincrónica o un evento. La razón principal de utilizar callbacks en muchos casos está relacionada
  con el manejo de operaciones asíncronas, como las operaciones de lectura/escritura en archivos, solicitudes de red, temporizadores, etc.

  La razón principal para usar callbacks en lugar de simplemente devolver resultados directamente con la función principal está 
  relacionada con la naturaleza asincrónica de algunas operaciones en JavaScript. Si una función realiza una operación que lleva tiempo, 
  como una solicitud de red o una lectura de archivo, y bloqueara la ejecución del programa hasta que se complete, eso podría resultar en 
  una experiencia de usuario lenta.

En cambio, utilizando callbacks, se puede continuar con otras tareas mientras se espera que la operación asincrónica se complete. 
Esto es especialmente importante en entornos web, donde las operaciones de red y las interacciones del usuario deben manejarse de manera
 eficiente para mantener una interfaz de usuario receptiva. 

 */
//Los callBacks son funciones que se puede pasar por parametros a otra funcion
const obtenerPostDeUsuarios = (usuario, callback) => {
    console.log(`Obteniendo posts de ${usuario}... `)

    setTimeout(() => {
        let posts = ['Post1', 'Post2', "Post3"];
        callback(posts)
    }, 2000)

}

obtenerPostDeUsuarios('Alan', (post)=> {
    console.log(post)
}) //todo ====> Esto es un callbacks, la funcion que se pasa por parametro tiene como fin devolver algo en base a los resultados entregados por la funcion principal
