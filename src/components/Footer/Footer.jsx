import React from 'react'

import styleFooter from './Footer.module.css'


// 1. FOOTER_JSX -> Armar el modelo del Footer.
// 2. FOOTER_JSX -> Usar el Objeto "grupo2" de APP para traer datos [id, nombre] del grupo
// 3. FOOTER_MODULE.CSS -> Generar los estilos en Footer.module.css
// 4. FOOTER_JSX Usar -> los estilos con className={styleFooter.NOMBRECLASE}

const Footer = () => {
  return (
    <>
      <div className={styleFooter.container}>
        <h1> </h1>
      </div>
    </>
  )
}

export default Footer