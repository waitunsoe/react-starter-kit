import React from "react";
import "./App.css";
import { useStateContextCustom } from "./context/StateContext";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Carts from "./components/Carts";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Products />} />
        <Route path={"/carts"} element={<Carts />} />
      </Routes>
    </>
  );
};

export default App;
