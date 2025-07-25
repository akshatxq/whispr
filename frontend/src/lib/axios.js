import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
  import.meta.env.MODE === "development"
    ? "https://whispr-g444.onrender.com/api"
    : "/api", // optional if deploying frontend later

  withCredentials: true,
});
