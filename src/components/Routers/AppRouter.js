import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../Hero/Hero";
import About from "../Common/About";
import NavBar from "../Navbar/Navbar";

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};
export default AppRouter;
