import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userActions";
import "./Products.css/Products.scss";
import { useEffect } from "react";

const Products = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);

  const AddtoCartHandler = (product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id);

    if (x == -1) {
      copyuser.cart.push({ product, quantity: 1 });
    } else {
      copyuser.cart[x] = {
        product,
        quantity: copyuser.cart[x].quantity + 1,
      };
    }
    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const rederproduct = products.map((product) => {
    return (
      <div className="product-card" key={product.id}>
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <small>{product.description.slice(0, 100)}..</small>
        <div className="product-footer">
          <p>₹ {product.price}</p>
          <button onClick={() => AddtoCartHandler(product)}>Add to Cart</button>
        </div>
        <Link className="more-info-link" to={`/product/${product.id}`}>
          More Info
        </Link>
      </div>
    );
  });

  useEffect(() => {
    const navBar = document.querySelector(".custom-navbar");
    navBar.style.backgroundColor = `var(--bg-cream)`;
    navBar.style.color = `var(--text-dark)`;
  });

  return products.length > 0 ? (
    <div className="products-container">{rederproduct}</div>
  ) : (
    "Loading..."
  );
};

export default Products;
