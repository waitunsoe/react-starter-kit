import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
