import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <nav className="custom-navbar">
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
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
            Settings
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cart
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
    </nav>
  );
};

export default Nav;
