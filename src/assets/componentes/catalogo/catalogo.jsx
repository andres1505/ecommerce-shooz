import React from "react";
import style from "./catalogo.module.css";
import naranja from "./imgs/naranja.webp";
import red from "./imgs/redb.webp";
import tres from "./imgs/tres.webp";
import rosa from "./imgs/rosa.webp";
import banner from "./imgs/banner.webp";
import { ProductList } from "./ProductList";
import { useState } from 'react';
import { HeaderC } from './headerC'; 


function Catalogo() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
  return (
    <>
	      <div className={style.for}>
        <h1 className={style.h1}>CATALOGO</h1 >
      </div>



      <div className={style.gallery}>
        <img src={naranja} alt="nike" />
        <img src={red} alt="nike" />
        <img src={tres} alt="nike" />
        <img src={rosa} alt="nike" />
      </div>
	  <div><img className={style.for} src={banner} alt="banner" /></div>
	  <HeaderC
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
      <ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
    </>
  );
};

export default Catalogo;
