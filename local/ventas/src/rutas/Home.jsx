import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="../../../carrusel/offElectro.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="../../../carrusel/offLimpieza.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../../carrusel/offGasto.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="containerLink">
        <Link className="electro" to={"ProdElectro"}>
        <h4>tecnologia</h4>
          <img src="../../public/tecnologia.webp" />
        </Link>

        <Link className="hogar" to={"Alimento"}>
        <h4>Supermercado</h4>
          <img src="../../public/alimentosperfil.jpg" />
        </Link>
      </div>
    </>
  );
}

export default Home;
