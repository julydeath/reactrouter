import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Done from "./components/Done";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="done" element={<Done />} />
      </Routes>
    </>
  );
}

export default App;
