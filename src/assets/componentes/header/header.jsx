import React from "react";
import style from "./header.module.css";
import logo from "./imgs/Shooz.png";

const Header = () => {
  return (
    <>
      <header className={style.encabezado}>
        <img className={style.logo} src={logo} alt="" />
        <nav className={style.menu}>
          <ul className={style.ul}>
            <li>
              <a className={style.a} href="">
                HOME
              </a>
            </li>
            <li>
              <a className={style.a} href="">
                CATALOGO
              </a>
            </li>
            <li>
              <a className={style.a} href="">
                MAS INFORMACION
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
