import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Meal from "./components/Meal";
import DetailMeal from "./components/DetailMeal";
import Test from "./components/Test";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/detail/:id" element={<DetailMeal />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
};

export default App;
