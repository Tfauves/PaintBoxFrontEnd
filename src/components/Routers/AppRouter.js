import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../Hero/Hero";
import NavBar from "../Navbar/Navbar";
import Landing from "../Landing";

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </div>
  );
};
export default AppRouter;
