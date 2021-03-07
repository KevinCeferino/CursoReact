import React, {Fragament, Fragment, useState} from 'react'

const Contador = () =>{

    const [Numero, setNumero] = useState(0);
    const Aumentar = () =>{
        setNumero(Numero+1);
    }
    const Reducir = () =>{
        setNumero(Numero-1);
    }
    return (
        <Fragment>
            <h2>Cantidad del contador: {Numero}</h2>
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Reducir}>Reducir</button>
        </Fragment>
    )
}

export default Contador;