import axios from "../../api/axiosconfig";
import { loaduser, removeuser } from "../reducers/userSlice";
// Load user from localStorage (if logged in)
export const asynccurrentuser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loaduser(user));
    }
  } catch (error) {
    console.log("Error loading user:", error);
  }
};

// Logout user (remove from localStorage)
export const asynclogoutuser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeuser());
  } catch (error) {
    console.log("Error logging out:", error);
  }
};

// Login user by checking against localStorage list
export const asyncloginuser = (user) => async (dispatch) => {
  try {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    );
    if (matchedUser) {
      localStorage.setItem("user", JSON.stringify(matchedUser));
      dispatch(asynccurrentuser());
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.log("Error logging in:", error);
  }
};

// Register user and save to localStorage
export const asyncregisteruser = (user) => async () => {
  try {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === user.email);
    if (exists) {
      console.log("User already exists");
      return;
    }
    const newUser = { ...user, id: Date.now() };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("User registered:", newUser);
  } catch (error) {
    console.log("Error registering user:", error);
  }
};

// Update current logged-in user and localStorage list
export const asyncupdateuser = (id, updatedUser) => async (dispatch) => {
  try {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const index = users.findIndex((u) => u.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("user", JSON.stringify(users[index]));
      dispatch(asynccurrentuser());
    }
  } catch (error) {
    console.log("Error updating user:", error);
  }
};

// Delete current user from localStorage
export const asyncdeleteuser = (id) => async (dispatch) => {
  try {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.filter((u) => u.id !== id);
    localStorage.setItem("users", JSON.stringify(users));
    dispatch(asynclogoutuser());
  } catch (error) {
    console.log("Error deleting user:", error);
  }
};

// export const asynccurrentuser = () => async (dispatch, getState) => {
//     try {
//         const user = JSON.parse(localStorage.getItem("user"));
//         if (user) dispatch(loaduser(user));
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const asynclogoutuser = () => async (dispatch, getState) => {
//     try {
//         localStorage.removeItem("user");
//         dispatch(removeuser());
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const asyncloginuser = (user) => async (dispatch, getState) => {
//     try {
//         const { data } = await axios.get(
//             `/users?email=${user.email}&password=${user.password}`
//         );
//         localStorage.setItem("user", JSON.stringify(data[0]));
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const asyncregisteruser = (user) => async (dispatch, getState) => {
//     try {
//         const res = await axios.post("/users", user);
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const asyncupdateuser = (id, user) => async (dispatch, getState) => {
//     try {
//         const { data } = await axios.patch("/users/" + id, user);
//         localStorage.setItem("user", JSON.stringify(data));
//         dispatch(asynccurrentuser());
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const asyncdeleteuser = (id) => async (dispatch, getState) => {
//     try {
//         await axios.delete("/users/" + id);
//         dispatch(asynclogoutuser());
//     } catch (error) {
//         console.log(error);
//     }
// };
