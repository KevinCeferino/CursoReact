import React, {Fragment, useState} from 'react'

const Listado = () => {
    const [Numeros, setNumeros] = useState([1,2,3,4,5,6,7,8,9])
    return (
        <Fragment>
            <ul>
                {
                    Numeros.map( (item, index) => 
                    <li key={index}>{item}</li>
                    )
                }
            </ul>
        </Fragment>
    )
}

export default Listado;