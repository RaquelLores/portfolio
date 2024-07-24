import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';


function App() {

  return (
    <>
      <Router>
        <Header />
        <div className="main_section w-full min-h-screen scroll-smooth">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
