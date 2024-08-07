// lib/apiService.js
import axiosInstance from "./axios";

const apiService = {
  getData: (endpoint) => {
    if (!endpoint) {
      axiosInstance.get(endpoint).then((res) => res.data);
    }
  },
  addData: (endpoint, data) => {
    if (!endpoint) {
      axiosInstance.post(endpoint, data).then((res) => res.data);
    }
  },
  updateData: (endpoint, id, data) => {
    if (!endpoint) {
      axiosInstance.put(`${endpoint}/${id}`, data).then((res) => res.data);
    }
  },
  deleteData: (endpoint, id) => {
    if (!endpoint) {
      axiosInstance.delete(`${endpoint}/${id}`).then((res) => res.data);
    }
  },
};

export default apiService;
