import React, { useState } from "react";
import Card from "./Card";


const Form = () => {
  const [mascota, setMascota] = useState({
    nombre: "",
    animalFav: "",
  });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[a-zA-Z\s]*$/;
    if (
      mascota.nombre.length > 2 &&
      !mascota.nombre.startsWith(" ") &&
      regex.test(mascota.nombre) &&
      mascota.animalFav.length > 5 &&
      regex.test(mascota.animalFav)
    ) {
      setMostrar(true);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {mostrar ? (
        <Card mascota={mascota} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre </label>
          <input
            type="text"
            onChange={(event) =>
              setMascota({ ...mascota, nombre: event.target.value })
            }
          />
          <label>Animal favorito </label>
          <input
            type="text"
            onChange={(event) =>
              setMascota({ ...mascota, animalFav: event.target.value })
            }
          />
          <button>Enviar respuesta</button>
          {error && (
            <h4 style={{ color: "red" }}>
              {" "}
              “Por favor chequea que la información sea correcta”
            </h4>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;
