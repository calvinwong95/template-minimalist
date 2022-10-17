import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { PageStateProvider } from "./context/PageStateProvider.js";

import Product from "./pages/Products";
import About from "./pages/About";
import Location from "./pages/Location";
import ContentContainer from "./service/ContentContainer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <PageStateProvider>
        <Router>
          <Navbar />
          <ContentContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-story" element={<About />} />
              <Route path="/menu" element={<Product />} />
              <Route path="/location" element={<Location />} />
            </Routes>
          </ContentContainer>
        </Router>
      </PageStateProvider>
    </>
  );
}

export default App;
