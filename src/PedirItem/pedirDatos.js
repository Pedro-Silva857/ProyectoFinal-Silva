import React from 'react'
import data from "../data/products.json"

export const pedirDatos = () => {
  return new Promise ((resolve, reject) => {
    setTimeout( () => {
        resolve(data);
    }, 400)
  })
}
 export const pedirItemPorId = (id) => {
     return new Promise ((resolve, reject) => {
        const item = data.find((el) => el.id === id);

        if (item) {
            resolve (item);
          }else {
            reject({
                error: "No se encontro el producto"
            })
          }
     })
  }



