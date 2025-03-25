import axios from "axios";

// Get the token from localStorage
const accessToken = localStorage.getItem("access_token");

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Change this if your API URL is different
  headers: {
    "Content-Type": "application/json",
    Authorization: accessToken ? `Bearer ${accessToken}` : "",
  },
});

// Automatically attach the token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
