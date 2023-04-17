import React from 'react'

import styleCard from './Card.module.css'


// La card es un componente que no se ve por si sola. Está armada para que reciba un miembro que se llama "member", que tiene un id, una img, un rol, un email. 
 

const Card = ({member}) => {
  return (
    <div>
      <h3>Card</h3>
        <div>{member.img}</div>
      <div>
        <h1>{member.rol}</h1>
        <h1>{member.email}</h1>    
      </div>
    </div>
  )
}


export default Card