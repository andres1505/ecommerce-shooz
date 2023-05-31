import React from "react";
import style from "./catalogo.module.css";
import naranja from "./imgs/naranja.jpg";
import red from "./imgs/redb.jpg";
import tres from "./imgs/tres.jpg";
import rosa from "./imgs/rosa.jpg";
import baw from "./imgs/baw.jpg";

function Catalogo() {
  return (
    <>
      <div className={style.main}>
        <div className={style.head}>
          <img className={style.head} src={baw} alt="" />
        </div>

        <div className={style.contenedor}>
          <div className={style.card}>
            <img
              className={style.img}
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bc26760f-9fd1-456b-9e60-47def7cec2d6/pegasus-40-road-running-shoes-HTDVsQ.png"
              alt=""
            />
            <div className={style.texto}>
              <h2>Nike Pegasus</h2>
              <p>$170</p>
            </div>
          </div>
          <div className={style.card}>
            <img
              className={style.img}
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/zzmfk3kwuw3ktkilxfnp/air-jordan-1-mid-shoes-D8g1Qq.png"
              alt=""
            />
            <div className={style.texto}>
              <h2>Air Jordan 1 Mid</h2>
              <p>$165</p>
            </div>
          </div>
          <div className={style.card}>
            <img
              className={style.img}
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/11bd4de0-9bc3-4132-8e31-3cdbff732ec9/wearallday-shoe-PDB9Wd.png"
              alt=""
            />
            <div className={style.texto}>
              <h2>Nike Wearallday</h2>
              <p>$95</p>
            </div>
          </div>
          <div className={style.card}>
            <img
              className={style.img}
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc4622c4-2769-4665-aa6e-42c974a7705e/air-force-1-07-shoes-rWtqPn.png"
              alt=""
            />
            <div className={style.texto}>
              <h2>Nike Air Force 1 '07</h2>
              <p>$145</p>
            </div>
          </div>
          <div className={style.card}>
            <img
              className={style.img}
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6e58a75a-9149-4e77-80ae-5a6cab84fcb1/air-jordan-1-low-se-shoes-lr4zSv.png"
              alt=""
            />
            <div className={style.texto}>
              <h2>Air Jordan 1 Low SE</h2>
              <p>$150</p>
            </div>
          </div>
        </div>

        <div className={style.gallery}>
          <img src={naranja} alt="a hot air balloon" />
          <img src={red} alt="a sky photo of an old city" />
          <img src={tres} alt="a small boat" />
          <img src={rosa} alt="a forest" />
        </div>
      <div className={style.contenedor}>
        <div className={style.card}>
          <img
            className={style.img}
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/efdc280f-734b-4758-8fa2-af3a02dd74c9/blazer-low-platform-shoes-6zdJdD.png"
            alt="Nike Blazer Low Platform"
          />
          <div className={style.texto}>
            <h2>Nike Blazer Low P</h2>
            <p>$135</p>
          </div>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f67930e0-a953-43b5-9214-86dcef9dad1a/air-force-1-shadow-shoes-s07s35.png"
            alt="Nike Air Force 1 Shadow"
          />
          <div className={style.texto}>
            <h2>Nike Air Force 1 Shadow</h2>
            <p>$170</p>
          </div>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4a357566-a159-4880-b28f-f6521ae8ce8b/air-force-1-07-shoes-3xdBGM.png"
            alt="Nike Air Force 1 '07"
          />
          <div className={style.texto}>
            <h2>Nike Air Force 1 '07</h2>
            <p>$145</p>
          </div>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/34daf410-4fec-46c4-8ce4-47721a8b66f9/af-1-shadow-shoes-5v66FL.png"
            alt="Nike AF-1 Shadow"
          />
          <div className={style.texto}>
            <h2>Nike AF-1 Shadow</h2>
            <p>$170</p>
          </div>
        </div>
        <div className={style.card}>
          <img
            className={style.img}
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/37b7ac81-4312-4ab8-88e9-1cb7071d3a16/zoom-bella-6-training-shoes-WKn2x7.png"
            alt="Nike Zoom Bella 6"
          />
          <div className={style.texto}>
            <h2>Nike Zoom Bella 6</h2>
            <p>$120</p>
          </div>
        </div>

        </div>
      </div>
    </>
  );
}

export default Catalogo;
