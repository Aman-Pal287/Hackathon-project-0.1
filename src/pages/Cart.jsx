import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userActions";
import "./Cart.scss";
import { useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.userReducer.users);
  const [confirmIndex, setConfirmIndex] = useState(null); // track which index is being confirmed for removal

  const IncreaseQuantityHandler = (index) => {
    const copyuser = { ...users, cart: [...users.cart] };
    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity + 1,
    };
    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const ConfirmRemove = (index) => {
    const copyuser = { ...users, cart: [...users.cart] };
    copyuser.cart.splice(index, 1);
    dispatch(asyncupdateuser(copyuser.id, copyuser));
    setConfirmIndex(null); // reset confirmation state
  };

  const DecreaseQuantityHandler = (index) => {
    if (users.cart[index].quantity > 1) {
      const copyuser = { ...users, cart: [...users.cart] };
      copyuser.cart[index] = {
        ...copyuser.cart[index],
        quantity: copyuser.cart[index].quantity - 1,
      };
      dispatch(asyncupdateuser(copyuser.id, copyuser));
    } else {
      setConfirmIndex(index); // show confirmation dialog
    }
  };

  return (
    <div className="cart-container">
      {users.cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 🛒</h2>
          <button onClick={() => navigate("/products")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <ul>
          {users.cart.map((c, index) => (
            <li key={c.product.id}>
              <img src={c.product.image} alt={c.product.title} />
              <span>{c.product.title}</span>
              <span>₹{c.product.price}</span>

              <div className="quantity-control">
                <button onClick={() => DecreaseQuantityHandler(index)}>
                  -
                </button>
                <span>{c.quantity}</span>
                <button onClick={() => IncreaseQuantityHandler(index)}>
                  +
                </button>
              </div>

              {confirmIndex === index && (
                <div className="confirm-dialog">
                  <p>Are you sure you want to remove this product?</p>
                  <button onClick={() => ConfirmRemove(index)}>Yes</button>
                  <button onClick={() => setConfirmIndex(null)}>No</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
