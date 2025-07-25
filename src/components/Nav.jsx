import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Nav.scss";

const Nav = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const user = useSelector((state) => state.userReducer.users);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`custom-navbar ${
        isHomePage || isAboutPage ? "transparent-navbar" : ""
      }`}
    >
      <div className="navbar-header">
        <h1>KStyle Studio</h1>
        <div className="hamburger" onClick={toggleMenu}>
          <i class="ri-menu-line"></i>
        </div>
      </div>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Products
        </NavLink>
        {user ? (
          <>
            {user?.isAdmin && (
              <NavLink
                to="/admin/create-product"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Create Product
              </NavLink>
            )}
            <NavLink
              to="/admin/user-profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i class="ri-user-3-fill"></i>
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i class="ri-shopping-cart-line"></i>
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;
