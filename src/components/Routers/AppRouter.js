import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../Hero/Hero";
import About from "../Common/About";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};
export default AppRouter;
