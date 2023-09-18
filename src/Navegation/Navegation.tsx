import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Category } from "../pages/Category";
import { Search } from "../pages/Search";
import { CategoryDetailts } from "../pages/CategoryDetailts";
import { FoodDetailts } from "../pages/FoodDetailts";
import { Contacts } from "../pages/Contacts";
import { Loader } from "../components/Loader";

export const Navegation = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  }, []);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/buscar" element={<Search />} />
        <Route
          path="/categorias-detalle/:category"
          element={<CategoryDetailts />}
        />
        <Route path="/alimento/:id" element={<FoodDetailts />} />
        <Route path="/contactos" element={<Contacts />} />
      </Routes>
      <Menu />
    </>
  );
};
