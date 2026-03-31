import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 px-4 py-4 text-white sm:px-6">
      <nav className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 sm:gap-4 md:gap-8">
        <Link
          to="/"
          className="rounded-md px-3 py-2 text-sm text-green-400 hover:text-green-500 sm:text-base"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="rounded-md px-3 py-2 text-sm text-green-400 hover:text-green-500 sm:text-base"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="rounded-md px-3 py-2 text-sm text-green-400 hover:text-green-500 sm:text-base"
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className="rounded-md px-3 py-2 text-sm text-green-400 hover:text-green-500 sm:text-base"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
