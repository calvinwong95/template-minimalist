import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageStateProvider } from "./context/PageStateProvider.js";
import Home from "./pages/Home";
import Product from "./pages/Products";
import Report from "./pages/Report";
import About from "./pages/About";

function App() {
  return (
    <>
      <PageStateProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<About />} />
            <Route path="/menu" element={<Product />} />
            <Route path="/location" element={<Report />} />
          </Routes>
        </Router>
      </PageStateProvider>
    </>
  );
}

export default App;
