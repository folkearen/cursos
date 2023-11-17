/*
        Ejemplo de uso de hook useState
        Crear un componente de tipo función y acceder a su estado privado, a travez de un hook y, además, poder modificarlo
*/
import React, {useState} from 'react';



const Ejemplo1 = () => {

    const valorInicial = 0;

    const personaInicial = {
        nombre: 'Alan',
        email : 'alan@example.com'
    };

    const [contador, setContador] = useState(valorInicial)

    const [persona, setPersona] = useState(personaInicial)

    /**
     * Función para actualizar el estado privado que contine el contador
     */
    function incrementarContador() {
        setContador(contador + 1);
    }

    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@example.com'
            }
        )
    }
    return (
        <div>
            <h1>Ejemplo de useState()</h1>
            <h2>Contado {contador}</h2>
            <h2>Datos de persona</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            <button onClick={incrementarContador}>IncrementarContador</button>
            <button onClick={actualizarPersona}>ActualizarPersona</button>
        </div>
    );
};



export default Ejemplo1;
