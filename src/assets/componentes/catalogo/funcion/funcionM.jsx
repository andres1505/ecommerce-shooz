import React from 'react'
import style from '../catalogo.module.css'

import { useState, useEffect } from "react";

function FuncionM() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/productos")
      .then((response) => response.json())
      .then((data) => setProductos(data.slice(10)));
  }, []);

  return (
    <div className={style.main}>

      {productos.length > 0 ? (
        <div className={style.contenedor}>
          {productos.map((producto) => (
            <div key={producto.id} >
              <div
                className={style.card}
              >
                <img
                  className={style.img}
                  src={producto.image}
                  alt={producto.nombre}
                />
                <div className={style.texto}>
                <h2>{producto.name}</h2>
                <p>Precio: {producto.price}</p>
                <button className={style.cardbutton}>Add to cart</button>
                </div>
              </div>
            </div>
            
          ))}
        </div>
        
      ) : (
        <p>Cargando productos...</p>
      )}

    </div>
  );
}


export default FuncionM;