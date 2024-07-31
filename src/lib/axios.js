import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1", // replace with your API base URL
  timeout: 10000,
  // set a timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

// // Add a request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // You can modify the request config before the request is sent
//     // For example, add an Authorization header
//     // config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     // Any status code that falls within the range of 2xx causes this function to trigger
//     return response;
//   },
//   (error) => {
//     // Any status codes that falls outside the range of 2xx causes this function to trigger
//     return Promise.reject(error);
//   }
// );
