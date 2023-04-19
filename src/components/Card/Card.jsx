import React from 'react'

import styleCard from './Card.module.css'


// La card es un componente que no se ve por si sola. Está armada para que reciba un miembro que se llama "member", que tiene un id, una img, un rol, un email. 


const Card = ({member}) => {

  return (
    <div className={styleCard.cardContainer}>

      <div className={styleCard.boxImg} >
        <p className={styleCard.rol}>{member.rol}</p>
        <div >
          <img src="/img/people1.png" className={styleCard.img} alt="img"/>    
        </div>
      </div>

      <div className={styleCard.btnMail}>  
        <p>{member.email}</p>    
      </div>

    </div>
  )
}


export default Card