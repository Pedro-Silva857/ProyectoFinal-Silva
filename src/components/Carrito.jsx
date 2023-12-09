import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
      vaciarCarrito();
    }

  return (
    <div className='container'>
        <h1 className='main-titles'>Carrito de Compras</h1>

     {
        carrito.map((prod) => (
            <div key={prod.id}>
                <h3>{prod.titulo}</h3>
                <p>Precio por unidad: $ {prod.price}</p>
                <p>Precio total: $ {prod.price * prod.cantidad} </p> 
             </div>
        ))
     }
    {
      carrito.length > 0 ?
      <>
      <h2>Precio total: ${precioTotal()}</h2>
      <button onClick={handleVaciar}>Vaciar</button>
      </> :
      <h2>El carrito esta vacio</h2>

    }
     
     
    </div>
  )
}

export default Carrito
