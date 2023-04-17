import React from 'react'

import styleTitulo from './Titulo.module.css'


// 1. TITULO_JSX -> Armar el modelo del TITULO.
// 2. TITULO_JSX -> Usar el Objeto "grupo2" de APP para traer datos [id, nombre] del grupo
// 3. TITULO_MODULE.CSS -> Generar los estilos en Titulo.module.css
// 4. TITULO_JSX Usar -> los estilos con className={styleTitulo.NOMBRECLASE}


const Titulo = ({group2}) => {
  return (
     <>
      <div className={styleTitulo.container}>
        <h1 className={styleTitulo.fuenteTitulo}>{group2.nombreGrup}</h1>
      </div>
      <div className={styleTitulo.containerId}>
        <h2 className={styleTitulo.fuenteID}> ID: {group2.idGroup}</h2>
      </div>
    </>
  )
}

export default Titulo