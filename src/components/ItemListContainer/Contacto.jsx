import React, { useState } from 'react'

const Contacto = () => {

    const [valores, setValores] = useState({
        nombre: "",
        apellido: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviado', valores)
    }

    const handleValores = (e) => {
        setValores({...valores, 
            [e.target.name]: e.target.value
        });
    }
   

  return (
    <div className='container'>
        <h1 className='main-title'> Contacto</h1>
      <form className='formulario' onSubmit={handleSubmit}>
        
        <input type='text' 
               placeholder='Ingresa tu nombre'
               value={valores.nombre}
               onChange={handleValores}
               name='nombre'
        />
        <input type='apellido'
               placeholder='Ingresa tu apellido'
               value={valores.apellido}
               onChange={handleValores}
               name='apellido'
        />
        <button type='submit'> Enviar</button>
      </form>
    </div>
  )
}

export default Contacto
