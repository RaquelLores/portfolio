
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/Footer.jsx";
import './index.css';

function App() {
  return (
    <Router>
      <div className="main_section w-full min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </div>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
