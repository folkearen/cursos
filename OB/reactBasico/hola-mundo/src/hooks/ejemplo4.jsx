/**
 * Ejemplo de uso de pops.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de Childre Props </h1>
            <h2>Nombre: {props.nombre}</h2>
            {/* ! Prop.children pintra por defecto lo que se encuentre entre las etiquetas de apertura y cierre de este elemento */}
            {props.children}
        </div>

    );
}

export default Ejemplo4;
