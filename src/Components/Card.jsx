import React from 'react';
import CardStyles from "../styles/Card.module.css"


const Card = ({mascota}) => {
  return (
    <div className={CardStyles.CardContainer}>
    <h1>Escogiste tu mascota llamada {mascota.nombre} que es un {mascota.animalFav}</h1>
    </div>
  )
}

export default Card
