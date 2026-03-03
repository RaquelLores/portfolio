import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-center gap-10 md:gap-20">
        <Link
          to="/"
          className="text-green-400 hover:text-green-500 px-4 py-2.5 rounded-md"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-green-400 hover:text-green-500 px-4 py-2.5 rounded-md"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="text-green-400 hover:text-green-500 px-4 py-2.5 rounded-md"
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className="text-green-400 hover:text-green-500 px-4 py-2.5 rounded-md"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
