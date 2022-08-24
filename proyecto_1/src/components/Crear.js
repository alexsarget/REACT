import React from 'react'

export const Crear = () => {

  const titulo ="Añadir Pelicula";

  return (
    <div className="add">
                <h3 className="title">{titulo}</h3>

                <form >
                    <input type="text" placeholder="Titulo"/>
                    <textarea placeholder="Descripción"></textarea>
                    <input type="submit" id='save' value="Guardar"/>
                </form>
    </div>
  )
}
