import React from 'react'

const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {

  return (
    <div className='Contador'>
      <div className='item-count'>
        <button className='button' onClick={handleRestar}>-</button>
        <h3 className='Numero'>{cantidad}</h3>
        <button className='button' onClick={handleSumar}>+</button>
      </div>
      <div>
        <button className='agregar-al-carrito' onClick={handleAgregar}>
            Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount
