/**
 * La idea fundamental detrás de las promesas es que te permiten trabajar con operaciones asíncronas de manera más estructurada 
 * y evitar el anidamiento excesivo de callbacks,
 * que puede llevar a lo que se conoce como "callback hell" (infierno de callbacks).
 */
// Crear una nueva promesa
const miPrimeraPromesa = new Promise((resolve, reject) => {
    // Simular una operación asincrónica exitosa después de 2 segundos
    setTimeout(() => {
        const exito = true;

        if (exito) {
            // Resuelve la promesa con un valor
            resolve("¡Operación exitosa!");
        } else {
            // Rechaza la promesa con un motivo de error
            reject("¡Hubo un error!");
        }
    }, 2000);
});

// Usar la promesa
miPrimeraPromesa
    .then((resultado) => {
        // El código aquí se ejecuta si la promesa se resuelve exitosamente
        console.log(resultado);
    })
    .catch((error) => {
        // El código aquí se ejecuta si la promesa es rechazada
        console.error(error);
    });

/**
 * Explicación de los términos utilizados:

Promise (Promesa): Una promesa es un objeto que representa el resultado eventual (éxito o fracaso) de una operación asíncrona. Se crea con el constructor Promise, que toma una función con dos parámetros: resolve y reject.

resolve: Una función que se llama cuando la operación asíncrona se completa con éxito. Se utiliza para "resolver" la promesa y entregar el resultado deseado.

reject: Una función que se llama cuando la operación asíncrona falla o encuentra un error. Se utiliza para "rechazar" la promesa y proporcionar información sobre el error.

then: Un método de las promesas que se utiliza para manejar el caso en el que la promesa se resuelve exitosamente. Recibe una función que se ejecuta con el resultado de la promesa.

catch: Un método de las promesas que se utiliza para manejar el caso en el que la promesa es rechazada (falla). Recibe una función que se ejecuta con el motivo del rechazo.

Una de las ventajas clave de las promesas es que permiten encadenar operaciones asíncronas de manera más legible, utilizando múltiples .then en lugar de anidamiento de callbacks.

Las promesas son especialmente útiles en situaciones donde se realizan múltiples operaciones asíncronas secuenciales o cuando es necesario manejar errores de manera más clara.

¡Espero que esto te ayude a entender las promesas en JavaScript! Si tienes más preguntas o necesitas ejemplos adicionales, no dudes en preguntar.


 */