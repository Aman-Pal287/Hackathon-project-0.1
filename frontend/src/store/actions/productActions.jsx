import axios from "../../api/axiosconfig";
import { loadproduct } from "../reducers/productSlice";

// Load products from public/products.json
export const asyncloadproducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("products.json");
    dispatch(loadproduct(data));
  } catch (error) {
    console.log("Error loading products:", error);
  }
};

// Since we can't save to JSON file from frontend, just update Redux state
export const asynccreateproduct = (product) => async (dispatch, getState) => {
  try {
    // Normally we would POST to a server. For frontend-only, we simulate it:
    const state = getState().productReducer.products;
    const updatedProducts = [...state, product];
    dispatch(loadproduct(updatedProducts));
  } catch (error) {
    console.log("Error creating product:", error);
  }
};

// Update product (in Redux state only)
export const asyncupdateproduct =
  (id, updatedProduct) => async (dispatch, getState) => {
    try {
      const state = getState().productReducer.products;
      const updatedProducts = state.map((p) =>
        p.id === id ? { ...p, ...updatedProduct } : p
      );
      dispatch(loadproduct(updatedProducts));
    } catch (error) {
      console.log("Error updating product:", error);
    }
  };

// Delete product (in Redux state only)
export const asyncdeleteproduct = (id) => async (dispatch, getState) => {
  try {
    const state = getState().productReducer.products;
    const updatedProducts = state.filter((p) => p.id !== id);
    dispatch(loadproduct(updatedProducts));
  } catch (error) {
    console.log("Error deleting product:", error);
  }
};

// export const asyncloadproducts = () => async (dispatch, getState) => {
//   try {
//     const { data } = await axios.get("/products");
//     dispatch(loadproduct(data));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const asynccreateproduct = (product) => async (dispatch, getState) => {
//   try {
//     await axios.post("/products", product);
//     dispatch(asyncloadproducts());
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const asyncupdateproduct =
//   (id, product) => async (dispatch, getState) => {
//     try {
//       await axios.patch("/products/" + id, product);
//       dispatch(asyncloadproducts());
//     } catch (error) {
//       console.log(error);
//     }
//   };

// export const asyncdeleteproduct = (id) => async (dispatch, getState) => {
//   try {
//     await axios.delete("/products/" + id);
//     dispatch(asyncloadproducts());
//   } catch (error) {
//     console.log(error);
//   }
// };
