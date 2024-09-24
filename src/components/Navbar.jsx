import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        BookShop
      </Link>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
      </div>
      <div className="nav-buttons">
        <button>Buy Book</button>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
