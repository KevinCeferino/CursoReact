import React, {Fragment} from 'react'

function Hola(){
    let nombre = 'Kevin'
    return (
        <Fragment>
            <h2>Hola {nombre} {1+1} </h2>
        </Fragment>
    );
}

export default Hola;