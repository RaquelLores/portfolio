import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/Header.jsx';
 

function App() {

  return (
    <>
    <Router>
      <div className="main_section w-full min-h-screen scroll-smooth">This is the main section
      <Header/>
      </div>
    </Router>
    </>
  );
}

export default App;
