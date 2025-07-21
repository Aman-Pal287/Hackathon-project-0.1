import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <nav className="mb-10 flex justify-center items-center gap-x-5 p-5">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/">Products</NavLink>
      {user ? (
        <>
          {user && user?.isAdmin && (
            <NavLink to="/admin/create-product">Create Product</NavLink>
          )}

          <NavLink to="/admin/user-profile">Settings</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Nav;
