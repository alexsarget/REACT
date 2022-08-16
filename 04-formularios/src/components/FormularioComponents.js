import React from 'react'

export const FormularioComponents = () => {
  return (
    <div>
        <h1>
            Fomularios con REACT 
        </h1>

        <form onSubmit={}>
          <input type="text" placeholder='Nombre'/>
          <input type="text" placeholder='Apellido'/>
          <select>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
          <textarea placeholder='biografia'></textarea>

          <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}
