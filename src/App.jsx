import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/Footer.jsx";
import './index.css';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="main_section w-full min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;