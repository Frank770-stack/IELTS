// import axios from "axios";
// const backendUrl = "http://localhost:5000";

// export const axiosInstance = axios.create({
//   baseURL: `${backendUrl}/api`,
//   withCredentials: true,
// });

import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const axiosInstance = axios.create({
  baseURL: `${backendUrl}/api`,
  withCredentials: true,
});
