import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncdeleteproduct,
  asyncupdateproduct,
} from "../../store/actions/productActions";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);
  const product = products?.find((product) => product.id == id);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description,
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const UpdateProductHandler = (product) => {
    dispatch(asyncupdateproduct(id, product));
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteproduct(id));
    navigate("/products");
  };

  return product ? (
    <>
      <div className="product-detail-page">
        <div className="product-gallery">
          {product?.image && (
            <img src={product.image} alt="" className="main-image" />
          )}
        </div>

        <div className="product-info">
          <h1>{product?.title}</h1>
          <p className="price">${product?.price}</p>

          <div className="size-selector">
            <p>Size:</p>
            <div className="sizes">
              {["6", "8", "10", "12", "14"].map((size) => (
                <button key={size}>{size}</button>
              ))}
            </div>
          </div>

          <button className="add-to-bag">Add to Bag</button>

          <p className="description">{product?.description}</p>

          <div className="other-colours">
            <p>Other Colours</p>
            <div className="swatches">
              {Array.isArray(product?.variants) &&
              product.variants.length > 0 ? (
                product.variants.map((variant, idx) => (
                  <img key={idx} src={variant.image} alt="" />
                ))
              ) : (
                <span>No variants</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
      {users && users?.isAdmin && (
        <form
          onSubmit={handleSubmit(UpdateProductHandler)}
          className="product-detail-admin-form w-full flex flex-col justify-start items-start"
        >
          <h1>update</h1>
          <input
            {...register("image")}
            className="mb-3 outline-0 border-b p-2 text-4xl"
            type="url"
            placeholder="image url"
          />
          <input
            {...register("title")}
            className="mb-3 outline-0 border-b p-2 text-4xl"
            type="text"
            placeholder="title"
          />
          <input
            {...register("price")}
            className="mb-3 outline-0 border-b p-2 text-4xl"
            type="number"
            placeholder="0.00"
          />
          <textarea
            {...register("description")}
            className="mb-3 outline-0 border-b p-2 text-4xl"
            placeholder="enter description here..."
          ></textarea>
          <input
            {...register("category")}
            className="mb-3 outline-0 border-b p-2 text-4xl"
            type="text"
            placeholder="category"
          />
          <button className="update-btn mt-5 px-4 py-2 bg-blue-400 rounded">
            Update Product
          </button>
          <button
            type="button"
            onClick={DeleteHandler}
            className="delete-btn mt-5 px-4 py-2 bg-red-400 rounded"
          >
            Delete Product
          </button>
        </form>
      )}
    </>
  ) : (
    "Loading..."
  );
};

export default ProductDetails;
