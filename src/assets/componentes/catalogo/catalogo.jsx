import React from "react";
import style from "./catalogo.module.css";
import naranja from "./imgs/naranja.webp";
import red from "./imgs/redb.webp";
import tres from "./imgs/tres.webp";
import rosa from "./imgs/rosa.webp";
import FuncionW from "./funcion/funcionW";
import FuncionM from "./funcion/funcionM";

const Catalogo = () => {
  return (
    <>
      <div className={style.for}>
        <h2 className={style.h2}>FOR HER</h2 >
      </div>
      <FuncionW />
      <div className={style.gallery}>
        <img src={naranja} alt="nike" />
        <img src={red} alt="nike" />
        <img src={tres} alt="nike" />
        <img src={rosa} alt="nike" />
      </div>
      <div className={style.for}>
        <h2 className={style.h2}>FOR HIM</h2 >
      </div>
      <FuncionM />
    </>
  );
};

export default Catalogo;
