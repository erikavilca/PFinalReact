import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";
import Productos from "./Productos";
import Layout from "./Layout";
import NoPage from "./NoPage";
import ProductosDetallados from "./ProductosDetallado";
import CartWidget from "./CartWidget";
import ProdElectro from "./prodElectro";

import "./styleProd.css";
import React from "react";

function NavBar() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="Alimento" element={<Productos />} />
            <Route path="ProdElectro" element={<ProdElectro />} />
            <Route path="Productos/:id" element={<ProductosDetallados />} />
            <Route path="CartWidget" element={<CartWidget />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default NavBar;
