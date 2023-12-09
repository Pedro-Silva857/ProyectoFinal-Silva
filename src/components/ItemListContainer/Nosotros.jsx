import React, { useEffect } from 'react'

const Nosotros = () => {

    useEffect(() => {

      const clickear= () => {
        console.log('Click')
      }

        window.addEventListener("click", () => {
            console.log('click')
        })
    

        return () => {
         window.removeEventListener('click',() => {
            console.log('click');
        })
    }
    }, [])

  return (
    <div className='container'>
       <h1 className='main-title'> Nosotros</h1>
    </div>
  )
}

export default Nosotros
