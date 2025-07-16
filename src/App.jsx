import React from "react";
import Home from "./Home/Home.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Product_Click from "./Product_Click/Product_Click.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product/:id" element={<Product_Click />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
