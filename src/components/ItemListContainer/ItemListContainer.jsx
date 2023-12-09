import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { pedirDatos } from "../../PedirItem/pedirDatos";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../main"


const ItemListContainer = () => {


 const [productos, setProductos] = useState([]);
 const [titulo, setTitulo] = useState ("Productos");
 const categoria = useParams().categoria;



 useEffect(() => {

   // const productosRef = collection(db, "productos");
   // getDocs(productosRef)
   //   .then((resp) => {
   //    setProductos(
   //       resp.docs.map((doc) => {
   //          return { ...doc.data(),id: doc.id}
   //       })
   //    )
   //   })

    pedirDatos()
    .then((res) => {
      if (categoria){
         setProductos(res.filter((prod) => prod.categoria === categoria));
         setTitulo(categoria);
      }else {
         setProductos(res);
         setTitulo("Productos");
      }
    })
 }, [categoria])

 
 

    return (
        <div>
           <ItemList productos={productos} titulo={titulo}/>
        </div>
    )
       
}

export default ItemListContainer