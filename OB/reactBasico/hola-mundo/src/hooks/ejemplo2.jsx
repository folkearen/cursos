/**
 * useState() => Maneja el estado privado del componente
 * useEffect() => Sirve para controlar los cambios en la vista
 * useRef() => Sivrve para identificar/ referecial elemntos dentro de la vista
 */


import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    //Se creara dos contadores ambos con estados distintos

    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    //Crearemos referencia con useRef() para asociar una variable con un elemnto del DOM del componente.

    const myRef = useRef()

    function incrementar1() {
        setContador1(contador1 + 1)
    }
    function incrementar2() {
        setContador2(contador2 + 2)
    }

    /**
     * !Caso 1 ejecutar SIEMPRE un snippet de codigo
     * Cada vez que haya un cambio en el estado del componente se ejecuta aquello que esta dentro del userEffect
     */
    // useEffect(() => { //todo Version mas sencilla de userEffect
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')    
    //     console.log('Mostrando referencias a elementos del DOM: ')    
    //     console.log(myRef)    
    // })
    //! Caso 2, ejecuta solo cuando cambia el contador1
    // useEffect(() => { //todo Version mas sencilla de userEffect
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')    
    //     console.log('Mostrando referencias a elementos del DOM: ')    
    //     console.log(myRef)    
    // }, [contador1]);
    //! Caso 3, se ejecuta solo cuando cambia el contador 1 o el contador 2, si hubiera un contador 3 ejecutaria el efecto.
    useEffect(() => { //todo Version mas sencilla de userEffect
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')    
        console.log('Mostrando referencias a elementos del DOM: ')    
        console.log(myRef)    
    }, [contador1, contador2]);


    return (
        <div>
            <h1>Ejemplo de useState(), useEffect(), useRef()</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            <h4 ref={myRef}>Ejemplo de elemento refereciado</h4>
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;

