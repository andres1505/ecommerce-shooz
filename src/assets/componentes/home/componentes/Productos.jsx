import React from "react";
import "./Productos.css";
import zapatos from "../imagenes/producto-1.png"



function Productos (props){
    return(
        <>
        <div className="contenedor-productos">
            <div className="productos">
                <img src={zapatos} alt="" />                
                <h1 className="nombre-zapatilla">{props.nombZapatilla}</h1>
            </div>
        </div>
        </>        
    );
}
export default Productos;