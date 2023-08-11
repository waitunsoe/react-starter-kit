import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Addtocart from "./components/Addtocart";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/add-to-cart" element={<Addtocart />} />
    </Routes>
  </>
);

export default App;
