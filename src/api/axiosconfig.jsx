import axios from "axios";

const instance = axios.create({
  baseURL: "https://hackathon-project-0-1.vercel.app/",
});

//! edits
// const instance = axios.create({
//   baseURL: "http://localhost:5173/",
// });

export default instance;
