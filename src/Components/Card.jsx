import React from 'react';


const Card = ({mascota}) => {
  return (
    <div>
    <h1>Escogiste tu mascota llamada {mascota.nombre} que es un {mascota.animalFav}</h1>
    </div>
  )
}

export default Card
