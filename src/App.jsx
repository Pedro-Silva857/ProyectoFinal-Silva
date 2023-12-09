import './App.css'
import NavBar from './components/NavBar/NavBar'
import { FaShoppingCart } from "react-icons/fa";
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer'
import Contacto from './components/ItemListContainer/contacto'
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';


function App() {

  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      
         <NavBar />

         <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/productos" element={< ItemListContainer />}/>
          <Route path="/productos/:categoria" element={< ItemListContainer />}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
         </Routes>

      </BrowserRouter>
      </CartProvider>
    </div>
      
  )
}

export default App
