import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    // const [variable, metodo para modificarla] = useState(valor inicial)
    const [age, setage] = useState(29)

    const birthday = () => {
        //Metodo para setiar age
        setage(age + 1)
    }
    return (
        <div>
            <div>
                <h1>Hola {props.name} desde componente funcional</h1>
                <h2>Tu edad es {age}</h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir anios
                    </button>
                </div>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
