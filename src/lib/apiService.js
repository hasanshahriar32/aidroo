// lib/apiService.js
import axiosInstance from "./axios";

const apiService = {
  getData: (endpoint) => axiosInstance.get(endpoint).then((res) => res.data),
  addData: (endpoint, data) =>
    axiosInstance.post(endpoint, data).then((res) => res.data),
  updateData: (endpoint, id, data) =>
    axiosInstance.put(`${endpoint}/${id}`, data).then((res) => res.data),
  deleteData: (endpoint, id) =>
    axiosInstance.delete(`${endpoint}/${id}`).then((res) => res.data),
};

export default apiService;
