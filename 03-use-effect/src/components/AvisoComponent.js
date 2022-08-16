import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(()=>{
        //Cuando el componente se monta
        alert("el componente AvisoComponent esta montado");

        //Cuando el componente se desmonta
        return()=>{
            alert("Componente desmontado");
        };

    },[]);//Se ejecuta una vez por que le paso el array vacio

  return (
    <div>
        <hr/>
        <h1>Saludos Alejandro</h1>
        <button onClick={e=>{
            alert("Bienvenido")
        }}>Mostrar alerta</button>
    </div>
  )
}
