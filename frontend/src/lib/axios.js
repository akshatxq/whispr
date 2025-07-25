import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://whispr-g444.onrender.com/api",
  withCredentials: true,
});
