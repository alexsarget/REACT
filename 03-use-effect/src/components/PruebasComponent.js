import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {
    const [usuario,setUsuario]=useState("Alejandro Aguilar");
    const [fecha, setfecha]=useState("01-01-1998");
    const [contador,setContador]=useState(0);


    const modUsuario = e=>{
        setUsuario(e.target.value);
    };

    const cambiarFecha = e=>{
        setfecha(Date.now())
    }

    useEffect(()=>{
        console.log("Has cargado el componente PruebasComponent o has realizado un estado")
    },[])

    useEffect(()=>{
        setContador(contador+1);
        console.log("Has modificado el usuario " + contador );


    },[fecha,usuario])

    return (
    <div>
        <h1> Use Effect </h1>

        <strong >{usuario}</strong>
        <strong className={contador>=10 ? 'label label-green' : 'label'}>{fecha}</strong>

        <p>
            <input type="text" 
            onChange={modUsuario} 
            placeholder="Cambia el nombre"/>

            <button onClick={cambiarFecha}>Cambiar fecha</button>
        </p>

        {usuario=="Alejandro" && <AvisoComponent/>}
        
    </div>
     )
}
