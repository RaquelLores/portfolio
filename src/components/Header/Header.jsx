import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass =
    "rounded-md px-3 py-2 text-sm text-green-400 transition hover:text-green-500 sm:text-base";
  const currentPath = location.pathname;
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];
  const mobileNavItems = navItems.filter((item) => item.to !== currentPath);

  return (
    <header className="bg-gray-800 px-4 py-4 text-white sm:px-6">
      <nav className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between sm:hidden">
          <Link
            to="/"
            onClick={closeMenu}
            className="rounded-md px-3 py-2 text-base font-semibold text-green-400 hover:text-green-500"
          >
            RL
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-600 text-green-400 transition hover:border-green-500 hover:text-green-500"
          >
            <span className="sr-only">Open navigation menu</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span className={`h-0.5 w-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 flex flex-col rounded-xl border border-slate-700 bg-slate-900/95 p-2 shadow-lg sm:hidden">
            {mobileNavItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={closeMenu} className={navLinkClass}>
                {item.label}
              </Link>
            ))}
          </div>
        )}

        <div className="hidden items-center justify-center gap-2 sm:flex sm:gap-4 md:gap-8">
        <Link
          to="/"
          className={navLinkClass}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={navLinkClass}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={navLinkClass}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={navLinkClass}
        >
          Contact
        </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
