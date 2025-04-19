import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-green-400 hover:text-green-500">
          Home
        </Link>
        <Link to="/about" className="text-green-400 hover:text-green-500">
          About
        </Link>
        <Link to="/projects" className="text-green-400 hover:text-green-500">
          Portfolio
        </Link>
        <Link to="/contact" className="text-green-400 hover:text-green-500">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
