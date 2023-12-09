import React from 'react'
import { Link } from 'react-router-dom'
import { toCapital } from '../../PedirItem/toCapital'
import ItemCount from './ItemCount'

const Item = ({producto}) => {
  return (
    <div className='producto'>
        <img src={producto.img} alt={producto.titulo}/>
        <div>
          <h3>{producto.titulo}</h3>
          <p>Precio: ${producto.price}</p>
          <p>Cantidad disponible: {producto.stock}</p>
          <p>Categoria: {toCapital(producto.categoria)}</p>
          <ItemCount />
          <Link className="ver-mas" to={`/item/${producto.id}`}> Ver más</Link>
        </div>
    </div>
  )
}

export default Item

