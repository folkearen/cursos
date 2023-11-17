/**
 * Ejemplode useState()
 * useContext()
 */
import React, { useContext, useState } from 'react';

const miContexto = React.createContext(null);

const Componente1 = () => {
    const state = useContext(miContexto);
    
    return (
        <div>
            <h1>Ek token es: {state.token}</h1>
            <Componente2/>
        </div>
    );
}

const Componente2 = () => {
    const state = useContext(miContexto);
    
    return (
        <div>
            <h2>La sesion es {state.sesion}</h2>
        </div>
    );
}



export default function MiComponenteConContexto()  {

    const estadoInicial = {
        token:'12345',
        sesion: 1
    }

    const [sesionData, setsesionData] = useState(estadoInicial)

    function actualizarSesion() {
        setsesionData(
            {
                token: "JWT123456",
                sesion: sesionData.sesion + 1
            }
        )
    }
    return (
        <miContexto.Provider value={sesionData}>
            <Componente1/>
            <button onClick={actualizarSesion}>actualizar Sesion</button>
        </miContexto.Provider>
    );
}



