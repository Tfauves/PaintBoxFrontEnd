import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import Landing from "../Home/Landing";
import ColorGallery from "../Color/ColorGallery";
import Products from "../Products/Products";

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/colorGallery" element={<ColorGallery />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};
export default AppRouter;
