import React, {useState} from 'react'

const Temperatura = () =>{

    const [temperatura, settemperatura] = useState(19);
    const Subir = () =>{
        settemperatura(temperatura+1);
    }
    const Bajar = ()=>{
        settemperatura(temperatura-1);
    }
    return (
        <div className='container'>
            <h2>La temperatura es: {temperatura}</h2>
            <div>
                {
                    temperatura > 21 ? <p className='alert alert-danger' >Hace calor</p> : <p className="alert alert-info">Hace frío</p>
                }
            </div>
            <button className='btn btn-outline-danger' onClick={Subir}>Aumentar temperatura</button>
            <button className='btn btn-outline-primary' onClick={Bajar}>Reducir temperatura</button>
        </div>
    )
}

export default Temperatura