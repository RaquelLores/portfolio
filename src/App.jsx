import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";

function App() {
  return (
    <Router>
      <div className="main_section w-full min-h-screen scroll-smooth">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about me" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
