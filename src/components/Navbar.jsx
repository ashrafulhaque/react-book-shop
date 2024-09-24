import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-8 sm:px-16 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Book Shop</div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-400 hover:text-white ${isActive ? "text-white" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-400 hover:text-white ${isActive ? "text-white" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-gray-400 hover:text-white ${isActive ? "text-white" : ""}`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `text-gray-400 hover:text-white ${isActive ? "text-white" : ""}`
            }
          >
            FAQ
          </NavLink>
        </div>

        <div className="hidden md:flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Buy Book
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
            Sign In
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 text-gray-400 hover:text-white ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 text-gray-400 hover:text-white ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block py-2 text-gray-400 hover:text-white ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `block py-2 text-gray-400 hover:text-white ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              FAQ
            </NavLink>
            <div className="mt-4 flex flex-col gap-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Buy Book
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
