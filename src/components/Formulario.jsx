import React, {Fragment, useState } from 'react'

const Formulario = () => {

    const [nombre, setnombre] = useState('');
    const [edad, setedad] = useState('');
    const Validar = (event) => {
        event.preventDefault()
        console.log('Me ejecuté');
        if (!nombre.trim()) {
            console.log('El nombre está vacio')
            return
        }
        if (!edad.trim()) {
            console.log('La edad está vacio')
            return
        }
    }

    return (
        <div className='container'>
            <form onSubmit={Validar} className='form-groupb'>
                <input
                    placeholder='Introduce el nombre'
                    className='form-control mb-3'
                    type="text"
                    onChange={(e) => { setnombre(e.target.value) }}
                />
                {
                    nombre.trim() ? '' : <p className="text-danger">El nombre está vacio</p>
                }
                <input
                    placeholder='Introduce la edad'
                    className='form-control mb-3'
                    type="text"
                    onChange={(e) => { setedad(e.target.value) }}
                />
                {
                    edad.trim() ? '' : <p className="text-danger">La edad está vacio</p>
                }
                <input
                    className='btn btn-info btn-block mb-3'
                    type="submit" />
            </form>
        </div>
    )
}

export default Formulario