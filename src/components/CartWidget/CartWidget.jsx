import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/carrito">
            <FaShoppingCart/>
            <span className="numerito">{cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
}
 
export default CartWidget