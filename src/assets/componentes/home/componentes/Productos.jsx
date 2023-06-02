import React from "react";
import "./Productos.css";


function Productos(props) {
  return (
    <>

          <img className="productos" src={props.img} alt="" />
          <h2 className="nombrezapatilla">{props.nombZapatilla}</h2>



    </>
  );
}
export default Productos;
